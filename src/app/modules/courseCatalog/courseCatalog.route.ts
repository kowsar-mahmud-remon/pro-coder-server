import express from 'express';
import { CourseCatalogController } from './courseCatalog.controller';
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
  CourseCatalogController.createCourseCatalog
);

router.delete('/:id', CourseCatalogController.deleteCourseCatalog);

router.patch('/:id', CourseCatalogController.updateCourseCatalog);

export const BlogRoutes = router;
