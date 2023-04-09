import styled from 'styled-components/native';
import {responsive, spacing} from '@components';

export const CardContainer = styled.View<{backgroundColor: string}>`
  background-color: ${({backgroundColor}) => backgroundColor};
  border-radius: ${spacing.s16}px;
  padding: ${spacing.s8}px;
  flex-grow: 1;
  height: ${responsive.size(160, 'vertical')}px;
`;
