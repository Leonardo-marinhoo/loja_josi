import styled from 'styled-components'
import { variables } from '../../styles/variables'

export const NewsletterSection = styled.section`
  width: 100%;
  background: linear-gradient(
    135deg,
    ${variables.accent_primary} 0%,
    ${variables.accent_secondary} 100%
  );
  padding: ${variables.spacing_2xl} 0;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${variables.spacing_2xl};

  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
  }
`

export const Left = styled.div`
  display: flex;
  align-items: center;
  gap: ${variables.spacing_lg};
  flex: 1;

  @media (max-width: 968px) {
    flex-direction: column;
    text-align: center;
  }
`

export const Icon = styled.div`
  font-size: 64px;
  flex-shrink: 0;
`

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 700;
  color: white;
  margin-bottom: ${variables.spacing_xs};

  @media (max-width: 768px) {
    font-size: 22px;
  }
`

export const Subtitle = styled.p`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
`

export const Form = styled.form`
  display: flex;
  gap: ${variables.spacing_md};
  max-width: 500px;
  width: 100%;

  @media (max-width: 968px) {
    flex-direction: column;
  }
`

export const Input = styled.input`
  flex: 1;
  padding: 16px 20px;
  border-radius: ${variables.radius_md};
  border: none;
  font-size: 15px;
  outline: none;
  transition: box-shadow ${variables.transition_base};

  &:focus {
    box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.3);
  }

  &::placeholder {
    color: ${variables.text_tertiary};
  }
`

export const Button = styled.button`
  padding: 16px 32px;
  background: white;
  color: ${variables.accent_primary};
  border: none;
  border-radius: ${variables.radius_md};
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: all ${variables.transition_base};
  box-shadow: ${variables.shadow_md};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${variables.shadow_lg};
  }

  &:active {
    transform: translateY(0);
  }
`

