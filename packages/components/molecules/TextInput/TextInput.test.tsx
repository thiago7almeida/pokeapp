import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {TextInput} from './TextInput';

describe('TextInput', () => {
  const onChangeText = jest.fn();
  const value = 'input value';
  const placeholder = 'placeholder text';

  it('should render correctly', () => {
    const {toJSON} = render(
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should pass props to TextInputBase', () => {
    const {getByPlaceholderText} = render(
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />,
    );
    const input = getByPlaceholderText(placeholder);

    expect(input.props.value).toEqual(value);
    expect(input.props.onChangeText).toEqual(onChangeText);
  });

  it('should disable autocorrect', () => {
    const {getByPlaceholderText} = render(
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />,
    );
    const input = getByPlaceholderText(placeholder);

    expect(input.props.autoCorrect).toBe(false);
  });

  it('should call onChangeText when typing', () => {
    const {getByPlaceholderText} = render(
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />,
    );
    const input = getByPlaceholderText(placeholder);

    fireEvent.changeText(input, 'new value');

    expect(onChangeText).toHaveBeenCalledWith('new value');
  });
});
