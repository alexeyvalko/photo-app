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
  elementsArray: [Element | null, Element | null],
  callback: () => void,
) => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };
  const observerCallback = function (entries: IntersectionObserverEntry[]) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback();
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, options);

  elementsArray.forEach((element) => {
    if (element) {
      observer.observe(element);
    }
  });
};

export const downloadPhoto = (url: string, filename: string) => {
  const link = document.createElement('a');
  link.download = `${filename}.jpg`;
  link.href = url;
  link.click();
  link.remove();
};
