import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import {
  ContainerLogo,
  Logo,
  ContainerContent,
  Title,
  SubTitle,
  ContainerInput,
  BoxIcon,
  Input,
  ButtonLink,
  ButtonLinkText
} from './styles';
import StatusBarPage from '../../components/StatusBarPage';
import Menu from '../../components/Menu';

const Home = () => {
  return (
    <LinearGradient
      colors={['#1ddbb9', '#132732']}
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <StatusBarPage
        barStyle="light-content"
        backgroundColor="#1ddbb9"
      />

      <Menu />

      <ContainerLogo>
        <Logo source={require('../../assets/logo.png')} resizeMode="contain" />
      </ContainerLogo>

      <ContainerContent>
        <Title>Encutador de links</Title>
        <SubTitle>Cole seu link para encurtar</SubTitle>

        <ContainerInput>
          <BoxIcon>
            <Feather name="link" size={22} color="#fff" />
          </BoxIcon>
          <Input
            placeholder="Cole seu link aqui..."
            placeholderTextColor="#FFF"
          />
        </ContainerInput>

        <ButtonLink>
          <ButtonLinkText>Gerar seu link</ButtonLinkText>
        </ButtonLink>
      </ContainerContent>
    </LinearGradient>
  )
}

export default Home;
