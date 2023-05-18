const obj2 = {
  [Symbol.toPrimitive]: () => { console.log('toPrimitive'); return 123; },
};
console.log(obj2 - 1);   // valueOf   122

const obj3 = {
  valueOf: () => { console.log('valueOf'); return {}; },
  toString: () => { console.log('toString'); return {}; },
};
console.log(obj3 - 1);  