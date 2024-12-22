import { academicSemestrNameCodeMapper } from './academicSemester.constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemisterIntoDB = async (paylod: TAcademicSemester) => {
  if (academicSemestrNameCodeMapper[paylod.name] !== paylod.code) {
    throw new Error(' invalid semitser code');
  }

  const result = await AcademicSemester.create(paylod);
  return result;
};

const getAllAcademicSememsterIntoDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

const getIdAcademicSemesterIntoDB = async (id: string) => {
  const result = await AcademicSemester.findById(id);
  return result;
};

const updateByIdAcademicSemesterIntoDB = async (
  id: string,
  paylod: Partial<TAcademicSemester>,
) => {
  if (
    paylod.name &&
    paylod.code &&
    academicSemestrNameCodeMapper[paylod.name] !== paylod.code
  ) {
    throw new Error('invalid semester code ');
  }

  const result = await AcademicSemester.findByIdAndUpdate(id, paylod, {
    new: true,
  });
  return result;
};

export const AcademicSemisterService = {
  createAcademicSemisterIntoDB,
  getAllAcademicSememsterIntoDB,
  getIdAcademicSemesterIntoDB,
  updateByIdAcademicSemesterIntoDB,
};
