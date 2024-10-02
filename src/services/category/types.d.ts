export interface AddCategory {
  categoryName: string;
  categoryIcon: string;
}
export type GetCategory = {
  _id: string;
  name: string;
  icon: string;
  slug: string;
}[];
