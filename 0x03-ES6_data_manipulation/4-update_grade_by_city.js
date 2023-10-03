export default function updateStudentGradeByCity(students, city, newGrades) {
  const defaultGrade = { grade: 'N/A' };
  if (Array.isArray(students)) {
    const stdFilter = students.filter((student) => student.location === city);
    return stdFilter.map((student) => ({
      id: student.id,
      firstname: student.firstName,
      location: student.location,
      grade: (newGrades
        .filter((obj) => obj.studentId === student.id)
        .pop() || defaultGrade).grade,
    }));
  }
  return [];
}
