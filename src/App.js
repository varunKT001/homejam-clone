import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UpcomingShows from './components/UpcomingShows';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <main>
      <div className='intro'>
        <Navbar />
        <Hero />
        <Sidebar />
      </div>
      <UpcomingShows />
    </main>
  );
}

export default App;
