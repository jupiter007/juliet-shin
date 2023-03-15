export const handleScroll = (ref) => {
  if (ref) {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  }
};
