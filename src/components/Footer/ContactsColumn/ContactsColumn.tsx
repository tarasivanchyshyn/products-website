import { Link } from 'react-router-dom';
import classes from './ContactsColumn.module.scss';

const { contacts__column, contacts__header, contacts__contact } = classes;

type ContactsColumnProps = {
  header: string;
  links: string[];
};

function ContactsColumn({ header, links }: ContactsColumnProps) {
  return (
    <div className={contacts__column}>
      <h2 className={contacts__header}>{header}</h2>
      {links.map((item) => (
        <Link to={'#'} className={contacts__contact} key={item}>
          {item}
        </Link>
      ))}
    </div>
  );
}

export default ContactsColumn;
