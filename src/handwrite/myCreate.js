export function myCreate(proto) {
  if (typeof proto !== 'object')
    throw new Error('Type Error')

  const obj = {}
  // eslint-disable-next-line no-proto
  obj.__proto__ = proto
  return obj
}
