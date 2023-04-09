import styled from 'styled-components/native';
import {spacing, responsive} from '@components';

export const FloatImage = styled.Image`
  position: absolute;
  right: -${spacing.s8}px;
  bottom: -${spacing.s8}px;
  height: ${responsive.size(110, 'vertical')}px;
  width: ${responsive.size(110, 'vertical')}px;
`;
