import css from './Statistic.module.css';
import PropTypes from 'prop-types';

const Statistic = ({
  state: { good, neutral, bad },
  countTotalFeedback,
  countPositiveFeedback,
}) => {
  return (
    <div className={css.containerStatist}>
      <p className={css.statText}>
        Good:
        <span className={css.valueOfStat}>{good}</span>
      </p>
      <p className={css.statText}>
        Neutral: <span className={css.valueOfStat}>{neutral}</span>
      </p>
      <p className={css.statText}>
        Bad: <span className={css.valueOfStat}>{bad}</span>
      </p>
      <p className={css.statText}>
        Total: <span className={css.valueOfStat}>{countTotalFeedback()}</span>
      </p>
      <p className={css.statText}>
        Positive feedback:
        <span className={css.valueOfStat}>{countPositiveFeedback()}</span>
      </p>
    </div>
  );
};

export default Statistic;

Statistic.propTypes = {
  good: PropTypes.string,
  neutral: PropTypes.string,
  bad: PropTypes.string,
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedback: PropTypes.func.isRequired,
};
