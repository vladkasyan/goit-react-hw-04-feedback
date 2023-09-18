import PropTypes from 'prop-types';

import { List, Button } from './feedbackOptions.module';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  const optionsS = ['good', 'neutral', 'bad'];
  return (
    <List>
      {optionsS.map(option => (
        <li key={option}>
          <Button
            name={option}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </Button>
        </li>
      ))}
    </List>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
