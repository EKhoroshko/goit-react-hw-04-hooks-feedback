import { useState } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import css from './Feedback.module.css';

function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  const addFeedback = name => {
    switch (name) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total || 0;
  };

  const countPositiveFeedbackPercentage = () => {
    const persent = Math.floor((good * 100) / countTotalFeedback());
    return persent || 0;
  };

  const total = countTotalFeedback();
  const procent = countPositiveFeedbackPercentage();

  return (
    <div className={css.container}>
      <Section title="Тут должен быть ваш отзыв ">
        <FeedbackOptions options={options} onLeaveFeedback={addFeedback} />
      </Section>

      <Section title="Статистика">
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            procent={procent}
          />
        )}
      </Section>
    </div>
  );
}

export default Feedback;
