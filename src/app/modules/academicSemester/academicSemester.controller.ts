import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsyne";
import sendResponse from "../../utils/sendRespons";
import { AcademicSemisterService } from "./academicSemester.service";



const createAcademicSemister = catchAsync(async (req, res) => {
    const result = await AcademicSemisterService.createAcademicSemisterIntoDB(
        req.body
    )

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: " Academic Semister create succesfully",
        data: result
    })
})



const getAllAcademicSememster = catchAsync(async ( req , res)=>{
     const result = await AcademicSemisterService.getAllAcademicSememsterIntoDB()

     sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"Get All AcademicSemister succesfully",
        data:result 
     })

})


const getIdAcademicSemester = catchAsync(async(req , res )=>{
    const id  = req.params.id
    const result = await AcademicSemisterService.getIdAcademicSemesterIntoDB(id)

    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:"get single Data succesfully",
        data:result
    })
})

const updateByIdAcademicSemester = catchAsync(async(req , res )=>{
    const id  = req.params.id
    const data = req.body;
    const result = await AcademicSemisterService.updateByIdAcademicSemesterIntoDB(id, data)

    sendResponse(res, {
        statusCode:httpStatus.OK,
        success:true,
        message:"Data Update succesfully",
        data:result
    })
})



export const AcademicSemisterController = {
    createAcademicSemister,
    getAllAcademicSememster,
    getIdAcademicSemester,
    updateByIdAcademicSemester
}