'use strict';

function getSomeData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Some Data');
    }, 1000);
  });
}

function throwError() {
  return new Promise((_, reject) => {
    reject(new Error('Not Fetched Data'));
  })
}

function simpleError() {
  throw new Error('Simple Error happened');
}

module.exports = {
  throwError,
  getSomeData,
  simpleError,
}
