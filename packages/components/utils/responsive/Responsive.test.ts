import {Responsive} from './Responsive';

describe('Responsive size', () => {
  it('should calculate vertical scale correctly', () => {
    const guideline = {width: 375, height: 667};
    const device = {width: 414, height: 896};
    const pixelRatioFunction = jest.fn().mockImplementation(size => size);

    const responsive = new Responsive(guideline, device, pixelRatioFunction);

    const result = responsive.size(50, 'vertical');

    expect(result).toEqual(67);
    expect(pixelRatioFunction).toHaveBeenCalled();
  });

  it('should calculate horizontal scale correctly', () => {
    const guideline = {width: 375, height: 667};
    const device = {width: 414, height: 896};
    const pixelRatioFunction = jest.fn().mockImplementation(size => size);

    const responsive = new Responsive(guideline, device, pixelRatioFunction);

    const result = responsive.size(50, 'horizontal');

    expect(result).toEqual(53);
    expect(pixelRatioFunction).toHaveBeenCalled();
  });

  it('should handle extra height correctly', () => {
    const guideline = {width: 375, height: 667};
    const device = {width: 414, height: 896};
    const pixelRatioFunction = jest.fn().mockImplementation(size => size);

    const responsive = new Responsive(
      guideline,
      device,
      pixelRatioFunction,
      100,
    );

    const result = responsive.size(50, 'vertical');

    expect(result).toEqual(60);
    expect(pixelRatioFunction).toHaveBeenCalled();
  });
});
