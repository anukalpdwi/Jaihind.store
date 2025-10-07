import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';

export default function Router() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    const originalPushState = window.history.pushState;
    window.history.pushState = function(...args) {
      originalPushState.apply(window.history, args);
      setCurrentPath(window.location.pathname);
    };

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.history.pushState = originalPushState;
    };
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.href.startsWith(window.location.origin)) {
        e.preventDefault();
        const url = new URL(link.href);
        window.history.pushState({}, '', url.pathname + url.search);
        setCurrentPath(url.pathname);
        window.scrollTo(0, 0);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  switch (currentPath) {
    case '/products':
      return <Products />;
    case '/gallery':
      return <Gallery />;
    case '/about':
      return <About />;
    case '/contact':
      return <Contact />;
    default:
      return <Home />;
  }
}
