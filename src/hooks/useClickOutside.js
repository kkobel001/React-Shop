import { useEffect } from 'react';

export const useClickOutside = (modalRef, setClick) => {
  const listenClick = event => {
    if (!modalRef.current || modalRef.current.contains(event.targer)) {
      return;
    }
    setClick(false);
  };

  useEffect(() => {
    document.addEventListener('mousedown', listenClick);

    return () => {
      document.removeEventListener('mousedown', listenClick);
    };
  });
};
