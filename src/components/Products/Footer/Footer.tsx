import { FormEvent } from 'react';

import Button from '@components/UI/Button';
import { ReactComponent as ArrowDownSvg } from '@assets/arrow-down.svg';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { productsActions } from 'store/reducers/ProductsSlice';
import { productsOnPage } from '@constants';

import classes from './Footer.module.scss';

interface FooterProps {
  pages: number[];
  productsLeft: number;
}

function Footer(props: FooterProps) {
  const { pages, productsLeft } = props;

  const dispatch = useAppDispatch();
  const { currentPage, activePages, productsPerPage } = useAppSelector(
    (state) => state.productsReducer
  );

  const lastPage = pages[pages.length - 1];
  const lastPageIndex = lastPage - 1;
  const lastActivePageIndex = activePages[1];

  const pageChangeHandler = (e: FormEvent<HTMLLIElement>) => {
    const targetPageIndex = +e.currentTarget.id - 1;
    dispatch(productsActions.setCurrentPage(targetPageIndex));
    dispatch(productsActions.setProductsPerPage(productsOnPage));
    dispatch(productsActions.setActivePages([targetPageIndex]));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const buttonHandler = () => {
    dispatch(
      productsActions.setProductsPerPage(productsPerPage + productsOnPage)
    );
    const activeCount = productsPerPage / productsOnPage;
    const lastActive = currentPage + activeCount;
    dispatch(productsActions.setActivePages([currentPage, lastActive]));
  };

  const showMoreProductsBtn = currentPage !== lastPageIndex &&
    pages.length &&
    lastPageIndex !== lastActivePageIndex &&
    productsLeft !== 0 && (
      <Button icon={<ArrowDownSvg />} onClick={buttonHandler}>
        Show more products
      </Button>
    );

  console.log(activePages);

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
        <span className={classes.footer__pagesHeader}>Pages:</span>
        <ul className={classes.footer__pagesNumbers}>{renderPageNumbers}</ul>
      </div>
      {showMoreProductsBtn}
      <div className={classes.footer__stock}>
        <div className={classes.footer__stockNumber}>
          <span>{productsLeft}</span>
        </div>
        <span className={classes.footer__stockName}>Products</span>
      </div>
    </div>
  );
}

export default Footer;
