import { useState } from 'react';

// Button Component: Handles each button's click functionality
const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

// StatisticLine Component: Displays individual statistic (e.g., good, bad, average)
const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text}: {value}
    </p>
  );
};

// Statistics Component: Aggregates statistics and uses StatisticLine for each
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total ? (good - bad) / total : 0;
  const positivePercentage = total ? (good / total) * 100 : 0;

  return (
    <div>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="total" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive feedback" value={positivePercentage + ' %'} />
    </div>
  );
};

const App = () => {
  // State to store the number of feedback responses for each type
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Functions to handle feedback button clicks
  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);

  // Checking if any feedback has been gathered
  const hasFeedback = good > 0 || neutral > 0 || bad > 0;

  return (
    <div>
      <h1>Unicafe Feedback</h1>
      
      {/* Feedback buttons using Button component */}
      <Button text="Good" handleClick={handleGood} />
      <Button text="Neutral" handleClick={handleNeutral} />
      <Button text="Bad" handleClick={handleBad} />
      
      {/* Conditional rendering: Show statistics only if feedback is given */}
      {hasFeedback ? (
        <Statistics good={good} neutral={neutral} bad={bad} />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
};

export default App;
