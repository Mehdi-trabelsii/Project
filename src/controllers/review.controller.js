import Review from '../models/review.model';
import ApiResponse from '../utils/APIResponse';
import httpStatus from 'http-status';
import Product from '../models/product.model';
import product from '../models/product.model';

export async function add(req, res, next) {
    
    const product = await Product.findById(req.params.id)
        .populate('user')
        .populate('reviews');

    if(!product){
        next();
    }

    for (var i = 0; i < product.reviews.length; i++) {
        if (product.reviews[i].user.toJSON() === req.user._id.toJSON()) {
            res.status = 401;
            return res.json({status:'INVALID_REQUEST',errorCode:'you alredy reviewed this product'});
        }
    }
    var review = new Review(req.body);
    review.postedOn = Date.now();

    review.user = req.locals.user._id;

    product.reviews.push(review);
    review.save();
    res.status(201);
    res.json(review);
}
