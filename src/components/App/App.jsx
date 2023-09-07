import React, { Component } from 'react';
import Notification from 'components/Notification';
import Section from 'components/Section';
import Feedback from 'components/Feedback';
import Statistic from 'components/Statistic';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedbacks = button =>
    this.setState(prevState => {
    
      return { [button]: prevState[button] + 1 };
    });

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback !== 0
      ? Math.ceil((good / totalFeedback) * 100) + '%'
      : 0;
  };

  render() {
    const values = Object.keys(this.state);
    const isfeedBack = Object.values(this.state).every(value => value === 0);
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback values={values} countFeedbacks={this.countFeedbacks} />
        </Section>

        {!isfeedBack ? (
          <Section title="Statictic">
            <Statistic
              state={this.state}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedback={this.countPositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Section>
            <Notification message="There is no feedback" />
          </Section>
        )}
      </>
    );
  }
}
