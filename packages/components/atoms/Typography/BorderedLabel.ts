import styled from 'styled-components/native';
import {spacing} from '../../layouts';
import {Label} from './Label';

export const BorderedLabel = styled(Label)`
  border-width: 2px;
  padding: ${spacing.s8}px;
  border-radius: ${spacing.s8}px;
  margin: ${spacing.s8}px;
  text-align: center;
`;
