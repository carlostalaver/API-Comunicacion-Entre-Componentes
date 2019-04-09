"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const productModel_1 = __importDefault(require("../models/productModel"));
class ProductController {
    constructor() {
        this.productController = {};
    }
    getProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const products = yield productModel_1.default.find((err, pro) => {
                if (err)
                    console.log('Ha ocurrido un error al recuperar los productos');
                if (pro) {
                    console.log(' consegui los productos ', pro);
                }
            });
            res.json(products);
        });
    }
    getProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const products = yield productModel_1.default.findById(id, (err, pro) => {
                if (err)
                    console.log('Ha ocurrido un error al recuperar los productos');
                if (pro) {
                    console.log(' consegui los productos ', pro);
                }
            });
            res.json(products);
        });
    }
    createProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProductModel = yield new productModel_1.default(req.body);
            const newProduct = yield newProductModel.save();
            res.json(newProduct);
        });
    }
    updataProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const product = yield productModel_1.default.findById(id, (err, prod) => {
                if (err) {
                    console.error("No se encontraron el documento");
                    res.status(404);
                }
                console.log('encontre el producto a actualizar ', prod);
            });
            console.log('el product ', product);
            Object.entries(req.body).forEach(item => {
                const key = item[0];
                const value = item[1];
                if (product) {
                    product[key] = value;
                }
            });
            res.json(yield product.save());
        });
    }
    ;
    deleteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const productDeleted = yield productModel_1.default.findByIdAndDelete(req.params.id, (err, pro) => {
                if (err)
                    console.log('Hubo un error al eliminar el producto con id ', req.params.id);
                console.log(`Producto con Id ${req.params.id} ELIMINADO`);
            });
            res.json({ "msj": "Eliminado" });
        });
    }
}
const productControllers = new ProductController();
exports.default = productControllers;
