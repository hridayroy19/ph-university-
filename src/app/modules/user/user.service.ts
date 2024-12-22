import { Student } from './../student/student.interface';
import config from '../../config';
import { TUser } from './user.interface';
import { User } from './user.model';
import { StudentModel } from '../student/student.model';

const createUserIntoDB = async (password: string, student: Student) => {
  // if(await user.isUserExists)
  //if password is not given use default password
  //create user objcet
  const userData: Partial<TUser> = {};
  userData.password = password || (config.default_password as string);
  //set student rool

  userData.role = 'student';

  //set menually generate id
  userData.id = '2030100002';

  //create a user
  const newUser = await User.create(userData);

  //create a student
  if (Object.keys(newUser).length) {
    //set id _id as user
    student.id = newUser.id;
    student.user = newUser._id;
  }

  const newStudent = await StudentModel.create(student);

  return newStudent;
};

export const UserService = {
  createUserIntoDB,
};
