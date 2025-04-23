import {
     getAuth,
     signInWithEmailAndPassword,
   } from "firebase/auth";
   import app from "../firebase/config";
   import { toast } from "sonner";
   import { useState } from "react";
   import { useDispatch } from "react-redux";
   import { login } from "../app/feture/useSlice";
   
   export const useLogin = () => {
     const [data, setData] = useState(null);
     const [ispending, setIspending] = useState(false);
     const dispatch = useDispatch();
   
     const loginUser = async (email, password) => {
       if (!email || !password) {
         toast.error("Email va parolni kiriting");
         return;
       }
   
       try {
         setIspending(true);
         const auth = getAuth(app);
         const res = await signInWithEmailAndPassword(auth, email, password);
         const user = res.user;
         dispatch(login(user));
         setData(user);
         toast.success(`Xush kelibsiz, ${user.displayName || "foydalanuvchi"}!`);
       } catch (error) {
         toast.error(error.message);
         console.log("Firebase login error:", error.message);
       } finally {
         setIspending(false);
       }
     };
   
     return { data, ispending, loginUser };
   };
   