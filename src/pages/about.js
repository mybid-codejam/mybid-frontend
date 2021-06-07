import AppLayout from '../components/layout/AppLayout';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function About() {
  useDocumentTitle('About');

  return (
    <AppLayout>
      <h2>About</h2>
    </AppLayout>
  );
}
