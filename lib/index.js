'use strict';

const Global = (
  typeof globalThis !== 'undefined' ? globalThis :
  typeof global !== 'undefined' ? global :
  typeof window !== 'undefined' ? window : self
);

module.exports = Global;
