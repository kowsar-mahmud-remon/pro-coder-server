import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { ICourseCatalog } from './courseCatalog.interface';
import { CourseCatalog } from './courseCatalog.model';

const createCourseCatalog = async (data: ICourseCatalog) => {
  const createCourseCatalog = await CourseCatalog.create(data);

  if (!createCourseCatalog) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Failed to create CourseCatalog'
    );
  }

  return createCourseCatalog;
};

const getAllCourseCatalogs = async () => {
  const result = await CourseCatalog.find({});
  return result;
};

const getSingleCourseCatalog = async (id: string) => {
  const result = await CourseCatalog.findOne({ _id: id });
  return result;
};

const updateCourseCatalog = async (
  id: string,
  payload: Partial<ICourseCatalog>
) => {
  const isExist = await CourseCatalog.findOne({ _id: id });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'CourseCatalog not found !');
  }

  const result = await CourseCatalog.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteCourseCatalog = async (id: string) => {
  const isExist = await CourseCatalog.findOne({ _id: id });

  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'CourseCatalog not found !');
  }

  const deletedCourseCatalog = await CourseCatalog.findOneAndDelete(
    { _id: id },
    {
      new: true,
    }
  );

  return deletedCourseCatalog;
};

export const CourseCatalogService = {
  createCourseCatalog,
  getAllCourseCatalogs,
  getSingleCourseCatalog,
  updateCourseCatalog,
  deleteCourseCatalog,
};
