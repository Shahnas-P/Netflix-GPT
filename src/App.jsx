import { Provider } from "react-redux"
import Body from "./features/layout/Body"
import appStore from "./app/store"


function App() {

  return (
    <>
    <Provider store={appStore}><Body/></Provider>
    </>
  )
}

export default App
