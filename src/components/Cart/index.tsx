import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store'
import { remove, close } from '../../store/cartSlice'
import { Product } from '../../models/Product'
import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootState) => state.cart)
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(close())
  }

  const handleRemove = (productId: number) => {
    dispatch(remove(productId))
  }

  const getTotalPrice = () => {
    return items
      .reduce((acc, item) => acc + (item.prices.current ?? 0), 0)
      .toFixed(2)
  }

  return (
    <>
      <S.Overlay className={isOpen ? 'is-open' : ''} onClick={handleClose} />
      <S.CartContainer className={isOpen ? 'is-open' : ''}>
        <S.CartHeader>
          <h4>Carrinho</h4>
          <button onClick={handleClose}>&times;</button>
        </S.CartHeader>
        <S.CartBody>
          {items.length > 0 ? (
            items.map((item: Product) => (
              <S.CartItem key={item.id}>
                <img src={item.media.thumbnail} alt={item.name} />
                <div>
                  <h5>{item.name}</h5>
                  <p>R$ {item.prices.current?.toFixed(2)}</p>
                  <button onClick={() => handleRemove(item.id)}>Remover</button>
                </div>
              </S.CartItem>
            ))
          ) : (
            <S.EmptyCart>Seu carrinho está vazio.</S.EmptyCart>
          )}
        </S.CartBody>
        {items.length > 0 && (
          <S.CartFooter>
            <div>
              <strong>Total:</strong> R$ {getTotalPrice()}
            </div>
            <button>Finalizar Compra</button>
          </S.CartFooter>
        )}
      </S.CartContainer>
    </>
  )
}

export default Cart
