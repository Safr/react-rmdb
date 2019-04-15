export const throttle = (fn, interval) => {
  let lastTime;
  return function throttled() {
      let timeSinceLastExecution = Date.now() - lastTime;
      if(!lastTime || (timeSinceLastExecution >= interval)) {
          fn.apply(this, arguments);
          lastTime = Date.now();
      }
  };
}

export const searchByValue = (array, string, searchField) => {
  if (string) {
    if (!searchField) {
      return array.filter(o =>
        Object.keys(o).some(k =>
          String(o[k])
            .toLowerCase()
            .includes(string.toLowerCase()),
        ),
      );
    }

    if (searchField) {
      return array.filter(o =>
        o[searchField].toLowerCase().includes(string.toLowerCase()),
      );
    }
  }
  return array;
};


export const handleErrors = (responseData: string | object): boolean => typeof responseData === 'string';