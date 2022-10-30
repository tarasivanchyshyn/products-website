import { FormEvent } from 'react';

import Button from '@components/UI/Button/Button';
import { ReactComponent as ArrowDownSvg } from '@assets/arrow-down.svg';
import { productsOnPage } from '@constants';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { productsActions } from 'store/reducers/ProductsSlice';

import classes from './Footer.module.scss';

interface FooterProps {
  pages: number[];
  productsLeft: number;
}

const Footer = ({ pages, productsLeft }: FooterProps) => {
  const dispatch = useAppDispatch();
  const { currentPage, activePages, productsPerPage } = useAppSelector(
    (state) => state.productsReducer
  );
  const { setCurrentPage, setProductsPerPage, setActivePages } =
    productsActions;

  const lastPage = pages[pages.length - 1];
  const lastPageIndex = lastPage - 1;
  const lastActivePageIndex = activePages[1];

  const pageChangeHandler = (e: FormEvent<HTMLLIElement>) => {
    const targetPageIndex = +e.currentTarget.id - 1;
    dispatch(setCurrentPage(targetPageIndex));
    dispatch(setProductsPerPage(productsOnPage));
    dispatch(setActivePages([targetPageIndex]));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buttonHandler = () => {
    dispatch(setProductsPerPage(productsPerPage + productsOnPage));
    const activeCount = productsPerPage / productsOnPage;
    const lastActive = currentPage + activeCount;
    dispatch(setActivePages([currentPage, lastActive]));
  };

  const showMoreProductsBtn = currentPage !== lastPageIndex &&
    pages.length > 0 &&
    lastPageIndex !== lastActivePageIndex &&
    productsLeft !== 0 && (
      <Button
        icon={<ArrowDownSvg />}
        onClick={buttonHandler}
        className={classes.footer__button}
      >
        Show more products
      </Button>
    );

  const renderPageNumbers = pages.map((number) => (
    <li
      key={number}
      id={String(number)}
      onClick={pageChangeHandler}
      className={
        (number - 1 >= activePages[0] && number - 1 <= activePages[1]) ||
        number - 1 === currentPage
          ? classes.footer__pagesActive
          : ''
      }
    >
      {number}
    </li>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.footer__pages}>
        {pages.length > 0 && (
          <span className={classes.footer__pagesHeader}>Pages:</span>
        )}
        <ul className={classes.footer__pagesNumbers}>{renderPageNumbers}</ul>
      </div>
      {showMoreProductsBtn}
      <div className={classes.footer__stock}>
        <div className={classes.footer__stockNumber}>
          <span>{productsLeft}</span>
        </div>
        <span className={classes.footer__stockName}>Products</span>
      </div>
      <div className={classes.footer__break}></div>
    </div>
  );
};

export default Footer;
