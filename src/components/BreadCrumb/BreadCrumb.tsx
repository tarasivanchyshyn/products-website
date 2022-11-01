import { useLocation, Link } from 'react-router-dom';
import { Breadcrumb } from 'antd';

import classes from './BreadCrumb.module.scss';

const BreadCrumb = () => {
  const location = useLocation();
  const { pathname } = location;
  const pathnames = pathname.split('/').filter((item) => item);
  const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  return (
    <div>
      <Breadcrumb className={classes.breadCrumb}>
        {pathnames.length > 0 ? (
          <Breadcrumb.Item>
            <Link to="/">Home</Link>
          </Breadcrumb.Item>
        ) : null}
        {pathnames.map((name, index) => {
          name = name === 'products' ? 'All products' : name;
          const route = `/${pathnames.slice(0, index + 1).join('/')}`;
          return (
            <Breadcrumb.Item key={name}>
              <Link to={`${route}`}>{capitalize(name)}</Link>
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  );
};

export default BreadCrumb;
