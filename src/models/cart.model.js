import mongoose from 'mongoose';
import { list, get } from '../utils/helpers'
import { number } from '@hapi/joi';
const cartSchema = new mongoose.Schema(
    {
        user: {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        },
        products:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Product',
            // quantity:Number,
        }],
        totalquantity:{
            type:Number,
            default:null,
        },
        totalprice:{
            type:Number,
            default:null,
        }
    },

);
cartSchema.method({
    transform() {
        const transformed = {};
        const fields = ['_id', 'user', 'products', 'totalquantity', 'totalprice'];

        fields.forEach((field) => {
            (transformed)[field] = this[field];
        });

        return transformed;
    },

})
// cartSchema.pre('save', function (next) {
// for (let i = 0; i < this.products.length; i++) {
//     this.totalquantity=this.totalquantity+1
// }
// next();
// });


const cart = mongoose.model('Cart', cartSchema);
export default cart;

