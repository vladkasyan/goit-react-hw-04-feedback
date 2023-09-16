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
        setGood(good + 1);

        break;
      case 'neutral':
        setNeutral(neutral + 1);

        break;
      case 'bad':
        setBad(bad + 1);

        break;

      default:
        return;
    }
  };

  // onLeaveFeedback = ({ target: {name} }) => {
  //   this.setState(prevState => ({
  //     [name]: prevState[name] + 1,
  //   }));
  // }

  // countTotalFeedback = () => {
  //   return Object.values(this.state).reduce((total, cur) => total += cur)
  // }

  // countPositiveFeedbackPercentage = (total) => {
  //   const {good} = this.state

  //   if(total > 0)
  //     return Math.round((good / total) * 100);
  //     return 0

  // }

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
