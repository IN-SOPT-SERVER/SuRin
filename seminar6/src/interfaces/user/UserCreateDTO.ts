export interface UserCreateDTO {
    name: string;
    age: number;
    email: string;
    password: string;
  }

export interface UserSignInDTO {
  email: string;
  password: string;
}