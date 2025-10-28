import styled, { keyframes } from 'styled-components'
import { variables } from '../../styles/variables'

const shimmer = keyframes`
  0% {
    background-position: -200% center;
  }
  100% {
    background-position: 200% center;
  }
`

const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-3px);
  }
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2px;
  cursor: pointer;
  user-select: none;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }
`

export const LogoText = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 70%;
    background: linear-gradient(
      180deg,
      ${variables.accent_primary} 0%,
      ${variables.accent_secondary} 100%
    );
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    &::before {
      left: -6px;
      width: 3px;
    }
  }
`

export const LogoLetter = styled.span`
  font-size: 32px;
  font-weight: 900;
  background: linear-gradient(
    135deg,
    ${variables.accent_primary} 0%,
    #60a5fa 50%,
    ${variables.accent_secondary} 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Roboto', sans-serif;
  letter-spacing: -1px;
  transition: all ${variables.transition_base};
  position: relative;
  display: inline-block;

  &.j {
    animation: ${float} 3s ease-in-out infinite;
    animation-delay: 0s;
  }

  &.o {
    animation: ${float} 3s ease-in-out infinite;
    animation-delay: 0.1s;
  }

  &.s {
    animation: ${float} 3s ease-in-out infinite;
    animation-delay: 0.2s;
  }

  &.i {
    animation: ${float} 3s ease-in-out infinite;
    animation-delay: 0.3s;
  }

  ${LogoContainer}:hover & {
    animation: ${shimmer} 2s linear infinite;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }
`

export const LogoSubtitle = styled.span`
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${variables.text_secondary};
  margin-left: 4px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -4px;
    top: 50%;
    transform: translateY(-50%);
    width: 2px;
    height: 100%;
    background: ${variables.accent_primary};
    opacity: 0.3;
  }

  ${LogoContainer}:hover & {
    color: ${variables.accent_primary};
    letter-spacing: 3px;
  }

  transition: all ${variables.transition_base};

  @media (max-width: 768px) {
    font-size: 9px;
    margin-left: 0;

    &::before {
      display: none;
    }
  }
`
