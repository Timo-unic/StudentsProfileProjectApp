export interface IStudentProfile {
    id?: string;
    firstName: string;
    lastName: string;
    studentLogin: string;
    studentCardNumber?: string;
    description: string;
    age?: number;
    image?: null;
    dateOfBirth?: Date;
    isGraduated?: boolean
    isProfileVisible?: boolean;
    additionalInfo?: null;
  }
  