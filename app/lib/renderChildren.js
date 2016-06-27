import React from 'react';

export default (children) => {
  const _children = Array.isArray(children) ? children : [children];

  return _children
    .filter(child => child)
    .map((child, index) => {
      const props = {};

      if (child.key === null) {
        props.key = index;
      }
      // if (child.type && child.type.name === 'ReactorsScrollView') {
      //   this.style.overflow = 'auto';
      // }

      return React.cloneElement(child, props);
    });
};
