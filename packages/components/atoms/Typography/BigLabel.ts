import styled from 'styled-components/native';
import {spacing} from '../../layouts';

export const BigLabel = styled.Text<{color?: string}>`
  font-size: ${spacing.s32}px;
  color: ${({color = '#fff'}) => color};
`;
