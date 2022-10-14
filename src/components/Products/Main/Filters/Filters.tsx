import { ReactComponent as StarSmallGold } from '@assets/star-small-gold.svg';
import { ReactComponent as StarSmallWhite } from '@assets/star-small-white.svg';
import { IProduct } from 'models/IProduct';
import { FC } from 'react';

import classes from './Filters.module.scss';

interface FilterProps {
  products?: IProduct[];
}

const Filters: FC<FilterProps> = () => {
  return (
    <aside className={classes.filters}>
      <section className={classes.categories}>
        <h3 className={classes.categories__header}>Categories</h3>
        <ul className={classes.categories__list}>
          <li className={classes.categories__item}>
            <span className={classes.categories__itemName}>Category name</span>
            <span className={classes.categories__itemNumber}>320</span>
          </li>
          <li className={classes.categories__item}>
            <span className={classes.categories__itemName}>Category name</span>
            <span className={classes.categories__itemNumber}>320</span>
          </li>
          <li className={classes.categories__item}>
            <span className={classes.categories__itemName}>Category name</span>
            <span className={classes.categories__itemNumber}>320</span>
          </li>
          <li className={classes.categories__item}>
            <span className={classes.categories__itemName}>Category name</span>
            <span className={classes.categories__itemNumber}>320</span>
          </li>
        </ul>
      </section>
      <section className={classes.brands}>
        <h3 className={classes.brands__header}>Brands</h3>
        <ul className={classes.brands__list}>
          <li className={classes.brands__item}>
            <input type="checkbox" className={classes.brands__itemCheckbox} />
            <span className={classes.brands__itemName}>
              Filter by brand item
            </span>
          </li>
          <li className={classes.brands__item}>
            <input type="checkbox" className={classes.brands__itemCheckbox} />
            <span className={classes.brands__itemName}>
              Filter by brand item
            </span>
          </li>
          <li className={classes.brands__item}>
            <input
              type="checkbox"
              value={'123'}
              className={classes.brands__itemCheckbox}
            />
            <span className={classes.brands__itemName}>
              Filter by brand item
            </span>
          </li>
          <li className={classes.brands__item}>
            <input type="checkbox" className={classes.brands__itemCheckbox} />
            <span className={classes.brands__itemName}>
              Filter by brand item
            </span>
          </li>
          <li className={classes.brands__item}>
            <input type="checkbox" className={classes.brands__itemCheckbox} />
            <span className={classes.brands__itemName}>
              Filter by brand item
            </span>
          </li>
        </ul>
      </section>
      <section className={classes.rating}>
        <h3 className={classes.rating__header}>Rating</h3>
        <ul className={classes.rating__list}>
          <li className={classes.rating__item}>
            <input type="checkbox" className={classes.rating__itemCheckbox} />
            <ul className={classes.rating__itemStars}>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallGold />
              </li>
            </ul>
          </li>
          <li className={classes.rating__item}>
            <input type="checkbox" className={classes.rating__itemCheckbox} />
            <ul className={classes.rating__itemStars}>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallWhite />
              </li>
            </ul>
          </li>
          <li className={classes.rating__item}>
            <input type="checkbox" className={classes.rating__itemCheckbox} />
            <ul className={classes.rating__itemStars}>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallWhite />
              </li>
              <li>
                <StarSmallWhite />
              </li>
            </ul>
          </li>
          <li className={classes.rating__item}>
            <input type="checkbox" className={classes.rating__itemCheckbox} />
            <ul className={classes.rating__itemStars}>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallWhite />
              </li>
              <li>
                <StarSmallWhite />
              </li>
              <li>
                <StarSmallWhite />
              </li>
            </ul>
          </li>
          <li className={classes.rating__item}>
            <input type="checkbox" className={classes.rating__itemCheckbox} />
            <ul className={classes.rating__itemStars}>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallWhite />
              </li>
              <li>
                <StarSmallWhite />
              </li>
              <li>
                <StarSmallWhite />
              </li>
              <li>
                <StarSmallWhite />
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default Filters;
