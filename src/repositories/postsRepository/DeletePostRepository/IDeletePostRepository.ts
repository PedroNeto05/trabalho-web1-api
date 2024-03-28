export interface IDeletePostRepository {
  delete(id: string): Promise<void>;
}
