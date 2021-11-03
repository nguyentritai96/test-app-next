// Libraries
import type { AppProps } from 'next/app';

// Store
import { wrapper } from 'src/store';

// Styles
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
