import ApiResponse from '../utils/APIResponse';
import httpStatus from 'http-status';
import Cart from '../models/cart.model';
import Product from '../models/product.model';
import cart from '../models/cart.model';


export async function add(req,res,next) {

    const product = await Product.findById(req.params.id);
    console.log("this is the product" + product + "done.");
    if (!product) {
        next();
    }

    if (cart.user.ToJson()===req.user._id.toJSON()){
        cart.products.push(product);
    }

    var cart = new Cart(req.body);
        cart.products.push(product);
        cart.user=req.user._id;
        cart.save();
        res.status(201);
        res.json(cart);
    
}