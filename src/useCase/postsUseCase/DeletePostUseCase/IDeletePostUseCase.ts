export interface IDeletePostUseCase {
  execute(id: string): Promise<void>;
}
