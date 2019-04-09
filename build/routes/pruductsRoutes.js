"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controlles_1 = __importDefault(require("./../controlles/products.controlles"));
class ProductRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', products_controlles_1.default.getProducts);
        this.router.get('/:id', products_controlles_1.default.getProduct);
        this.router.post('/', products_controlles_1.default.createProduct);
        this.router.patch('/:id', products_controlles_1.default.updataProduct);
        this.router.delete('/:id', products_controlles_1.default.deleteProduct);
    }
}
const productRoutes = new ProductRoutes();
exports.default = productRoutes.router;
