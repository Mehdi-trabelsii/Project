import mongoose, { Model, Document } from 'mongoose';
const promotionSchema = new mongoose.Schema(
    {
        datedebut:{
            type:Date,
            required:true,
        },
        datefin :{
            type:Date,
            required:true,
        },
        reduction:{
            type:Number,
            required:true,
        },

    }
);
const promotion = mongoose.model('Promotion', promotionSchema);
export default promotion;