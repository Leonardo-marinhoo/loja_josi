import ProductList from '../../components/ProductList'
import ProductToolbar from '../../components/ProductToolbar'
import { Container, Section, Title } from '../../styles/GlobalStyle'
import { ComingSoon as data } from '../../data/Products'

const ComingSoon = () => {
  const background = 'primary'
  return (
    <Section background={background}>
      <Container>
        <Title>Lançamentos em Breve</Title>
        <ProductToolbar />
        <ProductList data={data} background={background} />
      </Container>
    </Section>
  )
}

export default ComingSoon
