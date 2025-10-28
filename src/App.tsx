import { GlobalStyle } from './styles/GlobalStyle'
import { RouterProvider } from 'react-router-dom'
import Routes from './routes'
import Cart from './components/Cart'
import Footer from './containers/Footer'

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={Routes} />
      <Footer />
      <Cart />
    </>
  )
}

export default App
