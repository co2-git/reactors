// @flow

declare type $ReactorsPlatform = 'desktop' | 'mobile' | 'node' | 'web';

declare type $ReactorsViewMeasureCallback = (
  x: number,
  y: number,
  width: number,
  height: number,
  pageX: number,
  pageY: number,
) => void;
