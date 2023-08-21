import React, { useEffect, useState } from 'react';

import { getContacts, getPolls } from './fireBaseCalls';

type Chart = {
  [key: string]: Object;
};

export type Charts = {
  [key: string]: Chart;
};

function useDataListener(CollectionName: string) {
  const [currentData, setCurrentData] = useState<Charts>();

  useEffect(() => {
    if (CollectionName === 'contacts') {
      const unsubscribe = getContacts(CollectionName, setCurrentData);
      return unsubscribe;
    }
    const unsubscribe = getPolls(CollectionName, setCurrentData);
    return unsubscribe;
  }, [CollectionName]);

  return currentData;
}

export { useDataListener };
