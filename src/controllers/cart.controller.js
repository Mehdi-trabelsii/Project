import ApiResponse from '../utils/APIResponse';
import httpStatus from 'http-status';
import Cart from '../models/cart.model';
import Product from '../models/product.model';


export async function add(req,res,next) {

    const product = await Product.findById(req.params.id);

    console.log("this is the product" + product + "done.");
    const cart = await Cart.findById(req.params.cartid)
    if (!product) {
        next();
    }
    else {
        cart.products.push(product);
        cart.save();
        res.status(201);
        res.json(cart);
    }
}