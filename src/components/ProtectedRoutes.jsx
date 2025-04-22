import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ user, children }) => {
  if (!user) {
    // Agar user mavjud bo'lmasa, login sahifasiga yo'naltirish
    return <Navigate to="/login" />;
  }

  return children; // Foydalanuvchi tizimga kirgan bo'lsa, children (MainLayout) ko'rsatiladi
};

export default ProtectedRoutes;  // default eksport qilish
