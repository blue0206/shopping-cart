import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "./styles/index.css";
import { Provider } from 'react-redux';
import { store } from './app/store.ts';
import { RouterProvider } from 'react-router-dom';
import router from './routes.tsx';
import { Analytics } from "@vercel/analytics/react"

/**
 * @description Main entry point of the application.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
    <Analytics />
  </StrictMode>,
)
