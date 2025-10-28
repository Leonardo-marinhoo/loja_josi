import * as S from './styles'
import { Container } from '../../styles/GlobalStyle'

const Newsletter = () => {
  return (
    <S.NewsletterSection>
      <Container>
        <S.Content>
          <S.Left>
            <S.Icon>📧</S.Icon>
            <div>
              <S.Title>Receba nossas ofertas exclusivas</S.Title>
              <S.Subtitle>
                Cadastre-se e ganhe 10% de desconto na primeira compra
              </S.Subtitle>
            </div>
          </S.Left>

          <S.Form>
            <S.Input type="email" placeholder="Seu melhor e-mail" />
            <S.Button>Cadastrar</S.Button>
          </S.Form>
        </S.Content>
      </Container>
    </S.NewsletterSection>
  )
}

export default Newsletter


