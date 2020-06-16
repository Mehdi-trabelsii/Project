import mongoose from 'mongoose';
import { list, get } from '../utils/helpers'
const panelschema = new mongoose.Schema(
    {
        user: {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        products:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product'
        }],
        quantityprod:{
            type:Number,
            default:null,
        },
        totalquantity:{
            type:Number,
            default:null,
        },
        totalprice:{
            type:Number,
            default:null,
        }
    }
);
panelSchema.method({
    transform() {
        const transformed = {};
        const fields = ['_id', 'user', 'products', 'quantityprod', 'totalquantity', 'totalprice'];

        fields.forEach((field) => {
            (transformed)[field] = this[field];
        });

        return transformed;
    },

})
const panel = mongoose.model('Panel', panelSchema);
export default panel;

