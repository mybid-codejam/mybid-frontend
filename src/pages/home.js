import AppLayout from '../components/layout/AppLayout';
import { Counter } from '../features/counter/Counter';

export default function Home() {
  return (
    <AppLayout>
      <h2>Home</h2>
      <Counter />
    </AppLayout>
  );
}
