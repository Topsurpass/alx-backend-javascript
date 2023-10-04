export interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const firstStudent: Student = {
    firstName: 'Temitope',
    lastName: 'Abiodun',
    age: 25,
    location: 'Lagos Nigeria'
}
const secondStudent: Student = {
    firstName: 'Samson',
    lastName: 'Akanji',
    age: 27,
    location: 'Ibadan Nigeria'
}

const studentsList: Student[] = [firstStudent, secondStudent];

export const renderTable = (studentsList: Array<Student>): void =>  {
    // create new table, head row and the row labelling
    const table = document.createElement('table');
    const headRow = document.createElement('tr');
    table.insertAdjacentElement('beforeend', headRow);
  
    // insert headers
    headRow.insertAdjacentHTML('beforeend', '<th>FirstName</th>');
    headRow.insertAdjacentHTML('beforeend', '<th>Location</th>');
  
    for (const student of studentsList) {
      const studentRow = document.createElement('tr')
      studentRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
      studentRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
      table.insertAdjacentElement('beforeend', studentRow);
    }
  
    document.body.insertAdjacentElement('beforeend', table);
}
  
renderTable(studentsList);