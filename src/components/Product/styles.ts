import styled from 'styled-components'
import { variables } from '../../styles/variables'

type Props = {
  image: string
  background?: string
}
type RowProps = {
  marginLeft?: string
}

export const Card = styled.div<Omit<Props, 'image'>>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: ${variables.radius_lg};
  background-color: #fff;
  overflow: hidden;
  box-shadow: ${variables.shadow_sm};
  transition: all ${variables.transition_slow};
  cursor: pointer;
  border: 1px solid ${variables.border_light};
  position: relative;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${variables.shadow_xl};
    border-color: ${variables.accent_primary};
  }
`

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  overflow: hidden;
  background-color: ${variables.background_secondary};
`

export const Header = styled.div<Props>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  transition: transform ${variables.transition_slow};

  ${Card}:hover & {
    transform: scale(1.08);
  }
`

export const BadgeContainer = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 2;
  gap: 8px;
`

export const DiscountBadge = styled.div`
  background: ${variables.error};
  color: white;
  padding: 6px 12px;
  border-radius: ${variables.radius_full};
  font-size: 12px;
  font-weight: 700;
  box-shadow: ${variables.shadow_md};
`

export const PriceBadge = styled.div`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  color: ${variables.accent_primary};
  padding: 8px 14px;
  border-radius: ${variables.radius_full};
  font-size: 16px;
  font-weight: 700;
  box-shadow: ${variables.shadow_md};
  margin-left: auto;
`

export const QuickActions = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  opacity: 0;
  transform: translateX(10px);
  transition: all ${variables.transition_base};
  z-index: 2;

  ${Card}:hover & {
    opacity: 1;
    transform: translateX(0);
  }
`

export const QuickActionBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: ${variables.radius_full};
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${variables.shadow_md};
  transition: all ${variables.transition_fast};
  color: ${variables.text_primary};
  font-size: 18px;

  &:hover {
    background: ${variables.accent_primary};
    color: white;
    transform: scale(1.1);
  }
`

export const InfoRow = styled.div<RowProps>`
  display: flex;
  gap: 6px;
  margin: ${variables.spacing_sm} 0;
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : '0')};
  flex-wrap: wrap;
`

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  gap: ${variables.spacing_sm};
  flex: 1;
`

export const CategoryTag = styled.span`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${variables.accent_primary};
  letter-spacing: 0.5px;
`

export const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  color: ${variables.text_primary};
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  min-height: 44px;
  margin: 0;
`

export const Description = styled.p`
  font-size: 13px;
  line-height: 1.6;
  font-weight: 400;
  margin: 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: ${variables.text_secondary};
  flex: 1;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin: ${variables.spacing_xs} 0;
`

export const Stars = styled.div`
  display: flex;
  gap: 2px;
  color: ${variables.warning};
  font-size: 14px;
`

export const RatingText = styled.span`
  font-size: 12px;
  color: ${variables.text_tertiary};
  font-weight: 500;
`

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${variables.spacing_md} 20px;
  border-top: 1px solid ${variables.border_light};
  gap: ${variables.spacing_md};
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const OldPrice = styled.span`
  font-size: 12px;
  color: ${variables.text_tertiary};
  text-decoration: line-through;
`

export const CurrentPrice = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: ${variables.accent_primary};
  line-height: 1;
`

export const Button = styled.button`
  padding: 12px 20px;
  background-color: ${variables.accent_primary};
  color: white;
  border: none;
  border-radius: ${variables.radius_md};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all ${variables.transition_base};
  white-space: nowrap;
  box-shadow: ${variables.shadow_sm};
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background-color: ${variables.accent_secondary};
    box-shadow: ${variables.shadow_md};
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`

export const StockBadge = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
  background: ${variables.success};
  color: white;
  padding: 4px 10px;
  border-radius: ${variables.radius_sm};
  font-size: 11px;
  font-weight: 600;
  z-index: 2;
`
