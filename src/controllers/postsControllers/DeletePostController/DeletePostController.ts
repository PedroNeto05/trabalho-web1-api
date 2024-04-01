import { Request, Response } from 'express';
import { IDeletePostUseCase } from '../../../useCase/postsUseCase/DeletePostUseCase/IDeletePostUseCase';

export class DeletePostController {
  constructor(private readonly deletePostUseCase: IDeletePostUseCase) {}

  async handle(req: Request, res: Response) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({
        message: 'Id is required',
      });
    }

    try {
      await this.deletePostUseCase.execute(id);
      return res.status(200).json();
    } catch (error) {
      const err = error as Error;

      return res.status(400).json({
        message: err.message || 'Unexpected error.',
      });
    }
  }
}
