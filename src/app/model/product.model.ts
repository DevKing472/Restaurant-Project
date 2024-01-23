export interface Product {
  id: number;
  categoryId: number;
  name: string;
  image: string;
  total_amount: number;
  description: string;
  tags: string[];
  create_at: Date | null;
  delete_at: Date | null;
}
