export interface User {
    id?: string;
    username: string;
    lastname: string;
    firstname: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    weight: number;
    height: number;
    isMale: "true" | "false";
    birthDate: Date;
    //token: string;
}
