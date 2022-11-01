import 'antd/dist/antd.min.css';
import { Tabs } from 'antd';

import GreenInfoOval from '@components/UI/GreenInfoOval/GreenInfoOval';
import classes from './TabsSection.module.scss';

interface TabsProps {
  data: {
    description: string;
    cooking: string;
    reviews: { id: string; username: string; review: string }[];
    questions: { id: string; question: string; answear: string }[];
  };
}

const TabsSection = (props: TabsProps) => {
  const { description, cooking, reviews, questions } = props.data;

  const descriptionContent = (
    <div className={classes.info__tabDescriptionContent}>
      <div className={classes.info__descriptionOrigin}>
        <h4>Origins</h4>
        <p>{description}</p>
      </div>
      <div className={classes.info__descriptionCook}>
        <h4>How to cook</h4>
        <p>{cooking}</p>
      </div>
    </div>
  );

  const reviewsContent = (
    <div className={classes.info__tabReviewContent}>
      <ul>
        {reviews.map(({ id, username, review }) => (
          <li key={id}>
            <h4>{username}</h4>
            <p>{review}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  const questionsContent = (
    <div className={classes.info__tabQuestionsContent}>
      <ul>
        {questions.map(({ id, question, answear }) => (
          <li key={id}>
            <p>{question}</p>
            <p>{answear}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <Tabs
      className={classes.info__tabs}
      defaultActiveKey="1"
      items={[
        {
          label: `Description`,
          key: '1',
          children: descriptionContent
        },
        {
          label: (
            <div>
              Reviews <GreenInfoOval>{reviews.length}</GreenInfoOval>
            </div>
          ),
          key: '2',
          children: reviewsContent
        },
        {
          label: (
            <div>
              Questions <GreenInfoOval>{questions.length}</GreenInfoOval>
            </div>
          ),
          key: '3',
          children: questionsContent
        }
      ]}
    />
  );
};

export default TabsSection;
