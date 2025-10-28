import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'categories',
    element: <Categories />
  }
])

export default Routes
