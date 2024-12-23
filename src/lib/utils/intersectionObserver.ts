type IntersectionObserverOptions = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
};

export const createIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverOptions = {}
) => {
  const defaultOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  return new IntersectionObserver(callback, { ...defaultOptions, ...options });
}; 