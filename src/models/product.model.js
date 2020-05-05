import mongoose, { Model, Document } from 'mongoose';
const productSchema = new mongoose.Schema(
    {
        label:{
            type:String,
            required:true,
            lowercase:true,
            maxlength:128,
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
            minlength:128,
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
            ref:'Promotion'
        },
        model:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Model'
        },
        categorie:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Category'
        },

    },
);
const product = mongoose.model('Product',productSchema);
export default product;
