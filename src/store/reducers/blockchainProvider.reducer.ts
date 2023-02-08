import { createSlice } from "@reduxjs/toolkit"

export const blockChainProvider = createSlice({
  name: "blockChainProvider",
  initialState: {
    connection: null,
    chainId: null,
    account: "0x00...",
    nft: null,
  },
  reducers: {
    setProvider: (state, action) => {
      state.connection = action.payload
    },
    setNetwork: (state, action) => {
      state.chainId = action.payload
    },
    setAccount: (state, action) => {
      state.account = action.payload
    },
    setNft: (state, action) => {
      state.nft = action.payload
    },
  },
})

export const { setProvider, setAccount, setNetwork, setNft } =
  blockChainProvider.actions

export default blockChainProvider.reducer
