import { Model, Schema, model } from 'mongoose';
import { ICourseCatalog } from './courseCatalog.interface';

type CourseCatalogModel = Model<ICourseCatalog, Record<string, unknown>>;

const CourseCatalogSchema = new Schema<ICourseCatalog>(
  {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    course_price: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const CourseCatalog = model<ICourseCatalog, CourseCatalogModel>(
  'CourseCatalog',
  CourseCatalogSchema
);
