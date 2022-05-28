import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UpcomingShows from './components/UpcomingShows';
import Sidebar from './components/Sidebar';
import ReviewsContainer from './components/ReviewsContainer';

function App() {
  return (
    <main>
      <div className='intro'>
        <Navbar />
        <Hero />
        <Sidebar />
      </div>
      <UpcomingShows />
      <ReviewsContainer />
    </main>
  );
}

export default App;
