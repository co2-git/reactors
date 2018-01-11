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

        <Describe label="{display: flex} = {flexDirection: row}">
          <Expect
            function={() => style({display: 'flex'})}
            return={{style: {flexDirection: 'row'}}}
          />
        </Describe>

        <Describe label="{display: flex, flexDirection: column} = {flexDirection: column}">
          <Expect
            function={() => style({display: 'flex', flexDirection: 'column'})}
            return={{style: {flexDirection: 'column'}}}
          />
        </Describe>

        <Describe label="{cursor: *} = {}">
          <Expect
            function={() => style({cursor: 'pointer'})}
            return={{style: {}}}
          />
        </Describe>

        <Describe label="{transform: matrix(1, 2, 3)} = {transform: []}">
          <Expect
            function={() => style({transform: 'matrix(1, 2,3)'})}
            return={{style: {transform: []}}}
          />
        </Describe>

        <Describe label="{transform: translate(120px, 50%)} = {transform: [{translateX: 120}, {translateY: '50%'}]}">
          <Expect
            function={() => style({transform: 'translate(120px, 50%)'})}
            return={{style: {transform: [{translateX: 120}, {translateY: '50%'}]}}}
          />
        </Describe>

        <Describe label="{transform: translateX(120px)} = {transform: [{translateX: 120}]}">
          <Expect
            function={() => style({transform: 'translateX(120px)'})}
            return={{style: {transform: [{translateX: 120}]}}}
          />
        </Describe>

        <Describe label="{transform: translateY(120px)} = {transform: [{translateY: 120}]}">
          <Expect
            function={() => style({transform: 'translateY(120px)'})}
            return={{style: {transform: [{translateY: 120}]}}}
          />
        </Describe>

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

        <Describe label="{transition: margin 1s} = {}">
          <Expect
            function={() => style({transition: 'margin 1s'})}
            return={{style: {}}}
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
