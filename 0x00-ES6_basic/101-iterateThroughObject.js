export default function iterateThroughObject(reportWithIterator) {
  const arr = [];
  for (const obj of reportWithIterator) arr.push(obj);
  return arr.join(' | ');
}
