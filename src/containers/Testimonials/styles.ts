import styled from 'styled-components'
import { variables } from '../../styles/variables'

export const TestimonialsSection = styled.section`
  width: 100%;
  background: ${variables.background_secondary};
  padding: 64px 0;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${variables.spacing_xl};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const TestimonialCard = styled.div`
  background: white;
  padding: ${variables.spacing_xl};
  border-radius: ${variables.radius_lg};
  box-shadow: ${variables.shadow_md};
  transition: all ${variables.transition_base};
  border: 1px solid ${variables.border_light};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${variables.shadow_xl};
  }
`

export const Rating = styled.div`
  font-size: 20px;
  margin-bottom: ${variables.spacing_md};
  color: ${variables.warning};
`

export const Text = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: ${variables.text_secondary};
  margin-bottom: ${variables.spacing_lg};
  font-style: italic;
`

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: ${variables.spacing_md};
  padding-top: ${variables.spacing_md};
  border-top: 1px solid ${variables.border_light};
`

export const Avatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: ${variables.radius_full};
  background: ${variables.accent_light};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  flex-shrink: 0;
`

export const AuthorInfo = styled.div`
  flex: 1;
`

export const Name = styled.div`
  font-size: 15px;
  font-weight: 700;
  color: ${variables.text_primary};
  margin-bottom: 2px;
`

export const Position = styled.div`
  font-size: 13px;
  color: ${variables.text_tertiary};
`

