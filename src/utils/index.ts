import type { Photo } from '@/types/photos';

export const filterPhotosByRatio = (photos: Photo[], totalColumns: number) => {
  const obj = {} as {
    [key: string]: Photo[];
  };
  const ratioArray = new Array(totalColumns).fill(0);
  while (totalColumns) {
    obj[`column_${totalColumns}`] = [];
    totalColumns--;
  }

  if (photos.length > 0) {
    photos.forEach((photo) => {
      const ratio = photo.height / photo.width;
      const min = Math.min(...ratioArray);
      const index = ratioArray.indexOf(min);
      if (index !== -1) {
        ratioArray[index] += ratio;
        obj[`column_${index + 1}`].push(photo);
      } else {
        obj[`column_${totalColumns}`].push(photo);
      }
    });
  }

  return obj;
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

export const deleteFalsyKeys = <T extends Record<string, unknown>>(
  object: T,
) => {
  const asArray = Object.entries(object);
  const filtered = asArray.filter(([, value]) => !!value);
  const filteredObject = Object.fromEntries(filtered);
  return filteredObject;
};

export const downloadPhoto = async (url: string, filename: string) => {
  const link = document.createElement('a');
  const response = await fetch(url);
  const blob = await response.blob();
  const blobURL = URL.createObjectURL(blob);
  link.download = `${filename}.jpg`;
  link.href = blobURL;
  link.target = '_blank';
  console.log(link);
  link.click();
  URL.revokeObjectURL(blobURL);
  link.remove();
};

export const encodeQuery = (query: string) => {
  const content = query.replace(/%/g, '~~pct~~');
  const encodedQuery = encodeURIComponent(content);
  return encodedQuery;
};

export const decodeQuery = (query: string) => {
  const decodedQuery = decodeURIComponent(query);
  const content = decodedQuery.replace(/~~pct~~/g, '%');
  return content;
};

export const getNavigatorLanguage = () => {
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0];
  } else {
    return navigator.language || 'en-GB';
  }
};

export const hashFromString = (str: string) =>
  str
    .split('')
    .reduce((prev, curr) => (Math.imul(31, prev) + curr.charCodeAt(0)) | 0, 0);
