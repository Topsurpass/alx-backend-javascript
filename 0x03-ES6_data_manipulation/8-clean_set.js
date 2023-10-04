export default function cleanSet(set, startString) {
  const subStringArr = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set) {
    if (typeof value === 'string' && value.startsWith(startString) && startString !== '') {
      subStringArr.push(value.slice(startString.length));
    }
  }
  return subStringArr.join('-');
}
