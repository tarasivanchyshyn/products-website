import { IProduct } from 'models/IProduct';
import { byTitle, byPrice, byRating, ascendOrder } from '@constants';
import { compareTitleAscend, compareTitleDescend } from './compareFunctions';
import { comparePriceAscend, comparePriceDescend } from './compareFunctions';
import { compareRatingAscend, compareRatingDescend } from './compareFunctions';

const productsSorter = (products: IProduct[], sortOption: string[]) => {
  const [sortBy, order] = sortOption;
  let newProducts = [...products];

  switch (sortBy) {
    case byTitle:
      order === ascendOrder
        ? (newProducts = newProducts.sort(compareTitleAscend))
        : (newProducts = newProducts.sort(compareTitleDescend));
      break;
    case byPrice:
      order === ascendOrder
        ? (newProducts = newProducts.sort(comparePriceAscend))
        : (newProducts = newProducts.sort(comparePriceDescend));
      break;
    case byRating:
      order === ascendOrder
        ? (newProducts = newProducts.sort(compareRatingAscend))
        : (newProducts = newProducts.sort(compareRatingDescend));
      break;
  }

  return newProducts;
};

export default productsSorter;
