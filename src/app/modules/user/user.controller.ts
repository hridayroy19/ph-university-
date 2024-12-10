import { UserService } from "./user.service";
import catchAsync from "../../utils/catchAsyne";
import sendResponse from "../../utils/sendRespons";
import httpStatus from "http-status";


const createUser =catchAsync( async (req, res ,) => {
  const { password, student: studentData } = req.body;
  const result = await UserService.createUserIntoDB(password,studentData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user create a succesfully',
    data: result,
  })
});
  



  export const userController ={
    createUser
  }