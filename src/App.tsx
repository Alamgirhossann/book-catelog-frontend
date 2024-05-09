import ScrollToTop from './components/homeUI/ScrollToTop';
import { Toaster } from './components/ui/Toaster';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <div>
      <ScrollToTop />
      <Toaster />
      <MainLayout />
    </div>
  );
}

export default App;
