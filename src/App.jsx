import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import {
  Budgets,
  Login,
  Overview,
  Posts,
  RecurringBills,
  Register,
  Transactions,
} from "./pages";
import { ProtectedRoutes } from "./components";

function App() {
  const user = true
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />,
        </ProtectedRoutes>
      ),
      children: [
        {
          index: true,
          element: <Overview />,
        },
        {
          path: "/budgets",
          element: <Budgets />,
        },
        {
          path: "/posts",
          element: <Posts />,
        },
        {
          path: "/recurringBils",
          element: <RecurringBills />,
        },
        {
          path: "/transactions",
          element: <Transactions />,
        },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
