export interface IResponsive {
  size(size: number, reference: 'vertical' | 'horizontal'): number;
}

export type TResponsiveSizes = {height: number; width: number};
export type TPixelRatioFunction = (size: number) => number;
