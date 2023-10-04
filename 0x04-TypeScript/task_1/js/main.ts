/**
 * Creating Teacher interface
 */
export interface Teacher  {
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [index:string]: any,
}
/**
 * Create new interface that extends Teacher interface
 */
export interface Directors extends Teacher {
    numberOfReports: number, 
}
/**
 * Interface for printTeacher function
 */
export interface printTeacherFunction {
    firstName: string,
    lastName: string,
}
/**
 * 
 * @param name accepts printTeacherFunction interface
 * @returns string
 */
const printTeacher = (firstName:string, lastName:string): string => {
    return `${firstName[0]}. ${lastName}`;
}