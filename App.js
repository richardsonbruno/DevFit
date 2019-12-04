import React from 'react';

// Redux
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

//Store
import {store, persitor} from './src/store';

//PAGES
import MainStack from './src/navigation/MainStack';

export default function DevFit() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persitor}>
        <MainStack />
      </PersistGate>
    </Provider>
  );
}
