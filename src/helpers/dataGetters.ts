import { IProduct } from 'models/IProduct';

export interface Category {
  name: string;
  amount: number;
}

export const getCategoriesData = (products?: IProduct[]) => {
  const array: string[] = [];
  const categories: Category[] = [];

  products?.forEach((product) =>
    product.categories.forEach((el) => array.push(el))
  );

  const uniqueCategories = Array.from(new Set(array));
  uniqueCategories.forEach((el) => categories.push({ name: el, amount: 0 }));

  uniqueCategories.forEach((category) => {
    const categoryAmount = array.filter((el) => el === category).length;
    const categoryIndex = categories.findIndex((el) => el.name === category);
    categories[categoryIndex].amount = categoryAmount;
  });

  return categories;
};

export const getAllBrands = (products?: IProduct[]) => {
  let array: string[] = [];
  products?.forEach((product) => array.push(product.farm));
  const set = new Set(array);
  const result = Array.from(set);

  return result;
};
