import Navbar from './Navbar';
import Footer from './Footer';

export default function AppLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="bg-base">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
