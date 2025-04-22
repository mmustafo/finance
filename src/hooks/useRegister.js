// useRegister.js
import { getAuth, createUserWithEmailAndPassword, updateProfile, fetchSignInMethodsForEmail } from "firebase/auth";
import app from "../firebase/config"; // Import the initialized app
import { toast } from "sonner";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../app/feture/useSlice"; // Import Redux action

export const useRegister = () => {
  const [data, setData] = useState(null);
  const [ispending, setIspending] = useState(false);
  const dispatch = useDispatch(); // Redux dispatch function

  const register = async (displayName, email, password) => {
    if (!email || !password || !displayName) {
      toast.error("Barcha maydonlarni toldiring");
      return;
    }

    try {
      setIspending(true);

      const auth = getAuth(app); // Use the initialized app here
      // Check if email is already registered
      const signInMethods = await fetchSignInMethodsForEmail(auth, email);
      
      if (signInMethods.length > 0) {
        toast.error("Bu email allaqachon ro‘yxatdan o‘tgan");
        setIspending(false);
        return;
      }

      // Register the user
      const req = await createUserWithEmailAndPassword(auth, email, password);

      // Update user profile after registration
      await updateProfile(auth.currentUser, {
        displayName: displayName,
        photoURL: `https://api.dicebear.com/9.x/micah/svg?seed=${req.user.uid}`,
      });

      const user = req.user;
      dispatch(login(user)); // Dispatch login action to Redux
      setData(user); // Store user data
      toast.success(`Welcome, ${displayName}!`); // Success message
    } catch (error) {
      toast.error(error.message); // Show error message if registration fails
      console.log("Firebase Error:", error.message);
    } finally {
      setIspending(false); // Set loading state to false after operation completes
    }
  };

  return { data, ispending, register }; // Return necessary states and function
};
