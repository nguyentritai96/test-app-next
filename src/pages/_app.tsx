// Libraries
import type { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux';

// Store
import { wrapper } from '@store';

// Styles
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore();

  return (
    <PersistGate persistor={store.persistor} loading={<div>Loading</div>}>
      <Component {...pageProps} />
    </PersistGate>
  );
}

export default wrapper.withRedux(MyApp);
