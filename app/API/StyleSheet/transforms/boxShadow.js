import omit from 'lodash/omit';

import Reactors from '../../Core';

// boxShadow: '0 4px 4px 1px rgba(0, 0, 0, .2)',
//
// /* offset-x | offset-y | color */
// box-shadow: 60px -16px teal;
//
// /* offset-x | offset-y | blur-radius | color */
// box-shadow: 10px 5px 5px black;
//
// /* offset-x | offset-y | blur-radius | spread-radius | color */
// box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
//
// /* inset | offset-x | offset-y | color */
// box-shadow: inset 5em 1em gold;
//
// /* Any number of shadows, separated by commas */
// box-shadow: 3px 3px red, -1em 0 0.4em olive;

const toMobile = (str) => {
  const bits1 = str.split(/\s+/);
  const bits = [];
  for (let i = 0; i < bits1.length; i++) {
    if (/^rgba\(/.test(bits1[i])) {
      bits.push(`${bits1[i]} ${bits1[i + 1]} ${bits1[i + 2]} ${bits1[i + 3]}`);
      i += 3;
    } else {
      bits.push(bits1[i]);
    }
  }
  let shadowIndex = 0;
  const shadows = [];
  for (const bit of bits) {
    if (!shadows[shadowIndex]) {
      shadows[shadowIndex] = [];
    }
    if (/,$/.test(bit)) {
      shadows[shadowIndex].push(bit.replace(/,$/, ''));
      shadowIndex++;
    } else {
      shadows[shadowIndex].push(bit);
    }
  }
  const all = shadows.map(shadow => {
    const inset = shadow[0] === 'inset';
    if (inset) {
      shadow.shift();
    }
    const color = shadow.pop();
    const [offsetX, offsetY, radius] = shadow;
    let opacity = 1;
    if (/rgba/.test(color)) {
      color.replace(/, ([^,]+)\)$/, (matches, alpha) => {
        opacity = alpha.replace(/^\./, '0.');
      });
    }
    return {offsetX, offsetY, radius, color, opacity, inset};
  });
  const [rule] = all;
  const native = {
    shadowColor: rule.color,
    shadowOpacity: Number(rule.opacity),
  };
  if (rule.radius) {
    native.shadowRadius = parseInt(rule.radius, 10);
  }
  if (rule.inset) {
    native.shadowOffset = {
      width: -(parseInt(rule.offsetX, 10)),
      height: -(parseInt(rule.offsetY, 10)),
    };
  } else {
    native.shadowOffset = {
      width: parseInt(rule.offsetX, 10),
      height: parseInt(rule.offsetY, 10),
    };
  }
  return native;
};


const boxShadow = (style) => {
  if (('boxShadow' in style) && Reactors.isMobile()) {
    return omit({
      ...style,
      ...toMobile(style.boxShadow),
    }, ['boxShadow']);
  }
  return {...style};
};

export default boxShadow;
