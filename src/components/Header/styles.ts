import styled from 'styled-components'
import { variables } from '../../styles/variables'

export const TopBar = styled.div`
  width: 100%;
  background-color: ${variables.background_secondary};
  color: ${variables.text_secondary};
  font-size: 12px;
  line-height: 1;
  padding: 10px 0;
`

export const TopBarContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: 968px) {
    font-size: 11px;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    flex-direction: column;
    gap: 4px;
    text-align: center;
  }
`

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  transition: all 0.3s ease;

  &.scrolled {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
    background-color: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
  }
`

export const HeaderBar = styled.header`
  width: 100%;
  background-color: #fff;
`

export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  height: 80px;
  padding: 0 40px;

  @media (max-width: 768px) {
    padding: 0 20px;
    height: 72px;
    justify-content: space-between;
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  transition: transform ${variables.transition_base};

  &:hover {
    transform: scale(1.02);
  }
`

export const PageLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-left: 56px;
  list-style: none;

  @media (max-width: 968px) {
    gap: 20px;
    margin-left: 24px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
export const PageItem = styled.li`
  a {
    text-decoration: none;
    color: ${variables.text_primary};
    font-weight: 500;
    font-size: 16px;
    position: relative;
    padding: 8px 0;
    transition: color 0.3s ease;

    &:hover {
      color: ${variables.accent_primary};
    }

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: ${variables.accent_primary};
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`
export const Cart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: ${variables.background_secondary};
  border-radius: ${variables.radius_full};
  cursor: pointer;
  transition: all ${variables.transition_base};
  margin-left: ${variables.spacing_md};

  &:hover {
    background-color: ${variables.accent_primary};
    transform: scale(1.05);

    img {
      filter: brightness(0) invert(1);
    }
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    margin-left: auto;
  }
`

export const CartIcon = styled.img`
  height: 24px;
  width: 24px;
  transition: filter ${variables.transition_base};
`

export const CartBadge = styled.div`
  position: absolute;
  top: -4px;
  right: -4px;
  min-width: 20px;
  height: 20px;
  background: ${variables.error};
  color: white;
  border-radius: ${variables.radius_full};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  padding: 0 6px;
  box-shadow: ${variables.shadow_md};
  border: 2px solid white;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
`

export const ItemCounter = styled.span`
  display: none;
`

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 40px;
  flex: 1;
  max-width: 600px;

  @media (max-width: 968px) {
    max-width: 400px;
    margin-left: ${variables.spacing_lg};
  }

  @media (max-width: 768px) {
    display: none;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  height: 42px;
  border-radius: 8px;
  border: 1px solid #dcdcdc;
  padding: 0 14px 0 40px;
  outline: none;
  font-size: 14px;
  color: ${variables.text_primary};
  background-color: #fff;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="%23999" viewBox="0 0 24 24"><path d="M10 2a8 8 0 105.293 14.293l4.707 4.707 1.414-1.414-4.707-4.707A8 8 0 0010 2zm0 2a6 6 0 110 12A6 6 0 0110 4z"/></svg>');
  background-repeat: no-repeat;
  background-size: 18px;
  background-position: 12px center;

  &:hover {
    border-color: #c9c9c9;
  }

  &:focus {
    border-color: ${variables.accent_primary};
    box-shadow: 0 0 0 3px rgba(46, 139, 87, 0.15);
  }
`
