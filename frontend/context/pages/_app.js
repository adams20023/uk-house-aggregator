// File: pages/_app.js

import { AppProvider } from '../context/AppContext'; // Import the context provider
import '../styles/globals.css'; // Import global styles

// Custom App component to include the context provider
function MyApp({ Component, pageProps }) {
  return (
    <AppProvider> {/* Wrap the application with AppProvider */}
      <Component {...pageProps} /> {/* Render the current page */}
    </AppProvider>
  );
}

export default MyApp;

