import React from 'react';
import {render} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import {CardContainer} from './CardContainer';

jest.mock('@components', () => ({
  ...jest.requireActual('@components'),
  responsive: {
    size: (value: number) => value,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s16: 16,
    s24: 24,
    s32: 32,
  },
}));

describe('CardContainer', () => {
  const backgroundColor = 'red';

  it('should render correctly', () => {
    const {toJSON} = render(
      <CardContainer backgroundColor={backgroundColor} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should have correct background color', () => {
    const {getByTestId} = render(
      <CardContainer
        backgroundColor={backgroundColor}
        testID="card-container"
      />,
    );

    expect(getByTestId('card-container')).toHaveStyle({backgroundColor});
  });

  it('should have correct border radius', () => {
    const {getByTestId} = render(
      <CardContainer
        backgroundColor={backgroundColor}
        testID="card-container"
      />,
    );

    expect(getByTestId('card-container')).toHaveStyle({borderRadius: 16});
  });

  it('should have correct padding', () => {
    const {getByTestId} = render(
      <CardContainer
        backgroundColor={backgroundColor}
        testID="card-container"
      />,
    );

    expect(getByTestId('card-container')).toHaveStyle({paddingTop: 8});
  });

  it('should have correct height', () => {
    const {getByTestId} = render(
      <CardContainer
        backgroundColor={backgroundColor}
        testID="card-container"
      />,
    );

    expect(getByTestId('card-container')).toHaveStyle({height: 160});
  });
});
