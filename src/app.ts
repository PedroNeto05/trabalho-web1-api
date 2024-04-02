import express, { Application } from 'express';
import cors from 'cors';
import { postRoutes } from './routes/postRoutes';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.use('/posts', postRoutes);
  }
}

export default new App().app;
