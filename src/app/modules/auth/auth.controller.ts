import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsyne";
import sendResponse from "../../utils/sendRespons";
import { AuthServer } from "./auth.service";


const loginUser = catchAsync(async (req, res) => {
    const result = await AuthServer.loginIntoDb(req.body)

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'user create a succesfully',
        data: result,
    });
})


export const AuthController = {
    loginUser
}