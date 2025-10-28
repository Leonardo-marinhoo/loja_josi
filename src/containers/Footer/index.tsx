import React from 'react'
import { Container, Section } from '../../styles/GlobalStyle'
import * as S from './styles'

const Footer = () => {
  return (
    <Section background="secondary">
      <Container>
        <S.FooterContent>
          <S.Info>
            <S.title>Categorias de EPIs</S.title>
            <S.List>
              <S.ListItem>Capacetes e Proteção de Cabeça</S.ListItem>
              <S.ListItem>Luvas de Segurança</S.ListItem>
              <S.ListItem>Calçados de Proteção</S.ListItem>
              <S.ListItem>Óculos e Proteção Facial</S.ListItem>
              <S.ListItem>Proteção Respiratória</S.ListItem>
              <S.ListItem>Vestimentas de Segurança</S.ListItem>
              <S.ListItem>Equipamentos para Altura</S.ListItem>
            </S.List>
          </S.Info>
          <S.Info>
            <S.title>Acesso rápido</S.title>
            <S.List>
              <S.ListItem>Novidades</S.ListItem>
              <S.ListItem>Promoções</S.ListItem>
              <S.ListItem>Catálogo Completo</S.ListItem>
              <S.ListItem>Sobre Nós</S.ListItem>
              <S.ListItem>Contato</S.ListItem>
            </S.List>
          </S.Info>
          <S.Info>
            <S.title>Atendimento</S.title>
            <S.List>
              <S.ListItem>Seg - Sex: 8h às 18h</S.ListItem>
              <S.ListItem>Sábado: 8h às 12h</S.ListItem>
              <S.ListItem>contato@lojajosi.com.br</S.ListItem>
              <S.ListItem>(11) 1234-5678</S.ListItem>
            </S.List>
          </S.Info>
        </S.FooterContent>
        <S.CopyRight>
          2025 - © Loja Josi - EPIs | Todos os direitos reservados
        </S.CopyRight>
      </Container>
    </Section>
  )
}

export default Footer
