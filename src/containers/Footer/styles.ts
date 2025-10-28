import styled from 'styled-components'
import { variables } from '../../styles/variables'
import { Title } from '../../styles/GlobalStyle'

export const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 48px;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
`
export const ListItem = styled.li`
  color: ${variables.text_secondary};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: ${variables.accent_primary};
  }
`
export const title = styled(Title)`
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 600;
  color: ${variables.text_primary};
`
export const CopyRight = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${variables.text_secondary};
  text-align: center;
  padding-top: 32px;
  border-top: 1px solid #d0d0d0;
`
