import Navbar from './Navbar';
import Slider from '../../features/slider';

export default function AppLayout({ children }) {
  return (
    <div>
      <Navbar />
      <header className="bg-white shadow">
        <Slider />
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
    </div>
  );
}
