import CardInformations from "./components/CardInformations"
import Header from "./components/Header"
import Transactions from "./components/Transactions"

function App() {

  return (
    <div style={{height: '100vh', background: '#020202', width: '100%'}}>
      <Header />
      <CardInformations />
      <Transactions />
    </div>
  )
}

export default App
