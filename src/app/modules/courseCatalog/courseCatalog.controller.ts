import { Request, Response } from 'express';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ICourseCatalog } from './courseCatalog.interface';
import { CourseCatalogService } from './courseCatalog.service';

const createCourseCatalog = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await CourseCatalogService.createCourseCatalog(data);

  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    success: true,
    message: 'CourseCatalog created successfully!',
    data: result,
  });
});

const getAllCourseCatalogs = catchAsync(async (req: Request, res: Response) => {
  const allCourseCatalogs = await CourseCatalogService.getAllCourseCatalogs();

  if (!allCourseCatalogs) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to get CourseCatalogs');
  }

  res.status(httpStatus.OK).json({
    statusCode: httpStatus.OK,
    success: true,
    message: 'CourseCatalogs fetched successfully !',
    data: allCourseCatalogs,
  });
});

const getSingleCourseCatalogs = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const singleCourseCatalog =
      await CourseCatalogService.getSingleCourseCatalog(id);

    if (!singleCourseCatalog) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'Failed to get CourseCatalog');
    }

    sendResponse<ICourseCatalog>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'CourseCatalog fetched successfully !',
      data: singleCourseCatalog,
    });
  }
);

const updateCourseCatalog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const updatedCourseCatalog = await CourseCatalogService.updateCourseCatalog(
    id,
    updatedData
  );

  if (!updatedCourseCatalog) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Failed to Update CourseCatalog'
    );
  }

  sendResponse<ICourseCatalog>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CourseCatalog updated successfully !',
    data: updatedCourseCatalog,
  });
});

const deleteCourseCatalog = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const deletedCourseCatalog = await CourseCatalogService.deleteCourseCatalog(
    id
  );

  if (!deletedCourseCatalog) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Failed to delete CourseCatalog'
    );
  }

  sendResponse<ICourseCatalog>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'CourseCatalog deleted successfully !',
    data: deletedCourseCatalog,
  });
});

export const CourseCatalogController = {
  createCourseCatalog,
  getAllCourseCatalogs,
  getSingleCourseCatalogs,
  updateCourseCatalog,
  deleteCourseCatalog,
};
