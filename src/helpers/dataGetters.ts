import { IProduct } from 'models/IProduct';

export const getAllCategories = (products?: IProduct[]) => {
  let array: string[] = [];
  products?.forEach((product) =>
    product.categories.forEach((el) => array.push(el))
  );
  const set = new Set(array);
  const result = Array.from(set);

  return result;
};

export const getAllFarms = (products?: IProduct[]) => {
  let array: string[] = [];
  products?.forEach((product) => array.push(product.farm));
  const set = new Set(array);
  const result = Array.from(set);

  return result;
};
