import styled from 'styled-components/native';
import {spacing} from '../../../components/layouts';
import {FlatList} from 'react-native';

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
  columnWrapperStyle: {
    marginHorizontal: spacing.s8,
    marginVertical: spacing.s4,
  },
})`` as unknown as typeof FlatList;

export const Separator = styled.View<{hasMargin: boolean}>`
  flex: 1;
  margin-left: ${({hasMargin}) => (hasMargin ? spacing.s8 : 0)}px;
`;
