import compact from 'lodash/compact';

import Reactors from '../Core';

const transformStyle = (styles) => {
  const {platform} = Reactors;
  const array = [];
  if (Array.isArray(styles)) {
    array.push(...styles);
  } else {
    array.push(styles);
  }
  const transformed = {};
  for (const style of array) {
    Object.assign(transformed, style);
  }
  for (const selector in transformed) {
    switch (selector) {
    case 'borderWidth':
      if (Reactors.isDOM() && !('borderStyle' in transformed)) {
        transformed.borderStyle = 'solid';
        transformed.borderColor = 'black';
      }
      break;
    case 'cursor':
      if (platform === 'mobile') {
        delete transformed.cursor;
      }
      break;
    case 'display':
      if (platform === 'mobile' && transformed.display === 'flex') {
        if (!('flexDirection' in transformed)) {
          transformed.flexDirection = 'row';
        }
        delete transformed.display;
      }
      break;
    case 'marginHorizontal':
      if (Reactors.isDOM()) {
        transformed.marginLeft = transformed.marginHorizontal;
        transformed.marginRight = transformed.marginHorizontal;
        delete transformed.marginHorizontal;
      }
      break;
    case 'marginVertical':
      if (Reactors.isDOM()) {
        transformed.marginTop = transformed.marginVertical;
        transformed.marginBottom = transformed.marginVertical;
        delete transformed.marginVertical;
      }
      break;
    case 'resizeMode':
      if (Reactors.isDOM()) {
        switch (transformed.resizeMode) {
        case 'cover':
          transformed.objectFit = 'cover';
          break;
        case 'contain':
          transformed.objectFit = 'contain';
          break;
        case 'stretch':
          transformed.objectFit = 'fill';
          break;
        }
        delete transformed.resizeMode;
      }
      break;
    case 'transform':
      if (platform === 'mobile') {
        if (typeof transformed.transform === 'string') {
          const transformations = transformed.transform.split(/\)\s+/);
          transformed.transform = compact(
            transformations.map(transformation => {
              if (!/\)$/.test(transformation)) {
                transformation += ')';
              }
              const bits = transformation.split(/\(/);
              const key = bits.shift();
              const values = bits.join('').replace(/\)$/, '');
              switch (key) {
              case 'matrix':
              default:
                return null;
              case 'translate': {
                const bits2 = values.split(/,\s+/);
                let translateX = bits2[0];
                if (typeof translateX === 'string' && /px/.test(translateX)) {
                  translateX = parseInt(translateX, 10);
                }
                let translateY = bits2[1];
                if (typeof translateY === 'string' && /px/.test(translateY)) {
                  translateY = parseInt(translateY, 10);
                }
                return {translateX, translateY};
              }
              case 'translateX': {
                let translateX = values;
                if (typeof translateX === 'string' && /px/.test(translateX)) {
                  translateX = parseInt(translateX, 10);
                }
                return {translateX};
              }
              case 'translateY': {
                let translateY = values;
                if (typeof translateY === 'string' && /px/.test(translateY)) {
                  translateY = parseInt(translateY, 10);
                }
                return {translateY};
              }
              case 'perspective':
                return {perspective: Number(values)};
              case 'rotate':
                return {rotate: values};
              case 'rotateX':
                return {rotateX: values};
              case 'rotateY':
                return {rotateY: values};
              case 'rotateZ':
                return {rotateZ: values};
              case 'scale': {
                const bits2 = values.split(/,\s+/);
                const scaleX = Number(bits2[0]);
                const scaleY = Number(bits2[1]);
                return {scaleX, scaleY};
              }
              case 'scaleX':
                return {scaleX: Number(values)};
              case 'scaleY':
                return {scaleY: Number(values)};
              case 'skew': {
                const bits2 = values.split(/,\s+/);
                const skewX = bits2[0];
                const skewY = bits2[1];
                return {skewX, skewY};
              }
              case 'skewX':
                return {skewX: (values)};
              case 'skewY':
                return {skewY: values};
              }
            }));
        }
      } else if (Array.isArray(transformed.transform)) {
        transformed.transform = transformed.transform.map((transformation) => {
          for (const key in transformation) {
            if (typeof transformation[key] === 'number') {
              return `${key}(${transformation[key]}px)`;
            }
            return `${key}(${transformation[key]})`;
          }
          return '';
        }).join(' ');
      }
      break;
    }
  }
  return transformed;
};

export default transformStyle;
