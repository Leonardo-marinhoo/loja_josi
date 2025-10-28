import * as S from './styles'
import Logo from '../Logo'
import cartIcon from '../../images/carrinho.svg'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../../store/cartSlice'
import { RootState } from '../../store'
import { useState, useEffect } from 'react'

export const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootState) => state.cart)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleOpenCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderWrapper className={scrolled ? 'scrolled' : ''}>
      <S.TopBar>
        <S.TopBarContent>
          <span>Frete grátis acima de R$ 299</span>
          <span>Atendimento: Seg-Sex 8h-18h | (11) 1234-5678</span>
        </S.TopBarContent>
      </S.TopBar>
      <S.HeaderBar>
        <S.HeaderContent>
          <Link to={'/'}>
            <Logo />
          </Link>
          <S.PageLinks>
            <S.PageItem>
              <Link to={'/categories'}>Categorias</Link>
            </S.PageItem>
            <S.PageItem>
              <Link to={'/'}>Novidades</Link>
            </S.PageItem>
            <S.PageItem>
              <Link to={'/'}>Promoções</Link>
            </S.PageItem>
          </S.PageLinks>
          <S.SearchWrapper>
            <S.SearchInput placeholder="Buscar EPIs (capacete, luva, óculos...)" />
          </S.SearchWrapper>
          <S.Cart onClick={handleOpenCart}>
            <S.CartIcon src={cartIcon} />
            {items.length > 0 && <S.CartBadge>{items.length}</S.CartBadge>}
          </S.Cart>
        </S.HeaderContent>
      </S.HeaderBar>
    </S.HeaderWrapper>
  )
}

export default Header
