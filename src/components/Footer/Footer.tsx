import ContactsColumn from './ContactsColumn/ContactsColumn';
import Tags from './Tags/Tags';
import { footerGetInTouchLinks, footerConnectionsLinks } from '@constants';
import { footerEarningsLinks, footerAccountLinks } from '@constants';

import classes from './Footer.module.scss';

const { footer, contacts, copyright } = classes;

function Footer() {
  return (
    <footer className={footer}>
      <div className={contacts}>
        <ContactsColumn header={'Get in touch'} links={footerGetInTouchLinks} />
        <ContactsColumn header={'Connections'} links={footerConnectionsLinks} />
        <ContactsColumn header={'Earnings'} links={footerEarningsLinks} />
        <ContactsColumn header={'Account'} links={footerAccountLinks} />
      </div>
      <Tags />
      <div className={copyright}>Copyright &copy; 2020 petrbilek.com</div>
    </footer>
  );
}

export default Footer;
