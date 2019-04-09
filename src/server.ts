import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan'
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import indexRoutes from './routes/indexRoutes'
import productRoutes from './routes/pruductsRoutes';


class Server {
  app: express.Application;

  constructor(){
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    const MONGO_URI  = 'mongodb://localhost/productAPI'
    mongoose.set('useFindAndModify', true);
    mongoose.connect(MONGO_URI || process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useCreateIndex: true
    })
    .then(db => {
        console.log('BBDD conectada exitosamente');
    })
    .catch( err => {
      console.log('Ha ocurrido un error al conectar a la BBDD');
    });

    // Setting´s server
    this.app.set('port', process.env.PORT || 3000);

    this.app.use(morgan('dev'));
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: false}));
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(cors());
  }

  routes() {
    this.app.use('/api', indexRoutes);
    this.app.use('/api/product', productRoutes);
  }

  start() {
    const port = this.app.get('port');
    this.app.listen(port, () =>{
      console.log(' servidor corriendo por el puertto ', port);
    })
  }
}

const server = new Server()
server.start();
 