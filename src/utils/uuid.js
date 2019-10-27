export const uuid = (() => {
  let id = 1;
  return () => {
    return ++id;
  };
})();
