import { Sections } from './section/section';
import { FeedbackOptions } from './feedbackOptions/feedbackOptions';
import { Statistics } from './statistics/statistics';
import { Notifications } from './notification/notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = event => {
    switch (event) {
      case 'good':
        setGood(prevState => prevState + 1);

        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);

        break;
      case 'bad':
        setBad(prevState => prevState + 1);

        break;

      default:
        return;
    }
  };

  const total = good + neutral + bad;

  const positivePercentage = Math.round((good / total) * 100);

  return (
    <>
      <Sections title="Please leave feedback">
        <FeedbackOptions
          options={{ good, neutral, bad }}
          onLeaveFeedback={handleClick}
        />
      </Sections>
      <Sections title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notifications message="There is no feedback" />
        )}
      </Sections>
    </>
  );
};
