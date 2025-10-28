import * as S from './styles'
import { Container, Title } from '../../styles/GlobalStyle'

const Testimonials = () => {
  return (
    <S.TestimonialsSection>
      <Container>
        <Title>O que nossos clientes dizem</Title>
        <S.Grid>
          <S.TestimonialCard>
            <S.Rating>⭐⭐⭐⭐⭐</S.Rating>
            <S.Text>
              "Excelente qualidade dos EPIs! Atendimento rápido e produtos
              certificados. Recomendo para todas as empresas que buscam
              segurança."
            </S.Text>
            <S.Author>
              <S.Avatar>👨‍💼</S.Avatar>
              <S.AuthorInfo>
                <S.Name>Carlos Silva</S.Name>
                <S.Position>
                  Engenheiro de Segurança - Construtora ABC
                </S.Position>
              </S.AuthorInfo>
            </S.Author>
          </S.TestimonialCard>

          <S.TestimonialCard>
            <S.Rating>⭐⭐⭐⭐⭐</S.Rating>
            <S.Text>
              "Compro há mais de 2 anos e nunca tive problemas. Entrega sempre
              no prazo e produtos de primeira linha. Virei cliente fiel!"
            </S.Text>
            <S.Author>
              <S.Avatar>👩‍💼</S.Avatar>
              <S.AuthorInfo>
                <S.Name>Maria Santos</S.Name>
                <S.Position>Gerente de Compras - Indústria XYZ</S.Position>
              </S.AuthorInfo>
            </S.Author>
          </S.TestimonialCard>

          <S.TestimonialCard>
            <S.Rating>⭐⭐⭐⭐⭐</S.Rating>
            <S.Text>
              "Melhor custo-benefício do mercado! Equipamentos de qualidade com
              preços justos. Suporte sempre disponível para tirar dúvidas."
            </S.Text>
            <S.Author>
              <S.Avatar>👨‍🔧</S.Avatar>
              <S.AuthorInfo>
                <S.Name>João Oliveira</S.Name>
                <S.Position>Supervisor de Obras - Engenharia Plus</S.Position>
              </S.AuthorInfo>
            </S.Author>
          </S.TestimonialCard>
        </S.Grid>
      </Container>
    </S.TestimonialsSection>
  )
}

export default Testimonials


