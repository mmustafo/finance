import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

import { auth } from "./firebase/config";
import { login, isAuthReady } from "./app/feture/useSlice";

import MainLayout from "./layout/MainLayout";
import {
  Overview,
  Budgets,
  Posts,
  RecurringBills,
  Transactions,
  Login,
  Register,
} from "./pages";

import { ProtectedRoutes } from "./components";

function App() {
  const dispatch = useDispatch();
  const { user, authReady } = useSelector((state) => state.user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser?.displayName && firebaseUser?.photoURL) {
        dispatch(login(firebaseUser));
      }
      dispatch(isAuthReady());
    });

    return () => unsubscribe();
  }, [dispatch]);

  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        { index: true, element: <Overview /> },
        { path: "budgets", element: <Budgets /> },
        { path: "posts", element: <Posts /> },
        { path: "recurringBills", element: <RecurringBills /> },
        { path: "transactions", element: <Transactions /> },
      ],
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" replace /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" replace /> : <Register />,
    },
  ]);

  return authReady ? <RouterProvider router={routes} /> : null;
}

export default App;
