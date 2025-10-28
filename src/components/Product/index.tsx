import { useDispatch } from 'react-redux'
import * as S from './styles'
import { Product as ProductType } from '../../models/Product'
import { add } from '../../store/cartSlice'

type Props = {
  product: ProductType
  background?: string
}

const Product = ({ product, background }: Props) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    dispatch(add(product))
  }

  const oldPrice = product.prices.old || product.prices.current

  return (
    <S.Card background={background}>
      <S.ImageWrapper>
        <S.Header image={product.media.thumbnail} />
        <S.BadgeContainer>
          {product.prices.discount && (
            <S.DiscountBadge>-{product.prices.discount}%</S.DiscountBadge>
          )}
        </S.BadgeContainer>
        <S.QuickActions>
          <S.QuickActionBtn title="Ver detalhes">👁</S.QuickActionBtn>
          <S.QuickActionBtn title="Adicionar aos favoritos">♥</S.QuickActionBtn>
        </S.QuickActions>
        <S.StockBadge>Em estoque</S.StockBadge>
      </S.ImageWrapper>

      <S.Body>
        <S.CategoryTag>{product.details.category}</S.CategoryTag>
        <S.Title>{product.name}</S.Title>

        <S.Rating>
          <S.Stars>
            {[...Array(5)].map((_, i) => (
              <span key={i}>⭐</span>
            ))}
          </S.Stars>
          <S.RatingText>(4.8)</S.RatingText>
        </S.Rating>

        <S.Description>{product.description}</S.Description>
      </S.Body>

      <S.Footer>
        <S.PriceContainer>
          {product.prices.discount && oldPrice && (
            <S.OldPrice>De R$ {oldPrice.toFixed(2)}</S.OldPrice>
          )}
          <S.CurrentPrice>
            R$ {product.prices.current?.toFixed(2)}
          </S.CurrentPrice>
        </S.PriceContainer>
        <S.Button onClick={handleAddToCart}>🛒 Comprar</S.Button>
      </S.Footer>
    </S.Card>
  )
}

export default Product
