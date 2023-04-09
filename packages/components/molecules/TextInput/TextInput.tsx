import React from 'react';
import {TextInputProps} from 'react-native';

import {TextInputBase} from '@components';

import {TextInputContainer} from './TextInput.styles';

export const TextInput: React.FC<TextInputProps> = props => {
  return (
    <TextInputContainer>
      <TextInputBase autoCorrect={false} {...props} />
    </TextInputContainer>
  );
};
