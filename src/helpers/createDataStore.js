// @flow

type DataStore<State> = {
  getState: () => State;
  setState: ($Shape<State>) => void;
};

function createDataStore<State: Object>(initialState: State, onChange: () => void) {
  let state = {...initialState};
  let result:DataStore<*> = {
    getState: () => {
      return state;
    },
    setState: (changes: $Shape<State>) => {
      let newState = {...initialState, ...changes};
      state = newState;
      onChange();
    },
  };
  return result;
}

export default createDataStore;
