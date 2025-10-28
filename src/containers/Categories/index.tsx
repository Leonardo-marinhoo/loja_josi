import * as S from './styles'
import { Container, Title } from '../../styles/GlobalStyle'

const Categories = () => {
  return (
    <S.CategoriesSection>
      <Container>
        <Title>Compre por Categoria</Title>
        <S.Grid>
          <S.CategoryCard>
            <S.CategoryIcon>🪖</S.CategoryIcon>
            <S.CategoryName>Capacetes</S.CategoryName>
            <S.CategoryCount>42 produtos</S.CategoryCount>
          </S.CategoryCard>

          <S.CategoryCard>
            <S.CategoryIcon>🧤</S.CategoryIcon>
            <S.CategoryName>Luvas</S.CategoryName>
            <S.CategoryCount>68 produtos</S.CategoryCount>
          </S.CategoryCard>

          <S.CategoryCard>
            <S.CategoryIcon>👟</S.CategoryIcon>
            <S.CategoryName>Calçados</S.CategoryName>
            <S.CategoryCount>35 produtos</S.CategoryCount>
          </S.CategoryCard>

          <S.CategoryCard>
            <S.CategoryIcon>🥽</S.CategoryIcon>
            <S.CategoryName>Óculos</S.CategoryName>
            <S.CategoryCount>54 produtos</S.CategoryCount>
          </S.CategoryCard>

          <S.CategoryCard>
            <S.CategoryIcon>😷</S.CategoryIcon>
            <S.CategoryName>Máscaras</S.CategoryName>
            <S.CategoryCount>29 produtos</S.CategoryCount>
          </S.CategoryCard>

          <S.CategoryCard>
            <S.CategoryIcon>👕</S.CategoryIcon>
            <S.CategoryName>Vestimentas</S.CategoryName>
            <S.CategoryCount>47 produtos</S.CategoryCount>
          </S.CategoryCard>

          <S.CategoryCard>
            <S.CategoryIcon>🎧</S.CategoryIcon>
            <S.CategoryName>Proteção Auditiva</S.CategoryName>
            <S.CategoryCount>22 produtos</S.CategoryCount>
          </S.CategoryCard>

          <S.CategoryCard>
            <S.CategoryIcon>🧰</S.CategoryIcon>
            <S.CategoryName>Equipamentos</S.CategoryName>
            <S.CategoryCount>61 produtos</S.CategoryCount>
          </S.CategoryCard>
        </S.Grid>
      </Container>
    </S.CategoriesSection>
  )
}

export default Categories


