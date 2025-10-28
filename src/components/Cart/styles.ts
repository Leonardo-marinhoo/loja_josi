import styled from 'styled-components'
import { variables } from '../../styles/variables'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1050;

  &.is-open {
    opacity: 1;
    visibility: visible;
  }
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 420px;
  height: 100%;
  background-color: ${variables.background_primary};
  box-shadow: -8px 0 32px rgba(0, 0, 0, 0.15);
  transform: translateX(100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 1100;
  display: flex;
  flex-direction: column;

  &.is-open {
    transform: translateX(0);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`

export const CartHeader = styled.div`
  padding: 24px;
  background-color: ${variables.accent_primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  h4 {
    margin: 0;
    font-size: 24px;
    font-weight: 700;
    color: #ffffff;
  }

  button {
    background: none;
    border: none;
    font-size: 32px;
    cursor: pointer;
    color: #ffffff;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    transition: all 0.3s ease;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
      transform: rotate(90deg);
    }
  }
`

export const CartBody = styled.div`
  padding: 24px;
  overflow-y: auto;
  flex: 1;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.06);
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`

export const CartFooter = styled.div`
  width: 100%;
  padding: 24px;
  background-color: ${variables.background_secondary};
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.1);

  div {
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;

    strong {
      font-weight: 700;
    }
  }

  button {
    width: 100%;
    padding: 16px;
    background-color: ${variables.accent_primary};
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(46, 139, 87, 0.3);

    &:hover {
      background-color: ${variables.accent_secondary};
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(46, 139, 87, 0.4);
    }

    &:active {
      transform: translateY(0);
    }
  }
`

export const CartItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  padding: 16px;
  background-color: ${variables.background_secondary};
  border-radius: 12px;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    transform: translateX(-4px);
  }

  img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 16px;
  }

  div {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h5 {
    margin: 0 0 8px 0;
    font-size: 16px;
    font-weight: 600;
    color: ${variables.text_primary};
  }

  p {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    color: ${variables.accent_primary};
  }

  button {
    background-color: #ff4444;
    border: none;
    color: white;
    padding: 6px 12px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    align-self: flex-start;
    margin-top: 8px;
    transition: all 0.3s ease;

    &:hover {
      background-color: #cc0000;
      transform: scale(1.05);
    }
  }
`

export const EmptyCart = styled.div`
  text-align: center;
  margin-top: 60px;
  color: ${variables.text_secondary};
  font-size: 16px;
  line-height: 1.6;
  padding: 32px;

  &::before {
    content: '🛒';
    display: block;
    font-size: 64px;
    margin-bottom: 16px;
  }
`
