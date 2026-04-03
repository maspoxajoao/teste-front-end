import { Banner } from "./components/Banner"
import { Categories } from "./components/Categories"
import { Header } from "./components/Header"
import { ProductShelf } from "./components/ProductShelf"
import { Partners } from "./components/Partners"
import { BrandNav } from "./components/BrandNav"
import { Footer } from "./components/Footer"

function App() {
  return (
    <>
    <Header />
    <main>
      <Banner />
      <Categories />
      <ProductShelf title="Produtos relacionados" showFilter={true} /> 
      <Partners />
      <ProductShelf title="Produtos relacionados" showFilter={false} />
      <Partners />
      <BrandNav/>
      <ProductShelf title="Produtos relacionados" showFilter={false} />
      <Footer/>
    </main>
    </>
  )
}

export default App