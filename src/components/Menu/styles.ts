import styled from 'styled-components/native';
import { StatusBar, Platform } from 'react-native';

export const ButtonMenu = styled.TouchableOpacity`
  /* @ts-ignore */
  top: ${Platform.OS === 'ios' ? `${StatusBar?.currentHeight + 60}px` : '10px'};
  position: absolute;
  margin: 0 20px;
  justify-content: space-around;
`;