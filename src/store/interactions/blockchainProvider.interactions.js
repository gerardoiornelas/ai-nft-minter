import { ethers } from "ethers"

import {
  setProvider,
  setAccount,
  setNetwork,
  setNft,
} from "../reducers/blockchainProvider.reducer"

const loadProvider = dispatch => {
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  dispatch(setProvider(provider))

  return provider
}

const loadNetwork = async (provider, dispatch) => {
  const { chainId } = await provider.getNetwork()
  dispatch(setNetwork(chainId))

  return chainId
}

const loadAccount = async dispatch => {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  })
  const account = ethers.utils.getAddress(accounts[0])
  dispatch(setAccount(account))

  return account
}

const loadNftContract = (address, nftAbi, provider, dispatch) => {
  const nft = new ethers.Contract(address, nftAbi, provider)
  dispatch(setNft(nft))
  return nft
}

export { loadProvider, loadAccount, loadNetwork, loadNftContract }
