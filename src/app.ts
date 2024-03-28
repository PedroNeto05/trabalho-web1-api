import express, { Application } from 'express';
import { postRoutes } from './routes/postRoutes';

export class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.routes();
    this.middlewares();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.app.use('/posts', postRoutes);
  }
}
