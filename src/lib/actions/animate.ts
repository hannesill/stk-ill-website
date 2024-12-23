import { createIntersectionObserver } from '$lib/utils/intersectionObserver';

type FadeInOptions = {
  delay?: number;
  duration?: number;
};

export function fadeIn(node: HTMLElement, options: FadeInOptions = {}) {
  const { delay = 0, duration = 600 } = options;
  
  node.style.opacity = '0';
  node.style.transform = 'translateY(20px)';
  node.style.transition = `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`;
  node.style.transitionDelay = `${delay}ms`;

  const observer = createIntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        node.style.opacity = '1';
        node.style.transform = 'translateY(0)';
        observer.unobserve(node);
      }
    });
  });

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    }
  };
} 