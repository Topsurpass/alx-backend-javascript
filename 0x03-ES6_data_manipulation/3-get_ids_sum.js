export default function getStudentIdsSum(arr) {
  if (Array.isArray) {
    return arr.reduce((a, b) => {
      if (a.id) return a.id + b.id;
      return a + b.id;
    });
  }
  return 0;
}
