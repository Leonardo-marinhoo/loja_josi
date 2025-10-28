import styled from 'styled-components'
import { variables } from '../../styles/variables'

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  list-style: none;
  gap: ${variables.spacing_xl};
  margin-bottom: ${variables.spacing_2xl};

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${variables.spacing_lg};
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: ${variables.spacing_lg};
  }
`
