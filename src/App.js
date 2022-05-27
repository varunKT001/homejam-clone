import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UpcomingShows from './components/UpcomingShows';

function App() {
  return (
    <main>
      <div className='intro'>
        <Navbar />
        <Hero />
      </div>
      <UpcomingShows />
    </main>
  );
}

export default App;
