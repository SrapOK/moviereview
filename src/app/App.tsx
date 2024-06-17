import AppRouter from "./providers/Router"
import AppStore from "./providers/Store"

const App = () => {
  return (
    <AppStore>
      <AppRouter />
    </AppStore>
  )
}

export default App
