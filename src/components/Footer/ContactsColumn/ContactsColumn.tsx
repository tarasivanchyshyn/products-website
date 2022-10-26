import { Link } from 'react-router-dom';
import classes from './ContactsColumn.module.scss';

type ContactsColumnProps = {
  header: string;
  links: string[];
};

const ContactsColumn = ({ header, links }: ContactsColumnProps) => {
  const { contacts__column, contacts__header, contacts__contact } = classes;

  return (
    <div className={contacts__column}>
      <h2 className={contacts__header}>{header}</h2>
      <ul>
        {links.map((item) => (
          <li key={item} className={contacts__contact}>
            <Link to={'#'}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsColumn;
