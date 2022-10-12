import { tagsItems } from 'mockedData';
import classes from './Tags.module.scss';

const { tags, tags__header, tags__list, tags__tag } = classes;

function Tags() {
  return (
    <div className={tags}>
      <h2 className={tags__header}>Product tags</h2>
      <ul className={tags__list}>
        {tagsItems.map((tag) => (
          <li key={tag} className={tags__tag}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tags;