import styled from 'styled-components'
import { variables } from '../../styles/variables'

export const BenefitsSection = styled.section`
  width: 100%;
  background: linear-gradient(
    135deg,
    ${variables.accent_light} 0%,
    ${variables.background_secondary} 100%
  );
  padding: ${variables.spacing_2xl} 0;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${variables.spacing_lg};

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${variables.spacing_md};
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

export const BenefitCard = styled.div`
  background: white;
  padding: ${variables.spacing_xl};
  border-radius: ${variables.radius_lg};
  text-align: center;
  box-shadow: ${variables.shadow_sm};
  transition: all ${variables.transition_base};
  border: 1px solid ${variables.border_light};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${variables.shadow_lg};
    border-color: ${variables.accent_primary};
  }
`

export const Icon = styled.div`
  font-size: 48px;
  margin-bottom: ${variables.spacing_md};
  filter: grayscale(20%);
`

export const BenefitTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: ${variables.text_primary};
  margin-bottom: ${variables.spacing_sm};
`

export const BenefitText = styled.p`
  font-size: 14px;
  color: ${variables.text_secondary};
  line-height: 1.6;
  margin: 0;
`


