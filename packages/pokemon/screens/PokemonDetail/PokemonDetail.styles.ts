import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  transform: scaleX(2);
  border-bottom-start-radius: 200px;
  border-bottom-end-radius: 200px;
  overflow: hidden;
`;

export const ImageContainer = styled.View<{customBackgroundColor: string}>`
  flex: 1;
  transform: scaleX(0.5);
  background-color: ${({customBackgroundColor}) => customBackgroundColor};
  justify-content: flex-end;
`;

export const Image = styled.Image`
  align-self: center;
`;
