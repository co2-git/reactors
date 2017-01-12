import isArray from 'lodash/isArray';
import Declaration from '../Declaration';

type $declarationsObject = {[property: string]: any};
type $declarationParam = Declarations | $declarationsObject;

export default class Declarations {
  declarations: Declaration[] = [];

  constructor(declarations: $declarationParam | $declarationParam[]) {
    if (declarations instanceof Declarations) {
      console.log('....');
      Object.assign(this, declarations);
    } else {
      let set = declarations;

      if (!isArray(declarations)) {
        set = [declarations];
      }

      for (const declaration of set) {
        for (const property in declaration) {
          this.declarations.push(
            declaration instanceof Declaration ? declaration :
            new Declaration(property, declaration[property]),
          );
        }
      }
      console.log(require('util').inspect({declarations: this.declarations}, { depth: null }));
    }
  }

  toObject() {
    let object = {};

    for (const declaration of this.declarations) {
      object = {
        ...object,
        ...declaration.toObject(this.declarations),
      };
    }

    return object;
  }
}
