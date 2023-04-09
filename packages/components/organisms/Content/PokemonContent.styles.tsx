import styled from 'styled-components/native';
import {spacing} from '../../layouts';

export const Content = styled.View`
  flex: 1;
  margin-top: ${spacing.s16}px;
`;

export const BorderedLabelContainer = styled.View`
  margin-horizontal: ${spacing.s16}px;
  flex-direction: row;
  justify-content: center;
`;

export const LabelContainer = styled.View<{customBackgroundColor: string}>`
  background-color: ${({customBackgroundColor}) => customBackgroundColor};
  align-items: center;
  margin-top: ${spacing.s16}px;
  margin-horizontal: ${spacing.s16}px;
  border-radius: ${spacing.s16}px;
  padding: ${spacing.s8}px;
`;
