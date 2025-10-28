import styled from 'styled-components'
import { variables } from '../../styles/variables'
import bannerImg from '../../images/banner-tst.png'

export const HeroWrapper = styled.section`
  width: 100%;
  position: relative;
  overflow: hidden;
  background: #000000;
`

export const Background = styled.div`
  width: 100%;
  min-height: 650px;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${bannerImg});
    background-size: cover;
    background-position: center;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.3) 100%
    );
    z-index: 1;
  }

  @media (max-width: 968px) {
    min-height: 550px;

    &::after {
      background: rgba(0, 0, 0, 0.7);
    }
  }

  @media (max-width: 640px) {
    min-height: 500px;
  }
`

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px;
  width: 100%;
  position: relative;
  z-index: 2;

  @media (max-width: 968px) {
    padding: 60px 24px;
  }

  @media (max-width: 640px) {
    padding: 40px 20px;
  }
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  max-width: 800px;

  @media (max-width: 968px) {
    text-align: center;
    max-width: 100%;
  }
`

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${variables.spacing_lg};

  @media (max-width: 968px) {
    align-items: center;
  }
`

export const BadgeGroup = styled.div`
  display: flex;
  gap: ${variables.spacing_md};
  flex-wrap: wrap;

  @media (max-width: 968px) {
    justify-content: center;
  }
`

export const SmallBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: ${variables.radius_full};
  font-size: 13px;
  font-weight: 600;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
`

export const Title = styled.h1`
  font-size: 64px;
  font-weight: 900;
  line-height: 1.1;
  color: white;
  margin: 0;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);

  span {
    background: linear-gradient(
      135deg,
      ${variables.accent_primary} 0%,
      #60a5fa 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 1200px) {
    font-size: 56px;
  }

  @media (max-width: 968px) {
    font-size: 48px;
  }

  @media (max-width: 640px) {
    font-size: 36px;
  }
`

export const Subtitle = styled.p`
  font-size: 20px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.85);
  margin: 0;
  max-width: 580px;

  @media (max-width: 968px) {
    font-size: 18px;
  }

  @media (max-width: 640px) {
    font-size: 16px;
  }
`

export const CTAGroup = styled.div`
  display: flex;
  gap: ${variables.spacing_md};
  margin-top: ${variables.spacing_md};
  flex-wrap: wrap;

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`

export const PrimaryCTA = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 18px 40px;
  background: linear-gradient(
    135deg,
    ${variables.accent_primary} 0%,
    ${variables.accent_secondary} 100%
  );
  color: white;
  border: none;
  border-radius: ${variables.radius_md};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all ${variables.transition_base};
  box-shadow: 0 8px 24px rgba(37, 99, 235, 0.4);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover::before {
    left: 100%;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(37, 99, 235, 0.5);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`

export const SecondaryCTA = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 18px 40px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: ${variables.radius_md};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all ${variables.transition_base};

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${variables.spacing_lg};

  @media (max-width: 968px) {
    align-items: center;
  }
`

export const FeatureCard = styled.div`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: ${variables.radius_lg};
  padding: ${variables.spacing_xl};
  transition: all ${variables.transition_base};

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.25);
    transform: translateY(-4px);
  }

  @media (max-width: 968px) {
    max-width: 500px;
    width: 100%;
  }
`

export const FeatureTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin: 0 0 ${variables.spacing_sm} 0;
`

export const FeatureText = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.75);
  margin: 0;
`

export const PriceBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${variables.radius_lg};
  padding: ${variables.spacing_xl};
  text-align: center;

  @media (max-width: 968px) {
    max-width: 400px;
    width: 100%;
  }
`

export const PriceLabel = styled.div`
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 8px;
`

export const OldPrice = styled.div`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: line-through;
  margin-bottom: 4px;
`

export const CurrentPrice = styled.div`
  font-size: 48px;
  font-weight: 900;
  color: ${variables.accent_primary};
  background: linear-gradient(
    135deg,
    #60a5fa 0%,
    ${variables.accent_primary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: ${variables.spacing_sm};
`

export const SaveAmount = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${variables.error};
  color: white;
  border-radius: ${variables.radius_full};
  font-size: 14px;
  font-weight: 700;
  margin-top: ${variables.spacing_sm};
`

export const StatsRow = styled.div`
  display: flex;
  gap: ${variables.spacing_xl};
  margin-top: ${variables.spacing_xl};
  padding-top: ${variables.spacing_xl};
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 640px) {
    gap: ${variables.spacing_lg};
  }
`

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const StatNumber = styled.div`
  font-size: 32px;
  font-weight: 900;
  color: white;
  line-height: 1;

  @media (max-width: 640px) {
    font-size: 24px;
  }
`

export const StatLabel = styled.div`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.65);
  text-transform: uppercase;
  letter-spacing: 0.5px;
`
