import { z } from 'zod';

const createCourseCatalogZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),

    imgUrl: z.string({
      required_error: 'ImgUrl is required',
    }),
  }),
});

export const CourseCatalogValidation = {
  createCourseCatalogZodSchema,
};
