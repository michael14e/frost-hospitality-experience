import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useDocumentTitle(title?: string) {
  const location = useLocation();

  useEffect(() => {
    document.title = title || getTitleFromPath(location.pathname);
  }, [title, location.pathname]);
}

function getTitleFromPath(pathname: string): string {
  switch(pathname) {
    case '/': return 'Home - Frost Hospitality';
    case '/about': return 'About Us - Frost Hospitality';
    case '/experiences': return 'Experiences - Frost Hospitality';
    case '/contact': return 'Contact Us - Frost Hospitality';
    case '/careers': return 'Careers - Frost Hospitality';
    default: return 'Frost Hospitality';
  }
} 