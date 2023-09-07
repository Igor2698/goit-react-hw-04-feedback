import { useState } from 'react';
import Notification from 'components/Notification';
import Section from 'components/Section';
import Feedback from 'components/Feedback';
import Statistic from 'components/Statistic';
export const App = () => {
  const [states, setStates] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countFeedbacks = button =>
    setStates(prevStates => ({
      ...prevStates,
      [button]: prevStates[button] + 1,
    }));

  const countTotalFeedback = () => {
    return states.good + states.neutral + states.bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback !== 0
      ? Math.ceil((states.good / totalFeedback) * 100) + '%'
      : 0;
  };

  const values = Object.keys(states);
  const isfeedBack = Object.values(states).every(value => value === 0);
  return (
    <>
      <Section title="Please leave feedback">
        <Feedback values={values} countFeedbacks={countFeedbacks} />
      </Section>

      {!isfeedBack ? (
        <Section title="Statictic">
          <Statistic
            state={states}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedback={countPositiveFeedbackPercentage}
          />
        </Section>
      ) : (
        <Section>
          <Notification message="There is no feedback" />
        </Section>
      )}
    </>
  );
};
