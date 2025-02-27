import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Shop, Cart, ErrorDisplay, NotFound } from './components';

/**
 * @description - Router for the application.
 * @returns {ReactRouter} - The router.
 */
const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/shop',
        element: <Shop />
    },
    {
        path: '/cart',
        element: <Cart />
    },
    {
        path: "/error",
        element: <ErrorDisplay />
    },
    {
        path: "*",
        element: <NotFound />
    }
]);

export default router;