import { useState } from 'react';

export const usePrevious = (state: any) => {
  let [tuple, setTuple] = useState([null, state]); // [ prev, current ]

  if (tuple[1] !== state) {
    setTuple([tuple[1], state]);
  }
  return tuple[0];
};
