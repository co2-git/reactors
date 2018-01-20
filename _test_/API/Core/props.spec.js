import React from 'react';
import {Describe, Expect, Run} from '@francoisv/describe-react';

import props from '../../../dist/API/Core/props';
import Reactors from '../../../dist/API/Core';

const setPlatformToMobile = () => {
  Reactors.platform = 'mobile';
};

const setPlatformToWeb = () => {
  Reactors.platform = 'web';
};

const style = styleProps => props({style: styleProps});

const onPress = () => {};

const testStylesMobile = [
  {
    name: 'Border shorthand',
    in: {border: '1px solid #000'},
    out: {
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#000',
    },
  },
  {
    name: 'Box Shadow',
    in: {boxShadow: '0 4px 4px 1px rgba(0, 0, 0, .2)'},
    out: {
      shadowColor: 'rgba(0, 0, 0, .2)',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
  },
  {
    name: 'Box Shadow',
    in: {boxShadow: '60px -16px teal'},
    out: {
      shadowColor: 'teal',
      shadowOffset: {
        width: 60,
        height: -16,
      },
      shadowOpacity: 1,
    },
  },
  {
    name: 'Box Shadow',
    in: {boxShadow: '10px 5px 5px black'},
    out: {
      shadowColor: 'black',
      shadowOffset: {
        width: 10,
        height: 5,
      },
      shadowOpacity: 1,
      shadowRadius: 5,
    },
  },
  {
    name: 'Box Shadow',
    in: {boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)'},
    out: {
      shadowColor: 'rgba(0, 0, 0, 0.2)',
      shadowOffset: {
        width: 2,
        height: 2,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,
    },
  },
  {
    name: 'Box Shadow(s)',
    in: {boxShadow: '3px 3px red, -1em 0 0.4em olive'},
    out: {
      shadowColor: 'red',
      shadowOffset: {
        width: 3,
        height: 3,
      },
      shadowOpacity: 1,
    },
  },
  {
    name: 'Box Shadow inset',
    in: {boxShadow: 'inset 5em 1em gold'},
    out: {
      shadowColor: 'gold',
      shadowOffset: {
        width: -5,
        height: -1,
      },
      shadowOpacity: 1,
    },
  },
  {
    name: 'Cursor',
    in: {cursor: 'pointer'},
    out: {},
  },
  {
    name: 'Flex display with no direction',
    in: {display: 'flex'},
    out: {flexDirection: 'row'},
  },
  {
    name: 'Flex display with column',
    in: {display: 'flex', flexDirection: 'column'},
    out: {flexDirection: 'column'},
  },
  {
    name: 'Flex display with row',
    in: {display: 'flex', flexDirection: 'row'},
    out: {flexDirection: 'row'},
  },
  {
    name: 'Transform matrix',
    in: {transform: 'matrix(1, 2, 3)'},
    out: {transform: []},
  },
  {
    name: 'Transform translate',
    in: {transform: 'translate(120px, 50%)'},
    out: {transform: [{translateX: 120}, {translateY: '50%'}]},
  },
  {
    name: 'Transform translate X',
    in: {transform: 'translateX(120px)'},
    out: {transform: [{translateX: 120}]},
  },
  {
    name: 'Transform translate Y',
    in: {transform: 'translateY(120px)'},
    out: {transform: [{translateY: 120}]},
  },
  {
    name: 'Remove transition',
    in: {transition: 'margin 1s'},
    out: {},
  },
];

export default () => (
  <Describe label="Reactors props">
    <Expect value={props} isAFunction />

    <Describe label="it should return correct props">
      <Expect function={() => props({foo: 1})} return={{foo: 1}} />
    </Describe>

    <Describe label="Gestures">
      <Describe label="DOM">
        <Run script={setPlatformToWeb} />
        <Describe label="onPress should be transformed to onClick">
          <Expect
            function={() => props({onPress})}
            return={{onClick: onPress}}
          />
        </Describe>
      </Describe>
    </Describe>

    <Describe label="Styles">
      <Describe label="Merge styles - accept arrays and objects">
        <Expect
          function={() => style([{margin: 10}, {padding: 5}, {padding: 4}])}
          return={{style: {margin: 10, padding: 4}}}
        />
      </Describe>

      <Describe label="Mobile">
        <Run script={setPlatformToMobile} />

        {testStylesMobile.map(test => (
          <Describe
            label={
              `${test.name} --- ` +
              `${JSON.stringify(test.in)} ==> ${JSON.stringify(test.out)}`
            }
          >
            <Expect
              function={() => style(test.in)}
              return={{style: test.out}}
            />
          </Describe>
        ))}

        <Describe label="{transform: perspective(1)} = {transform: [{perspective: 1}]}">
          <Expect
            function={() => style({transform: 'perspective(1)'})}
            return={{style: {transform: [{perspective: 1}]}}}
          />
        </Describe>

        <Describe label="{transform: rotate(0.5turn)} = {transform: [{rotate: 0.5turn}]}">
          <Expect
            function={() => style({transform: 'rotate(0.5turn)'})}
            return={{style: {transform: [{rotate: '0.5turn'}]}}}
          />
        </Describe>

        <Describe label="{transform: rotateX(0.5turn)} = {transform: [{rotateX: 0.5turn}]}">
          <Expect
            function={() => style({transform: 'rotateX(0.5turn)'})}
            return={{style: {transform: [{rotateX: '0.5turn'}]}}}
          />
        </Describe>

        <Describe label="{transform: rotateY(0.5turn)} = {transform: [{rotateY: 0.5turn}]}">
          <Expect
            function={() => style({transform: 'rotateY(0.5turn)'})}
            return={{style: {transform: [{rotateY: '0.5turn'}]}}}
          />
        </Describe>

        <Describe label="{transform: rotateZ(0.5turn)} = {transform: [{rotateZ: 0.5turn}]}">
          <Expect
            function={() => style({transform: 'rotateZ(0.5turn)'})}
            return={{style: {transform: [{rotateZ: '0.5turn'}]}}}
          />
        </Describe>

        <Describe label="{transform: scale(2, 0.5} = {transform: [{scaleX: 2, scaleY: 0.5}]}">
          <Expect
            function={() => style({transform: 'scale(2, 0.5)'})}
            return={{style: {transform: [{scaleX: 2}, {scaleY: 0.5}]}}}
          />
        </Describe>

        <Describe label="{transform: scaleX(2} = {transform: [{scaleX: 2}]}">
          <Expect
            function={() => style({transform: 'scaleX(2)'})}
            return={{style: {transform: [{scaleX: 2}]}}}
          />
        </Describe>

        <Describe label="{transform: scaleY(2} = {transform: [{scaleY: 2}]}">
          <Expect
            function={() => style({transform: 'scaleY(2)'})}
            return={{style: {transform: [{scaleY: 2}]}}}
          />
        </Describe>

        <Describe label="{transform: skew(30deg, 20deg} = {transform: [{skewX: 30deg, skewY: 20deg}]}">
          <Expect
            function={() => style({transform: 'skew(30deg, 20deg)'})}
            return={{style: {transform: [{skewX: '30deg'}, {skewY: '20deg'}]}}}
          />
        </Describe>

        <Describe label="{transform: skewX(20deg} = {transform: [{skewX: 20deg}]}">
          <Expect
            function={() => style({transform: 'skewX(20deg)'})}
            return={{style: {transform: [{skewX: '20deg'}]}}}
          />
        </Describe>

        <Describe label="{transform: skewY(30deg} = {transform: [{skewY: 30deg}]}">
          <Expect
            function={() => style({transform: 'skewY(30deg)'})}
            return={{style: {transform: [{skewY: '30deg'}]}}}
          />
        </Describe>
      </Describe>

      <Describe label="Web">
        <Run script={setPlatformToWeb} />
        <Describe label="{borderWidth: 1} = {borderWidth: 1, borderStyle: solid, borderColor: black}">
          <Expect
            function={() => style({borderWidth: 1})}
            return={{style: {borderWidth: 1, borderStyle: 'solid', borderColor: 'black'}}}
          />
        </Describe>

        <Describe label="{marginHorizontal: 10} = {marginLeft: 10, marginRight: 10}">
          <Expect
            function={() => style({marginHorizontal: 10})}
            return={{style: {marginLeft: 10, marginRight: 10}}}
          />
        </Describe>

        <Describe label="{marginVertical: 10} = {marginTop: 10, marginBottom: 10}">
          <Expect
            function={() => style({marginVertical: 10})}
            return={{style: {marginTop: 10, marginBottom: 10}}}
          />
        </Describe>

        <Describe label="{resizeMode: cover} = {objectFit: cover}">
          <Expect
            function={() => style({resizeMode: 'cover'})}
            return={{style: {objectFit: 'cover'}}}
          />
        </Describe>

        <Describe label="{resizeMode: contain} = {objectFit: contain}">
          <Expect
            function={() => style({resizeMode: 'contain'})}
            return={{style: {objectFit: 'contain'}}}
          />
        </Describe>

        <Describe label="{resizeMode: stretch} = {objectFit: fill}">
          <Expect
            function={() => style({resizeMode: 'stretch'})}
            return={{style: {objectFit: 'fill'}}}
          />
        </Describe>

        <Describe label="{transform: [{rotate: '20deg'}, {translateX: 120}]} = {transform: 'rotate(20eg) translateX(120px)'}">
          <Expect
            function={() => style({transform: [{rotate: '20deg'}, {translateX: 120}]})}
            return={{style: {transform: 'rotate(20deg) translateX(120px)'}}}
          />
        </Describe>

        <Describe label="{flexDirection: 'row' | 'column'} = {display: 'flex', flexDirection: 'row' | 'column'}">
          <Expect
            function={() => style({flexDirection: 'row'})}
            return={{style: {flexDirection: 'row', display: 'flex'}}}
          />
        </Describe>
      </Describe>
    </Describe>
  </Describe>
);
