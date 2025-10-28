import ProductList from '../../components/ProductList'
import ProductToolbar from '../../components/ProductToolbar'
import { Container, Section, Title } from '../../styles/GlobalStyle'
import { Products as data } from '../../data/Products'

type Props = {
  background: 'primary' | 'secondary'
  category?: string
  title?: string
}
const ProductSection = ({ background, category, title }: Props) => {
  return (
    <Section background={background}>
      <Container>
        <Title>{title || category}</Title>
        <ProductToolbar />
        <ProductList data={data} background={background} category={category} />
      </Container>
    </Section>
  )
}

export default ProductSection
