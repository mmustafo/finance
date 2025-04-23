// Firebase SDK'larini import qilish
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Firebase konfiguratsiyasi
const firebaseConfig = {
  apiKey: "AIzaSyAYaQondNgsL15WP6tzL509YSD6mOQt_O4",
  authDomain: "finance-bc865.firebaseapp.com",
  projectId: "finance-bc865",
  storageBucket: "finance-bc865.firebasestorage.app",
  messagingSenderId: "1027373055915",
  appId: "1:1027373055915:web:da15f95e6ff90c62b01cee",
};

// Firebase'ni inicializatsiya qilish
const app = initializeApp(firebaseConfig);

// Authentication xizmatini olish
export const auth = getAuth(app);

// App obyektini eksport qilish (agar kerak bo'lsa)
export default app;

export const db = getFirestore();
