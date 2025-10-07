import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Router from './Router';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Router />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
