export default function updateStudentGradeByCity(students, city, newGrades) {
  const exactStudents = students.filter((student) => student.location === city);

  const gradeStudents = exactStudents.map((student) => {
    for (const theGrade of newGrades) {
      if (student.id === theGrade.studentId) {
        student.grade = theGrade.grade; // eslint-disable-line no-param-reassign
      }
    }
    if (student.grade === undefined) {
      student.grade = 'N/A'; // eslint-disable-line no-param-reassign
    }
    return student;
  });

  return gradeStudents;
}
