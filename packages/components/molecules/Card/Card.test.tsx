import React from 'react';
import {render} from '@testing-library/react-native';
import {Card} from './Card';
import '@testing-library/jest-native/extend-expect';

describe('Card', () => {
  const title = 'Card Title';
  const backgroundColor = 'red';
  const uri = 'https://example.com/image.png';

  it('should render correctly', () => {
    const {toJSON} = render(
      <Card title={title} backgroundColor={backgroundColor} uri={uri} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render the title', () => {
    const {getByText} = render(
      <Card title={title} backgroundColor={backgroundColor} uri={uri} />,
    );
    const titleElement = getByText(title);

    expect(titleElement).toBeDefined();
  });

  it('should set the background color', () => {
    const {getByTestId} = render(
      <Card title={title} backgroundColor={backgroundColor} uri={uri} />,
    );

    expect(getByTestId('card-container')).toHaveStyle({backgroundColor});
  });

  it('should render the image', () => {
    const {getByTestId} = render(
      <Card title={title} backgroundColor={backgroundColor} uri={uri} />,
    );
    const image = getByTestId('card-image');

    expect(image.props.source.uri).toBe(uri);
  });
});
