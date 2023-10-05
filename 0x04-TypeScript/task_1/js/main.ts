/**
 * Creating Teacher interface
 */
export interface Teacher  {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [index: string]: any;
}
/**
 * Create new interface that extends Teacher interface
 */
export interface Directors extends Teacher {
    numberOfReports: number; 
}
/**
 * Interface for printTeacher function
 */
export interface PrintTeacherFunction {
    firstName: string;
    lastName: string;
}
/**
 * 
 * @param name accepts printTeacherFunction interface
 * @returns string
 */
const printTeacher = (firstName: string, lastName: string): string => {
    return `${firstName[0]}. ${lastName}`;
}

export interface ClassConstructor {
    firstName: string;
    lastName: string;
}

export interface StudentClassFace {
    workOnHomework(): string;
    displayName(): string;
}

export class StudentClass implements StudentClassFace {
    private _firstName: string;
    private _lastName: string;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    workOnHomework() {
        return 'Currently working';
    }
    displayName() {
        return this._firstName;
    }
}