import styled from 'styled-components/native';
import {spacing} from '../../layouts';

export const Label = styled.Text<{color?: string}>`
  font-size: ${spacing.s16}px;
  font-weight: bold;
  color: ${({color = '#fff'}) => color};
`;
