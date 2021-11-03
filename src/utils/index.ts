export const getSafely = (fn, defaultValue = '') => {
  try {
    return fn();
  } catch (e) {
    return defaultValue;
  }
};

export const random = (number) => {
  try {
    let text = '';
    const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < number; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
  } catch (error) {
    //
  }
};
