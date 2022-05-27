export function useLockScreen() {
  const openScreen = () => {
    document.querySelector('html')?.classList.add('popup-open');
  };

  const closeScreen = () => {
    document.querySelector('html')?.classList.remove('popup-open');
  };

  return {
    openScreen,
    closeScreen,
  };
}
