import * as S from './styles'
import { Container } from '../../styles/GlobalStyle'

const Benefits = () => {
  return (
    <S.BenefitsSection>
      <Container>
        <S.Grid>
          <S.BenefitCard>
            <S.Icon>🚚</S.Icon>
            <S.BenefitTitle>Frete Grátis</S.BenefitTitle>
            <S.BenefitText>Acima de R$ 299 para todo o Brasil</S.BenefitText>
          </S.BenefitCard>

          <S.BenefitCard>
            <S.Icon>🔒</S.Icon>
            <S.BenefitTitle>Compra Segura</S.BenefitTitle>
            <S.BenefitText>
              Certificado SSL e pagamento 100% seguro
            </S.BenefitText>
          </S.BenefitCard>

          <S.BenefitCard>
            <S.Icon>✓</S.Icon>
            <S.BenefitTitle>EPIs Certificados</S.BenefitTitle>
            <S.BenefitText>Todos os produtos possuem CA válido</S.BenefitText>
          </S.BenefitCard>

          <S.BenefitCard>
            <S.Icon>💳</S.Icon>
            <S.BenefitTitle>Parcelamento</S.BenefitTitle>
            <S.BenefitText>Em até 12x sem juros no cartão</S.BenefitText>
          </S.BenefitCard>

          <S.BenefitCard>
            <S.Icon>⚡</S.Icon>
            <S.BenefitTitle>Entrega Rápida</S.BenefitTitle>
            <S.BenefitText>
              Receba em até 48h nas principais capitais
            </S.BenefitText>
          </S.BenefitCard>

          <S.BenefitCard>
            <S.Icon>💬</S.Icon>
            <S.BenefitTitle>Suporte Especializado</S.BenefitTitle>
            <S.BenefitText>Atendimento de Seg a Sex, 8h às 18h</S.BenefitText>
          </S.BenefitCard>
        </S.Grid>
      </Container>
    </S.BenefitsSection>
  )
}

export default Benefits

