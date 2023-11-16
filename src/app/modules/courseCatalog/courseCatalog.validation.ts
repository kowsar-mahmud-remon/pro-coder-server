import { z } from 'zod';

const createCourseCatalogZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: 'Name is required',
    }),
    title: z.string({
      required_error: 'Title is required',
    }),

    imgUrl: z.string({
      required_error: 'ImgUrl is required',
    }),
    course_price: z.number({
      required_error: 'course_price is required',
    }),
    rating: z.number({
      required_error: 'Rating is required',
    }),
    details: z.string({
      required_error: 'Details is required',
    }),
  }),
});

export const CourseCatalogValidation = {
  createCourseCatalogZodSchema,
};
