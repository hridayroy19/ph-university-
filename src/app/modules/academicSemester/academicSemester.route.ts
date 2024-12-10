import { Router } from "express";
import { AcademicSemisterController } from "./academicSemester.controller";
import validateRequest from "../../middlewares/validateRequest";
import { AcademiSemesterValidation } from "./academicSemester.validation";


const router = Router()


router.post('/create-academic-semister',
     validateRequest(
          AcademiSemesterValidation.createAcdemicSemesterValidationSchema),
     AcademicSemisterController.createAcademicSemister);

router.get('/all-academic',AcademicSemisterController.getAllAcademicSememster )
router.get('/all-academic/:id',AcademicSemisterController.getIdAcademicSemester)
router.put('/all-academic/:id',AcademicSemisterController.updateByIdAcademicSemester)




export const AcademicSemesterRoutes = router;