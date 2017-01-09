// @flow

// $FlowFixMe This is by design
import Reactors from 'reactors';
import _ from 'lodash';

type $options = {
  filename?: string,
};

export default class Storage {
  db: any;
  options: $options = {};

  constructor(options: $options) {
    this.options = options;
  }

  load() {
    return new Promise(async (resolve, reject) => {
      try {
        switch (Reactors.platform) {

        case 'desktop': {
          // Connect to NeDB
          const DataStore = require('nedb');
          this.db = new DataStore({
            filename: this.options.filename,
            autoload: true,
          });
          resolve();
        } break;

        default: {
          throw new Error('Unknow Reactors platform');
        }

        }
      } catch (error) {
        reject(error);
      }
    });
  }

  set(key: string, value: any) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!this.db) {
          await this.load();
        }

        // Get eventually existing row
        const _value = await this.get(key);

        console.log({_value});

        switch (Reactors.platform) {
        case 'desktop': {
          if (_value) {
            this.db.update({key}, {key, value}, (err) => {
              if (err) {
                return reject(err);
              }
              resolve();
            });
          } else {
            this.db.insert({key, value}, (err) => {
              if (err) {
                return reject(err);
              }
              resolve();
            });
          }
        }
          break;
        default: {
          throw new Error('Unknow Reactors platform');
        }
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  get(key: string) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!this.db) {
          await this.load();
        }

        switch (Reactors.platform) {
        case 'desktop': {
          if (key) {
            this.db.find({key}, (err, docs) => {
              if (err) {
                return reject(err);
              }
              if (!docs.length) {
                return resolve();
              }
              resolve(docs[0].value, _.pick(docs[0], ['_id', 'key']));
            });
          } else {
            this.db.find({}, (err, docs) => {
              if (err) {
                return reject(err);
              }
              resolve(docs);
            });
          }
        }
          break;
        default: {
          throw new Error('Unknow Reactors platform');
        }
        }
      } catch (error) {
        reject(error);
      }
    });
  }

  unset(key: string) {
    return new Promise(async (resolve, reject) => {
      try {
        if (!this.db) {
          await this.load();
        }

        switch (Reactors.platform) {
        case 'desktop': {
          if (key) {
            this.db.unset({key}, (err) => {
              if (err) {
                return reject(err);
              }
              resolve();
            });
          } else {
            this.db.unset({}, (err) => {
              if (err) {
                return reject(err);
              }
              resolve();
            });
          }
        }
          break;
        default: {
          throw new Error('Unknow Reactors platform');
        }
        }
      } catch (error) {
        reject(error);
      }
    });
  }
}
