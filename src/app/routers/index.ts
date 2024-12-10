import { Router } from "express";
import { StudentRoutes } from "../modules/student/student.route";
import { userRouter as UserRouter } from "../modules/user/user.route";
import { AcademicSemesterRoutes } from "../modules/academicSemester/academicSemester.route";


const router = Router()

const moduleRoutes = [
    {
        path: '/users',
        route: UserRouter
    },
    {
        path: '/students',
        route: StudentRoutes
    },
    {
        path: '/academic-semestar',
        route:  AcademicSemesterRoutes
    }
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))


export default router;