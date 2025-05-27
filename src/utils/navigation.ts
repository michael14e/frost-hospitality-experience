import { NavigateFunction } from 'react-router-dom';

/**
 * Navigates to the specified path and scrolls to the top of the page
 */
export const navigateWithScroll = (navigate: NavigateFunction, path: string) => {
  navigate(path);
  window.scrollTo(0, 0);
}; 