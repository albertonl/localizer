/**
  * This function iterates through all key-value pair within a "base" Object
  * instance, and makes sure each of them has a corresponding pair
  * (of both the same key and path) within an Object b.
  *
  * @param {Object} a - The base object.
  * @param {Object} b - The object where we will equalize a's key-value pairs.
  * @returns {Object} The processed object.
  */
export function equalize (a, b) {
  // iterate through each of the key-value pairs in a
  Object.keys(a).forEach(key => {
    if (!(key in b)) {
      // if the corresponding key-value pair doesn't exist
      // in b, we create it.
      if (typeof a[key] === 'object') {
        b[key] = {};
        b[key] = equalize(a[key], b[key]);
      } else {
        b[key] = "";
      }
    } else if (typeof a[key] === 'object') {
      b[key] = equalize(a[key], b[key]);
    }
  });

  return b;
}
