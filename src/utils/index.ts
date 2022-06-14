import type { PhotoBasic } from '@/types/photos';

const columnsCounter = (columns: number) => {
  let counter = 0;
  return () => {
    if (counter !== columns) {
      counter++;
      return counter;
    } else {
      counter = 1;
      return counter;
    }
  };
};

export const filterPhotosByColumn = (
  photos: PhotoBasic[],
  totalColumns: number,
  column: number,
) => {
  const count = columnsCounter(totalColumns);
  return photos.filter(() => count() === column);
};

export const createObserver = (
  observedElement: Element | null,
  callback: () => void,
) => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2,
  };
  const observerCallback = function (entries: IntersectionObserverEntry[]) {
    console.log(entries[0].intersectionRatio);
    if (entries[0].isIntersecting) {
      callback();
    }
  };

  const observer = new IntersectionObserver(observerCallback, options);
  const element = observedElement;

  if (element) {
    observer.observe(element);
  }
};
