import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Top = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location]); // Run this effect whenever the route changes

  return null;
};

export default Top;