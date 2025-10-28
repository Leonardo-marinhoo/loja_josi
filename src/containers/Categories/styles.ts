import styled from 'styled-components'
import { variables } from '../../styles/variables'

export const CategoriesSection = styled.section`
  width: 100%;
  background: ${variables.background_primary};
  padding: ${variables.spacing_2xl} 0 64px 0;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: ${variables.spacing_lg};
  width: 100%;
  overflow: hidden;

  @media (max-width: 968px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: ${variables.spacing_md};
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

export const CategoryCard = styled.div`
  background: ${variables.background_secondary};
  padding: ${variables.spacing_xl} ${variables.spacing_lg};
  border-radius: ${variables.radius_lg};
  text-align: center;
  cursor: pointer;
  transition: all ${variables.transition_base};
  border: 2px solid transparent;

  &:hover {
    background: white;
    border-color: ${variables.accent_primary};
    transform: translateY(-4px);
    box-shadow: ${variables.shadow_lg};

    ${() => CategoryIcon} {
      transform: scale(1.2);
    }
  }
`

export const CategoryIcon = styled.div`
  font-size: 56px;
  margin-bottom: ${variables.spacing_md};
  transition: transform ${variables.transition_base};
`

export const CategoryName = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${variables.text_primary};
  margin-bottom: ${variables.spacing_xs};
`

export const CategoryCount = styled.p`
  font-size: 13px;
  color: ${variables.text_secondary};
  margin: 0;
`
