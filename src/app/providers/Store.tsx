import { PropsWithChildren, FC } from "react"
import { Provider } from "react-redux"

import { store } from "store/store"

const AppStore: FC<PropsWithChildren> = props => {
  return <Provider store={store}>{props.children}</Provider>
}

export default AppStore
