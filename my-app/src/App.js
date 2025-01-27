import { useState } from 'react';

// Statistics component will display the feedback statistics
const Statistics = ({ good, neutral, bad }) => {
  // Calculate total feedback
  const total = good + neutral + bad;
  
  // Calculate the average score
  const average = (good - bad) / total;
  
  // Calculate the percentage of positive feedback
  const positivePercentage = (good / total) * 100;

  // If no feedback has been collected, we can return a message
  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <div>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Average: {average}</p>
      <p>Positive: {positivePercentage} %</p>
    </div>
  );
};

const App = () => {
  // State to track feedback count for good, neutral, and bad
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // Handlers to update the state
  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <div>
      <h1>Unicafe Feedback</h1>
      <button onClick={handleGoodClick}>Good</button>
      <button onClick={handleNeutralClick}>Neutral</button>
      <button onClick={handleBadClick}>Bad</button>

      <h2>Statistics</h2>
      {/* Pass state data as props to Statistics component */}
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
