import styled from 'styled-components'
import { variables } from '../../styles/variables'

export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${variables.spacing_lg};
  margin-bottom: ${variables.spacing_2xl};
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
`

export const FilterGroup = styled.div`
  display: flex;
  gap: ${variables.spacing_sm};
  flex-wrap: wrap;
  flex: 1;
  width: 100%;
  overflow: hidden;

  @media (max-width: 968px) {
    overflow-x: auto;
    flex-wrap: nowrap;
    padding-bottom: ${variables.spacing_sm};
    -webkit-overflow-scrolling: touch;

    &::-webkit-scrollbar {
      height: 4px;
    }

    &::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.06);
    }

    &::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 4px;
    }
  }
`

export const FilterButton = styled.button`
  padding: 10px 20px;
  border: 1px solid ${variables.border_light};
  background: white;
  border-radius: ${variables.radius_full};
  font-size: 14px;
  font-weight: 500;
  color: ${variables.text_secondary};
  cursor: pointer;
  transition: all ${variables.transition_base};
  white-space: nowrap;

  &:hover {
    border-color: ${variables.accent_primary};
    color: ${variables.accent_primary};
    background: ${variables.accent_light};
  }

  &.active {
    background: ${variables.accent_primary};
    border-color: ${variables.accent_primary};
    color: white;
    box-shadow: ${variables.shadow_sm};
  }
`

export const Actions = styled.div`
  display: flex;
  gap: ${variables.spacing_md};
  align-items: center;
`

export const ViewToggle = styled.div`
  display: flex;
  border: 1px solid ${variables.border_light};
  border-radius: ${variables.radius_md};
  overflow: hidden;
  background: white;

  @media (max-width: 768px) {
    display: none;
  }
`

export const ViewButton = styled.button`
  padding: 10px 14px;
  border: none;
  background: white;
  font-size: 16px;
  cursor: pointer;
  transition: all ${variables.transition_fast};
  color: ${variables.text_secondary};

  &:hover {
    background: ${variables.background_secondary};
  }

  &.active {
    background: ${variables.accent_primary};
    color: white;
  }

  & + & {
    border-left: 1px solid ${variables.border_light};
  }
`

export const SortSelect = styled.select`
  padding: 10px 16px;
  border: 1px solid ${variables.border_light};
  border-radius: ${variables.radius_md};
  font-size: 14px;
  font-weight: 500;
  color: ${variables.text_primary};
  background: white;
  cursor: pointer;
  transition: all ${variables.transition_base};
  outline: none;

  &:hover {
    border-color: ${variables.border_medium};
  }

  &:focus {
    border-color: ${variables.accent_primary};
    box-shadow: 0 0 0 3px ${variables.accent_light};
  }
`
