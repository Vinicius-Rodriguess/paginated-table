import { Container, GlobalStyle } from "./styles/global"
import ProductsTable from "./components/productsTable"
import { products } from "./db/products"

function App() {
  return (
    <>
    <GlobalStyle/>
      <Container>
        <ProductsTable products={products}/>
      </Container>
    </>
  )
}

export default App
