import mongoose, { Model, Document } from 'mongoose';
import APIError from '../utils/APIError';
import { list, get } from '../utils/helpers';
import {isNil,omitBy} from 'lodash';
const productSchema = new mongoose.Schema(

    {
        label:{
            type:String,
            required:true,
            lowercase:true,
            maxlength:128,
            unique:true
        },
        price:{
            type:Number,
            required:true,    
        },
        quantity:{
            type:Number,
            required:true,
        },
        credit:{
            type:Number,
            required:true,
            default:0,
        },
        description:{
            type:String,
            required:true,
            maxlength:400,
            minlength:28,
        },
        images:[{
            type:String,
            required:true,
        }],
        marque:{
            type:String,
            required:true,
            maxlength:128,
        },
        promotion:{
            type:mongoose.Schema.Types.ObjectId, 
            ref:'Promotion',
            default : null
        },
        // model:{
        //     type:mongoose.Schema.Types.ObjectId,
        //     ref:'Model'
        // },
        // categorie:{
        //     type:mongoose.Schema.Types.ObjectId,
        //     ref:'Category'
        // },
    },


    
);
productSchema.method({
    transform() {
      const transformed= {};
      const fields = ['_id', 'label', 'price', 'quantity', 'credit', 'description', 'images','marque','promotion'];
  
      fields.forEach((field) => {
        (transformed )[field] = this[field];
      });
  
      return transformed;
    },
    
})
productSchema.statics={
    checkDuplicateLabel(error) {
        if (error.name === 'MongoError' && error.code === 11000) {
          return new APIError({
            status: 'CONFLICT',
            errorCode: 'PRODUCT_ALREADY_EXIST',
            statusMessage: 'INVALID_REQUEST',
          });
        }
        return error;
      },
      get,
      async list({ page = 1, perPage = 30, ...rest }) {
        const options = omitBy(rest, isNil);
      
        return this.find(options)
          .sort({ createdAt: -1 })
          .skip(perPage * (page - 1))
          .limit(perPage)
          .populate("promotion")
          .exec();
      }
    }
const product = mongoose.model('Product',productSchema);



export default product;
