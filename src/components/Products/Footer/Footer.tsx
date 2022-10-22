import ReactPaginate from 'react-paginate';

import Button from '@components/UI/Button';
import { ReactComponent as ArrowDownSvg } from '@assets/arrow-down.svg';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { productsActions } from 'store/reducers/ProductsSlice';

import classes from './Footer.module.scss';

interface FooterProps {
  pageCount: number;
  addMoreProductsOnPage: () => void;
  productsLeft: number;
}

function Footer(props: FooterProps) {
  const { pageCount, addMoreProductsOnPage, productsLeft } = props;
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector(
    (state) => state.productsReducer.currentPage
  );

  const pageChangeHandler = ({ selected }: { selected: number }) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(productsActions.setCurrentPage(selected));
  };

  const buttonHandler = () => {
    dispatch(productsActions.setCurrentPage(0));
    addMoreProductsOnPage();
  };

  const showMoreProductsBtn = currentPage + 1 !== pageCount &&
    pageCount !== 1 &&
    productsLeft !== 0 && (
      <Button icon={<ArrowDownSvg />} onClick={buttonHandler}>
        Show more products
      </Button>
    );

  return (
    <div className={classes.footer}>
      <div className={classes.footer__pages}>
        <span className={classes.footer__pagesHeader}>Pages:</span>
        <ReactPaginate
          previousLabel={false}
          nextLabel={false}
          pageCount={pageCount!}
          onPageChange={pageChangeHandler}
          containerClassName={classes.footer__pagesPages}
          activeClassName={classes.footer__pagesActive}
          forcePage={currentPage}
        />
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
