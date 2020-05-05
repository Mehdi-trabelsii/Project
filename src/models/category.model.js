import mongoose, { Model, Document } from 'mongoose';
const categorySchema =new mongoose.Schema(
    {
        label:
        {
        type:String,
        required:true,
        maxlength:128,
        trim:true,
        },
        characteristics:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'characteristic'
        }]

    }
);
const category = mongoose.model('Category',categorySchema);
export default category;