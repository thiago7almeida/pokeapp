import {
  IResponsive,
  TPixelRatioFunction,
  TResponsiveSizes,
} from './IResponsive';

export class Responsive implements IResponsive {
  private guideline;
  private device;
  private pixelRatioFunction;
  private extraHeight;

  constructor(
    guideline: TResponsiveSizes,
    device: TResponsiveSizes,
    pixelRatioFunction: TPixelRatioFunction,
    extraHeight?: number,
  ) {
    this.guideline = guideline;
    this.device = device;
    this.pixelRatioFunction = pixelRatioFunction;
    this.extraHeight = extraHeight || 0;
  }

  private verticalScale(size: number) {
    const {device, guideline, extraHeight} = this;
    return ((device.height - extraHeight) / guideline.height) * size;
  }

  private horizontalScale(size: number) {
    const {device, guideline} = this;
    return ((device.width - 20) / guideline.width) * size;
  }

  size(
    size: number,
    reference: 'vertical' | 'horizontal' = 'horizontal',
  ): number {
    let result = 0;

    if (reference === 'horizontal') {
      result = this.horizontalScale(size);
    }

    if (reference === 'vertical') {
      result = this.verticalScale(size);
    }

    return Math.round(this.pixelRatioFunction(result));
  }
}
