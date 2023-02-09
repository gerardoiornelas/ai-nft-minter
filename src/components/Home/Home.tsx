import React, { useEffect, useState } from "react"
import _ from "lodash"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { NFTStorage, File } from "nft.storage"
import { Buffer } from "buffer"
import { ethers } from "ethers"
import {
  Box,
  Grid,
  Typography,
  Container,
  TextField,
  Button,
} from "@mui/material"
import { LoadingButton } from "@mui/lab"

import { UIShell } from "../UIShell"

import {
  loadAccount,
  loadProvider,
  loadNetwork,
  loadNftContract,
} from "../../store/interactions/blockchainProvider.interactions"

import gioNftAbi from "../../abis/GioNFT.json"
import { networkConfig } from "../../networkConfig"

const AiNftMinter = () => {
  const blockchainProvider = useSelector(state => state.blockchainProvider)
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
    url: "",
    minted: false,
  })
  const [isWaiting, setIsWaiting] = useState(false)
  const [message, setMessage] = useState("")

  const loadBlockchainData = async () => {
    // Initiate provider
    const provider = loadProvider(dispatch)

    // load network/chainid
    await loadNetwork(provider, dispatch)

    // account
    await loadAccount(dispatch)

    //load nft
    await loadNftContract(
      "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      gioNftAbi,
      provider,
      dispatch
    )
  }

  const onSubmit = async () => {
    setIsWaiting(true)

    // Call AI API to generate a image based on description
    const imageData = await createImage()
    console.log({ imageData })

    // Upload image to IPFS (NFT.Storage)
    const tokenUri = await uploadImage(imageData)

    // Mint NFT
    await mintImage(tokenUri)
    setFormData(prevValue => ({ ...prevValue, minted: true }))
    setIsWaiting(false)
    setMessage("")
  }

  const createImage = async () => {
    setMessage("Generating Image...")

    // You can replace this with different model API's
    const URL = `https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2`

    // Send the request
    const response = await axios({
      url: URL,
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GATSBY_HUGGING_FACE_API_KEY}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify({
        inputs: formData.description,
        options: { wait_for_model: true },
      }),
      responseType: "arraybuffer",
    })

    const type = response.headers["content-type"]
    const data = response.data

    const base64data = Buffer.from(data).toString("base64")
    const img = `data:${type};base64,` + base64data // <-- This is so we can render it on the page
    setFormData(prevValue => ({ ...prevValue, image: img }))

    return data
  }

  const uploadImage = async (imageData: any) => {
    setMessage("Uploading Image...")
    let nftstorage, ipnft
    // Create instance to NFT.Storage
    if (!_.isNil(process.env.REACT_APP_NFT_STORAGE_API_KEY)) {
      nftstorage = new NFTStorage({
        token: process.env.REACT_APP_NFT_STORAGE_API_KEY,
      })
    }

    if (!_.isNil(nftstorage)) {
      // Send request to store image
      const { ipnft: ipnftInstance } = await nftstorage.store({
        image: new File([imageData], "image.jpeg", { type: "image/jpeg" }),
        name: formData.name,
        description: formData.description,
      })
      let ipnft = ipnftInstance
    }

    // Save the URL
    const url = `https://ipfs.io/ipfs/${ipnft}/metadata.json`
    setFormData(prevValue => ({ ...prevValue, url }))

    return url
  }

  const mintImage = async (tokenURI: string) => {
    setMessage("Waiting for Mint...")

    const signer = await blockchainProvider.connection.getSigner()
    const transaction = await blockchainProvider.nft
      .connect(signer)
      .mint(tokenURI, { value: ethers.utils.parseUnits("1", "ether") })
    await transaction.wait()
  }

  interface handleOnChangeTypes {
    target: {
      name: string
      value: string
    }
  }

  const handleOnChange = ({ target: { name, value } }: handleOnChangeTypes) => {
    setFormData(prevValue => ({ ...prevValue, [`${name}`]: value }))
  }

  const handleClickReset = () => {
    setFormData({
      name: "",
      description: "",
      image: "",
      url: "",
      minted: false,
    })
  }

  useEffect(() => {
    loadBlockchainData()
  }, [])
  console.log({ formData })
  return (
    <UIShell>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Box p={4}>
              <Box mb={2}>
                <Typography variant="h6">
                  Enter your details to generate an image using AI.
                </Typography>
              </Box>
              <Box component="form">
                <Box mb={2}>
                  <Box mb={2}>
                    <TextField
                      onChange={handleOnChange}
                      value={formData.name}
                      label={"Name"}
                      name="name"
                      fullWidth
                    />
                  </Box>

                  <Box mb={2}>
                    <TextField
                      onChange={handleOnChange}
                      value={formData.description}
                      label={"Description"}
                      name="description"
                      fullWidth
                    />
                  </Box>
                  <Box display="flex" justifyContent="space-between">
                    <Box>
                      <LoadingButton
                        onClick={onSubmit}
                        variant="contained"
                        color="primary"
                        loading={isWaiting}
                      >
                        Submit
                      </LoadingButton>
                    </Box>
                    <Box>
                      <Button onClick={handleClickReset} variant={"outlined"}>
                        Reset
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            {formData.minted ? (
              <Box display="flex" justifyContent={`center`}>
                <Box
                  component="img"
                  src={formData.image}
                  alt="ai minted image"
                  sx={{ width: "100%" }}
                />
              </Box>
            ) : (
              <Box>
                <Box
                  display="flex"
                  justifyContent="center"
                  flexDirection="column"
                  sx={{ height: "256px" }}
                  alignItems={`center`}
                >
                  <Typography>{message}</Typography>
                </Box>
              </Box>
            )}
          </Grid>
        </Grid>
      </Container>
    </UIShell>
  )
}

export default AiNftMinter
