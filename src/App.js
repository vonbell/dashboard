import Dashboard from '../src/components/Dashboard/Dashboard'
import Reviews from '../src/components/Reviews/Reviews'
import AverageRating from '../src/components/AverageRating/AverageRating'
import SentimentAnalysis from '../src/components/SentimentAnalysis/SentimentAnalysis'
import WebsiteVisitors from '../src/components/WebsiteVisitors/WebsiteVisitors'

import './App.css';

function App() {
  return (
    <div className='App'>
      <Dashboard />
      <Reviews />
      <AverageRating />
      <SentimentAnalysis />
      <WebsiteVisitors />
    </div>
  );
}

export default App;
