import * as S from './styles'

const ProductToolbar = () => {
  return (
    <S.Toolbar>
      <S.FilterGroup>
        <S.FilterButton className="active">Todos</S.FilterButton>
        <S.FilterButton>Capacetes</S.FilterButton>
        <S.FilterButton>Luvas</S.FilterButton>
        <S.FilterButton>Calçados</S.FilterButton>
        <S.FilterButton>Óculos</S.FilterButton>
        <S.FilterButton>Máscaras</S.FilterButton>
      </S.FilterGroup>

      <S.Actions>
        <S.ViewToggle>
          <S.ViewButton className="active">⊞</S.ViewButton>
          <S.ViewButton>☰</S.ViewButton>
        </S.ViewToggle>

        <S.SortSelect>
          <option>Ordenar por</option>
          <option>Mais vendidos</option>
          <option>Menor preço</option>
          <option>Maior preço</option>
          <option>Melhor avaliados</option>
          <option>Lançamentos</option>
        </S.SortSelect>
      </S.Actions>
    </S.Toolbar>
  )
}

export default ProductToolbar

