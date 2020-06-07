import Joi from '@hapi/joi';

// POST /v1/categories/createcategory
export const createsubcategory = {
    body: {
      label: Joi.string()
        .required()
        .max(128),
        characteristics: Joi.array()
        .required(),
      image: Joi.string().required(),
      subcategories: Joi.array()
    },
  };
//GET /v1/categories/listcategories

export const listsubcategories ={
    body: {
        page: Joi.number().min(1),
        perPage: Joi.number()
          .min(1)
          .max(100),
        label: Joi.string(),
        image: Joi.string(),
        subcategories: Joi.array()
      },
}


