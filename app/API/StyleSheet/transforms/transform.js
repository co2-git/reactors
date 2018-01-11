import Reactors from '../../Core';

const translateTransform = (values) => {
  const bits2 = values.split(/,\s+/);
  let translateX = bits2[0];
  if (typeof translateX === 'string' && /px/.test(translateX)) {
    translateX = parseInt(translateX, 10);
  }
  let translateY = bits2[1];
  if (typeof translateY === 'string' && /px/.test(translateY)) {
    translateY = parseInt(translateY, 10);
  }
  return [{translateX}, {translateY}];
};

const translateXTransform = (values) => {
  let translateX = values;
  if (typeof translateX === 'string' && /px/.test(translateX)) {
    translateX = parseInt(translateX, 10);
  }
  return {translateX};
};

const perspectiveTransform = values => ({perspective: Number(values)});

const translateYTransform = (values) => {
  let translateY = values;
  if (typeof translateY === 'string' && /px/.test(translateY)) {
    translateY = parseInt(translateY, 10);
  }
  return {translateY};
};

const scaleTransform = (values) => {
  const bits2 = values.split(/,\s+/);
  const scaleX = Number(bits2[0]);
  const scaleY = Number(bits2[1]);
  return [{scaleX}, {scaleY}];
};

const skewTransform = (values) => {
  const bits2 = values.split(/,\s+/);
  const skewX = bits2[0];
  const skewY = bits2[1];
  return [{skewX}, {skewY}];
};

const transform = (style) => {
  if (typeof style.transform === 'string' && Reactors.isMobile()) {
    const transformed = {};
    const transformations = style.transform.split(/\)\s+/);
    transformed.transform = [];
    transformations.forEach(transformation => {
      if (!/\)$/.test(transformation)) {
        transformation += ')';
      }
      const bits = transformation.split(/\(/);
      const key = bits.shift();
      const values = bits.join('').replace(/\)$/, '');
      switch (key) {
      case 'translate':
        transformed.transform.push(...translateTransform(values));
        break;
      case 'translateX':
        transformed.transform.push(translateXTransform(values));
        break;
      case 'translateY':
        transformed.transform.push(translateYTransform(values));
        break;
      case 'perspective':
        transformed.transform.push(perspectiveTransform(values));
        break;
      case 'rotate':
        transformed.transform.push({rotate: values});
        break;
      case 'rotateX':
        transformed.transform.push({rotateX: values});
        break;
      case 'rotateY':
        transformed.transform.push({rotateY: values});
        break;
      case 'rotateZ':
        transformed.transform.push({rotateZ: values});
        break;
      case 'scale':
        transformed.transform.push(...scaleTransform(values));
        break;
      case 'scaleX':
        transformed.transform.push({scaleX: Number(values)});
        break;
      case 'scaleY':
        transformed.transform.push({scaleY: Number(values)});
        break;
      case 'skew':
        transformed.transform.push(...skewTransform(values));
        break;
      case 'skewX':
        transformed.transform.push({skewX: (values)});
        break;
      case 'skewY':
        transformed.transform.push({skewY: values});
        break;
      }
    });
    return {...style, ...transformed};
  }
  if (Array.isArray(style.transform)) {
    const transformed = {};
    transformed.transform = style.transform.map((transformation) => {
      for (const key in transformation) {
        if (typeof transformation[key] === 'number') {
          return `${key}(${transformation[key]}px)`;
        }
        return `${key}(${transformation[key]})`;
      }
      return '';
    }).join(' ');
    return {...style, ...transformed};
  }
  return style;
};

export default transform;
