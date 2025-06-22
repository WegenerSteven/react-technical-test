import Header from './components/Header';
import JobListingPage from './components/JobList';

export default function App() {
  return (
    <div className='bg-cyan-100 min-h-screen'>
      <Header />
      <JobListingPage />
    </div>
  );
}