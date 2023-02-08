import React from "react"
import { Provider } from "react-redux"
import { Store } from "redux"

import { store } from "./src/store/store"

interface Props {
  element: React.ReactNode
  store: Store
}

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }: Props) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  return <Provider store={store}>{element}</Provider>
}
