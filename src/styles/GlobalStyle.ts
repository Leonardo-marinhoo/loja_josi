import styled, { createGlobalStyle } from 'styled-components'
import { variables } from './variables'

type BackgroundProps = {
  background?: 'primary' | 'secondary'
}
type BadgeProps = {
  size: 'big' | 'small'
}

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  html {
    scroll-behavior: smooth;
  }

  body{
    background-color: ${variables.background_primary};
    color: ${variables.text_primary};
    overflow-x: hidden;
    line-height: 1.6;
    width: 100%;
    max-width: 100vw;
  }

  a {
    text-decoration: none;
  }

  button {
    font-family: Roboto, sans-serif;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.06);
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 40px 40px;
  overflow: hidden;

  @media (max-width: 968px) {
    padding: 32px 24px;
  }

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`

export const Section = styled.section<BackgroundProps>`
  width: 100%;
  min-height: 400px;
  padding: 72px 0;
  background-color: ${(props) =>
    props.background === 'primary'
      ? variables.background_primary
      : variables.background_secondary};

  @media (max-width: 768px) {
    padding: 56px 0;
  }
`
export const Title = styled.h2`
  font-size: 36px;
  font-weight: 800;
  margin-bottom: ${variables.spacing_2xl};
  color: ${variables.text_primary};
  position: relative;
  padding-bottom: 20px;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${variables.accent_primary} 0%,
      ${variables.accent_secondary} 100%
    );
    border-radius: ${variables.radius_full};
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: ${variables.spacing_xl};
  }
`
export const Badge = styled.div<BadgeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 35px;
  width: ${(props) => (props.size === 'big' ? '220px' : 'fit-content')};
  height: ${(props) => (props.size === 'big' ? '44px' : '26px')};
  font-size: ${(props) => (props.size === 'big' ? '15px' : '12px')};
  font-weight: ${(props) => (props.size === 'big' ? '700' : '600')};
  border-radius: ${variables.radius_full};
  background: ${(props) =>
    props.size === 'big'
      ? `linear-gradient(135deg, ${variables.accent_primary} 0%, ${variables.accent_secondary} 100%)`
      : variables.accent_primary};
  padding: ${(props) => (props.size === 'big' ? '12px 24px' : '6px 12px')};
  color: #ffffff;
  box-shadow: ${variables.shadow_md};
  transition: all ${variables.transition_base};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  &:hover {
    transform: scale(1.05);
    box-shadow: ${variables.shadow_lg};
  }
`
