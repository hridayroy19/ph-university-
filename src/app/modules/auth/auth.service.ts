import bcrypt from 'bcrypt'
import { User } from "../user/user.model";
import { TLoginUser } from "./auth.interface";

const loginIntoDb = async (playload: TLoginUser) => {
    // console.log(playload);

    const isUserExists = await User.findOne({ id: playload?.id })
    //  console.log(isUserExists);
    if (!isUserExists) {
        throw new Error('this user is not found')
    }

    const isDeleted = isUserExists?.isDeleted
    if (isDeleted === true) {
        throw new Error('User Is deleted')
    }

    const userStatus = isUserExists?.status
    if(userStatus === 'blocked'){
        throw new Error ('User is All ready Blocked')
    }
    //checking it the password is correct
    const isPasswordMatch = await bcrypt.compare(playload.password, isUserExists.password)
    console.log(isPasswordMatch);
    


    return {};

}


export const AuthServer = {
    loginIntoDb
}