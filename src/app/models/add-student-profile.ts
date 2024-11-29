export interface IAddStudentProfile {
    id?: string;
    firstName: string;
    lastName: string;
    studentLogin: string;
    studentCardNumber: string;
    description: string;
    age: number;
    image?: string;
    dateOfBirth?: Date;
    isGraduated?: boolean
    isProfileVisible?: boolean;
    additionalInfo?: string;
  }
