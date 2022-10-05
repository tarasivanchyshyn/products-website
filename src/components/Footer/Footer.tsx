import { tagsItems } from '@constants';
import classes from './Footer.module.scss';

const { footer, contacts, contacts__column, contacts__header } = classes;
const { contacts__contact, tags, tags__header, tags__list } = classes;
const { tags__tag, copyright } = classes;

function Footer() {
  return (
    <footer className={footer}>
      <div className={contacts}>
        <div className={contacts__column}>
          <h2 className={contacts__header}>Get in touch</h2>
          <h6 className={contacts__contact}>About Us</h6>
          <h6 className={contacts__contact}>Careers</h6>
          <h6 className={contacts__contact}>Press Releases</h6>
          <h6 className={contacts__contact}>Blog</h6>
        </div>
        <div className={contacts__column}>
          <h2 className={contacts__header}>Connections</h2>
          <h6 className={contacts__contact}>Facebook</h6>
          <h6 className={contacts__contact}>Twitter</h6>
          <h6 className={contacts__contact}>Instagram</h6>
          <h6 className={contacts__contact}>Youtube</h6>
          <h6 className={contacts__contact}>Linkedin</h6>
        </div>
        <div className={contacts__column}>
          <h2 className={contacts__header}>Earnings</h2>
          <h6 className={contacts__contact}>Become an Affiliate</h6>
          <h6 className={contacts__contact}>Advertise your product</h6>
          <h6 className={contacts__contact}>Sell on market</h6>
        </div>
        <div className={contacts__column}>
          <h2 className={contacts__header}>Account</h2>
          <h6 className={contacts__contact}>Your account</h6>
          <h6 className={contacts__contact}>Returns Centre</h6>
          <h6 className={contacts__contact}>100% purchase protection</h6>
          <h6 className={contacts__contact}>Chat with us</h6>
          <h6 className={contacts__contact}>Help</h6>
        </div>
      </div>
      <div className={tags}>
        <h2 className={tags__header}>Product tags</h2>
        <div className={tags__list}>
          {tagsItems.map((tag) => (
            <span key={tag} className={tags__tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className={copyright}>Copyright &copy; 2020 petrbilek.com</div>
    </footer>
  );
}

export default Footer;
