import mongoose from 'mongoose';
import { list, get } from '../utils/helpers'

const reviewSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    postedOn: Date,
    rating: {
        type: Number,
        required: [true],
        min: [1],
        max: [5]
    },
    review: String
}, 
);
reviewSchema.pre('save', function (next) {
    Math.round(this.rating);
    next();
});
reviewSchema.method({
    transform() {
        const transformed = {};
        const fields = ['_id','postedon','rating','review','user'];

        fields.forEach((field) => {
            (transformed)[field] = this[field];
        });

        return transformed;
    },

})
var Review = mongoose.model('Review', reviewSchema);
export default Review;