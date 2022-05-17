export const getCurrentScreenSize = (clientWidth) => {
  if (clientWidth <= 640) {
    return 'vertical';
  }

  return 'horizontal';
};