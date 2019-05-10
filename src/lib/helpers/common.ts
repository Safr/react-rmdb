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

export function debounce(fn, interval: number) {
  let timer;
  return function debounced() {
      clearTimeout(timer);
      let args = arguments;
      let that = this;
      timer = setTimeout(function callOriginalFn() {
           fn.apply(that, args);
      }, interval);
  };
}

export const searchByValue = (array: any[], string: string, searchField: string) => {
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

// Convert time to hours and minutes
export const calcTime = (time: number) => {
  const hours = Math.floor(time / 60);
  const mins = time % 60;
  return `${hours}h ${mins}m`;
}
// Convert a number to money formatting
export const convertMoney = (money: number) => {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  });
  return formatter.format(money);
};

export const getQueryStrings = (searchURL: string) => {
  const query = new URLSearchParams(searchURL);
  const searchTerm = query.get('query');
  return searchTerm;
}

export const getObjectIds = obj => Object.keys(obj).map(key => obj[key]);

export const removeSpacesFromString = (title: string) => title.replace(/\W+/g, '-').toLowerCase()