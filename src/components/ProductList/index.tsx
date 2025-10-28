import { List } from './styles'
import Product from '../Product'
import { Product as ProductType } from '../../models/Product'

type Props = {
  data: ProductType[]
  category?: string
  background?: string
}

const ProductList = ({ background, data, category }: Props) => {
  const filterProducts = () => {
    if (category) {
      const newData = data.filter(
        (p) => p.details.category.toLowerCase() === category.toLowerCase()
      )
      return newData.slice(0, 4)
    } else {
      return data.slice(0, 4)
    }
  }
  const products = filterProducts()

  return (
    <List>
      {products?.map((product) => (
        <li key={product.id}>
          <Product product={product} background={background} />
        </li>
      ))}
    </List>
  )
}

export default ProductList
