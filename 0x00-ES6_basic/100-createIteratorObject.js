export default function createIteratorObject(report) {
  // function* genFunc() - a generator function (IIFE).
  // Special functions in JavaScript that allow you to pause their execution
  // and yield values one at a time.
  return (function* genFunc() {
    for (const obj of Object.values(report.allEmployees)) {
      for (const key of obj) {
        yield key;
      }
    }
  }());
}
