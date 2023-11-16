import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { CourseCatalogController } from './courseCatalog.controller';
import { CourseCatalogValidation } from './courseCatalog.validation';
const router = express.Router();

router.get(
  '/:id',

  CourseCatalogController.getSingleCourseCatalogs
);

router.get(
  '/',

  CourseCatalogController.getAllCourseCatalogs
);

router.post(
  '/create-courseCatalog',
  validateRequest(CourseCatalogValidation.createCourseCatalogZodSchema),

  CourseCatalogController.createCourseCatalog
);

router.delete('/:id', CourseCatalogController.deleteCourseCatalog);

router.patch('/:id', CourseCatalogController.updateCourseCatalog);

export const BlogRoutes = router;
