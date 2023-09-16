import PropTypes from 'prop-types';

import { List, Button } from './feedbackOptions.module';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsKey = Object.keys(options);
  return (
    <List>
      {optionsKey.map(option => (
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
  options: PropTypes.objectOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
