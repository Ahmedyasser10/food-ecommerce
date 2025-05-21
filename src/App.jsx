import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './ui/Home';
import Error from './ui/Error';
import Menu, { loader as menuLoader } from './features/menu/Menu';
import Cart from './features/cart/Cart';
import AppLayout from './ui/AppLayout';
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder';
import Order, { loader as orderLoader } from './features/order/Order';
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        errorElement: <Error />,
        action: createOrderAction,
      },

      {
        path: '/order/:orderId',
        loader: orderLoader,
        errorElement: <Error />,
        element: <Order />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
