const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...


const stringify = function(obj) {
  //iterate through obj properties
    // if it is a number or boolean
    if (typeof obj === 'number' || typeof obj === 'boolean'){
      return obj.toString();
    }
    // if it is undefined
    else if(typeof obj === 'undefined'){
      return undefined;
    }
    // if it is null
    else if (obj === null){
      return 'null';
    }
    // if it is a string
    else if (typeof obj === 'string'){
      return `"${obj}"`;
    }
    // if it is an array, call stringify on the array
    else if (Array.isArray(obj)){
      return `[${_.map(obj, el => stringify(el))}]`;
    }
    // if it is an object, call stringify on the obj
    else {
      var string = _.map(obj, (el, key) => `\"${key}\":${stringify(el)}`);
      return `{${string}}`;
    }
};

module.exports = {
  stringify: stringify
};
