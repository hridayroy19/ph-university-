import { Model } from "mongoose";

export interface TUser {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'admin' | 'student' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
};


export interface  UserModel extends Model<TUser>{
  myStaticMethod():number;
}


export type NewUser = {
  password: string;
  role: string;
  id: string;
};
