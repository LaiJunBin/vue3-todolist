export const useDebounce = (ms = 300) => {
  let timeout = null;
  return (fn) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(), ms);
  };
};
