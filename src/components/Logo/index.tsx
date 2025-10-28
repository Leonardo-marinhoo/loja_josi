import * as S from './styles'

const Logo = () => {
  return (
    <S.LogoContainer>
      <S.LogoText>
        <S.LogoLetter className="j">J</S.LogoLetter>
        <S.LogoLetter className="o">o</S.LogoLetter>
        <S.LogoLetter className="s">s</S.LogoLetter>
        <S.LogoLetter className="i">i</S.LogoLetter>
      </S.LogoText>
      <S.LogoSubtitle>EPIs</S.LogoSubtitle>
    </S.LogoContainer>
  )
}

export default Logo

