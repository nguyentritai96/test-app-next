const KEY = 'TEST';

export const actionTypes = {
  ADD_NEW_RD: `__${KEY}__ADD_NEW`,
  ADD_NEW_MW: `__MW__${KEY}__ADD_NEW`,
};

export function addNewCount(payload) {
  return {
    type: actionTypes.ADD_NEW_MW,
    payload,
  };
}
