import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import app from "../firebase/config";
import { toast } from "sonner";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../app/feture/useSlice";

export const useRegister = () => {
  const [data, setData] = useState(null);
  const [ispending, setIspending] = useState(false);
  const dispatch = useDispatch();

  const register = async (displayName, email, password) => {
    if (!email || !password || !displayName) {
      toast.error("Barcha maydonlarni toldiring");
      return;
    }

    try {
      setIspending(true);

      const auth = getAuth(app);
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);

      if (signInMethods.length > 0) {
        toast.error("Bu email allaqachon ro‘yxatdan o‘tgan");
        setIspending(false);
        return;
      }

      const req = await createUserWithEmailAndPassword(auth, email, password);

      await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: `https://api.dicebear.com/9.x/micah/svg?seed=${req.user.uid}`,
      });

      const user = req.user;
      dispatch(login(user));
      setData(user);
      toast.success(`Welcome, ${displayName}!`);
    } catch (error) {
      toast.error(error.message);
      console.log("Firebase Error:", error.message);
    } finally {
      setIspending(false);
    }
  };

  return { data, ispending, register };
};
