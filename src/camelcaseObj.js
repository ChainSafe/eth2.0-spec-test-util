const camelcase = require('camelcase');

module.exports = function camelcaseObj (obj) {
  if (Object(obj) === obj) {
    Object.getOwnPropertyNames(obj).forEach((name) => {
      const newName = camelcase(name);
      if (newName !== name) {
        obj[newName] = obj[name];
        delete obj[name];
      }
      camelcaseObj(obj[newName]);
    });
  } else if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      obj[i] = camelcaseObj(obj[i]);
    }
  }
  return obj;
}
