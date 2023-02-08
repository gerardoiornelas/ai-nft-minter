import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { NFTStorage, File } from "nft.storage"
import { Buffer } from "buffer"
import { ethers } from "ethers"
import { Box, Typography, Container } from "@mui/material"

import { UIShell } from "../UIShell"
import { Title } from "../Title"

import {
  loadAccount,
  loadProvider,
  loadNetwork,
  loadNft,
} from "../../store/interactions/blockchainProvider.interactions"

import nftAbi from "../../abis/NFT.json"
import { networkConfig } from "../../networkConfig"

import { StyledHome } from "./Home.styled"

interface Props {
  children: React.ReactNode
}

const AiNftMinter = ({ children }: Props) => {
  const [balance, setBalance] = useState(0)
  const [network, setNetwork] = useState(null)
  // const [provider, setProvider] = useState(null)

  let provider = null
  let chainId = null

  const dispatch = useDispatch()

  const [isLoading, setIsLoading] = useState(true)

  const loadBlockchainData = async () => {
    // Initiate provider
    const provider = loadProvider(dispatch)

    const chainId = await loadNetwork(provider, dispatch)

    // account
    const account = await loadAccount(dispatch)

    //load nft
    await loadNft(
      "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      nftAbi,
      provider,
      dispatch
    )
  }

  useEffect(() => {
    loadBlockchainData()
  }, [])

  return (
    <UIShell variant="default">
      <Container>
        <Box
          display="flex"
          justifyContent="space-between"
          sx={{
            backgroundColor: "#fafafa",
          }}
        ></Box>
        <Box></Box>
      </Container>
    </UIShell>
  )
}

export default AiNftMinter
