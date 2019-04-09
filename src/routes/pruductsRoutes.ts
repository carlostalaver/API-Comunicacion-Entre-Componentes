import {Request, Response, Router} from 'express';
import productControllers from './../controlles/products.controlles';


class ProductRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/', productControllers.getProducts);
    this.router.get('/:id', productControllers.getProduct);
    this.router.post('/', productControllers.createProduct);
    this.router.patch('/:id', productControllers.updataProduct);
    this.router.delete('/:id', productControllers.deleteProduct)
  }
}

const productRoutes = new ProductRoutes();
export default productRoutes.router;