import 'tailwindcss/tailwind.css';
import './../style/main.scss';
import { Provider } from './../context/root';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Toaster position="top-center" />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
