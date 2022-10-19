import { IProduct } from 'models/IProduct';

export function compareTitleAscend(a: IProduct, b: IProduct) {
  const titleA = a.title.toLowerCase();
  const titleB = b.title.toLowerCase();

  if (titleA > titleB) {
    return 1;
  }
  if (titleA < titleB) {
    return -1;
  }
  return 0;
}

export function compareTitleDescend(a: IProduct, b: IProduct) {
  const titleA = a.title.toLowerCase();
  const titleB = b.title.toLowerCase();

  if (titleA < titleB) {
    return 1;
  }
  if (titleA > titleB) {
    return -1;
  }
  return 0;
}

export function comparePriceAscend(a: IProduct, b: IProduct) {
  const priceA = a.price;
  const priceB = b.price;

  if (priceA > priceB) {
    return 1;
  }
  if (priceA < priceB) {
    return -1;
  }
  return 0;
}

export function comparePriceDescend(a: IProduct, b: IProduct) {
  const priceA = a.price;
  const priceB = b.price;

  if (priceA < priceB) {
    return 1;
  }
  if (priceA > priceB) {
    return -1;
  }
  return 0;
}

export function compareRatingAscend(a: IProduct, b: IProduct) {
  const ratingA = a.rating;
  const ratingB = b.rating;

  if (ratingA > ratingB) {
    return 1;
  }
  if (ratingA < ratingB) {
    return -1;
  }
  return 0;
}

export function compareRatingDescend(a: IProduct, b: IProduct) {
  const ratingA = a.rating;
  const ratingB = b.rating;

  if (ratingA < ratingB) {
    return 1;
  }
  if (ratingA > ratingB) {
    return -1;
  }
  return 0;
}
