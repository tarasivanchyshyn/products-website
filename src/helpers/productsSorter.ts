import { IProduct } from 'models/IProduct';
import { byTitle, byPrice, byRating, ascendOrder } from '@constants';
import { compareTitleAscend, compareTitleDescend } from './compareFunctions';
import { comparePriceAscend, comparePriceDescend } from './compareFunctions';
import { compareRatingAscend, compareRatingDescend } from './compareFunctions';

type CompareFunc = (a: IProduct, b: IProduct) => number;

const productsSorter = (products: IProduct[], sortOption: string[]) => {
  const [sortBy, order] = sortOption;
  let newProducts = [...products];

  const sorter = (ascendFunc: CompareFunc, descendFunc: CompareFunc) =>
    order === ascendOrder
      ? (newProducts = newProducts.sort(ascendFunc))
      : (newProducts = newProducts.sort(descendFunc));

  switch (sortBy) {
    case byTitle:
      sorter(compareTitleAscend, compareTitleDescend);
      break;
    case byPrice:
      sorter(comparePriceAscend, comparePriceDescend);
      break;
    case byRating:
      sorter(compareRatingAscend, compareRatingDescend);
      break;
  }

  return newProducts;
};

export default productsSorter;
