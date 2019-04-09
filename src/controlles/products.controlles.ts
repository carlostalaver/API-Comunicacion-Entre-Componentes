import { Request, Response } from 'express';
import productModel from '../models/productModel';

class ProductController {
  productController: any;
  constructor() {
    this.productController = {}
  }

  async getProducts(req: Request, res: Response): Promise<void> {
    const products = await productModel.find((err, pro) => {
      if (err) console.log('Ha ocurrido un error al recuperar los productos');
      if (pro) {
        console.log(' consegui los productos ', pro);
      }
    });
    res.json(products);
  }

  async getProduct(req: Request, res: Response): Promise<void>  {
    const {id} = req.params
    const products = await productModel.findById(id, (err, pro) => {
      if (err) console.log('Ha ocurrido un error al recuperar los productos');
      if (pro) {
        console.log(' consegui los productos ', pro);
      }
    });
    res.json(products);
  }

  async createProduct(req: Request, res: Response): Promise<void> {
    const newProductModel = await new productModel(req.body);
    const newProduct = await newProductModel.save();
    res.json(newProduct);
  }

  async updataProduct(req: Request, res: Response): Promise<void>{
    const { id } = req.params;    
     const product = await productModel.findById(id, (err, prod) => {
      if (err) {
        console.error("No se encontraron el documento");
        res.status(404);
      }
      console.log('encontre el producto a actualizar ', prod);
      
      
    });
    
    console.log('el product ',product);
    Object.entries(req.body).forEach(item => {
      const key = item[0];
      const value = item[1];
      if (product){
        product[key] = value;
      }
    }); 
    res.json(await product.save());
  };

  async deleteProduct(req: Request, res: Response): Promise<void>{
    const productDeleted = await productModel.findByIdAndDelete(req.params.id, (err, pro)=> {
      if (err)  console.log('Hubo un error al eliminar el producto con id ', req.params.id);
      console.log(`Producto con Id ${req.params.id} ELIMINADO`);
    });
    res.json({"msj":"Eliminado"})

  }


}

const productControllers = new ProductController();
export default productControllers; 