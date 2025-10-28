import * as S from './styles'

const Banner = () => {
  return (
    <S.HeroWrapper>
      <S.Background>
        <S.Container>
          <S.Content>
            <S.LeftColumn>
              <S.BadgeGroup>
                <S.SmallBadge>✓ EPIs Certificados</S.SmallBadge>
                <S.SmallBadge>🚚 Frete Grátis</S.SmallBadge>
                <S.SmallBadge>⚡ Entrega Rápida</S.SmallBadge>
              </S.BadgeGroup>

              <S.Title>
                Equipamentos de <br />
                <span>Proteção Individual</span>
              </S.Title>

              <S.Subtitle>
                EPIs certificados com CA válido, entrega rápida e parcelamento
                facilitado. Proteja sua equipe com qualidade profissional e os
                melhores preços do mercado.
              </S.Subtitle>

              <S.CTAGroup>
                <S.PrimaryCTA>🛒 Ver Produtos</S.PrimaryCTA>
                <S.SecondaryCTA>📞 Falar com Especialista</S.SecondaryCTA>
              </S.CTAGroup>

              <S.StatsRow>
                <S.StatItem>
                  <S.StatNumber>10K+</S.StatNumber>
                  <S.StatLabel>Clientes</S.StatLabel>
                </S.StatItem>
                <S.StatItem>
                  <S.StatNumber>500+</S.StatNumber>
                  <S.StatLabel>Produtos</S.StatLabel>
                </S.StatItem>
                <S.StatItem>
                  <S.StatNumber>4.9</S.StatNumber>
                  <S.StatLabel>Avaliação</S.StatLabel>
                </S.StatItem>
              </S.StatsRow>
            </S.LeftColumn>
          </S.Content>
        </S.Container>
      </S.Background>
    </S.HeroWrapper>
  )
}

export default Banner
