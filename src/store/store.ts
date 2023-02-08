import { configureStore } from "@reduxjs/toolkit"

import blockchainProvider from "./reducers/blockchainProvider.reducer"

const store = configureStore({
  reducer: {
    blockchainProvider,
  },
})

export type RootState = ReturnType<typeof store.getState>

export { store }
