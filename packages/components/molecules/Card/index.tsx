import React from 'react';

import {CardContainer, Typography, FloatImage} from '@components';

export const Card: React.FC<{
  title: string;
  backgroundColor: string;
  uri: string;
}> = ({title, backgroundColor, uri}) => {
  return (
    <CardContainer backgroundColor={backgroundColor}>
      <Typography.Label>{title}</Typography.Label>
      <FloatImage source={{uri}} />
    </CardContainer>
  );
};
