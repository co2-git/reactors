// @flow

declare type $ReactorsPlatform = 'desktop' | 'mobile' | 'node' | 'web';

declare type $ReactorsPropsTransformers = {
  added: {[prop: string]: any}[],
  removed: string[],
};
