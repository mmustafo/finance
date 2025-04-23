import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { toast } from "sonner";

export const useCollectionsData = () => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMultipleCollections() {
      try {
        const balanceRef = collection(db, "balance");
        const budgetsRef = collection(db, "budgets");
        const potsRef = collection(db, "pots");
        const transactionsRef = collection(db, "transactions");

        const [
          balanceSnapshot,
          potsSnapshot,
          budgetsSnapshot,
          transactionsSnapshot,
        ] = await Promise.all([
          getDocs(balanceRef),
          getDocs(potsRef),
          getDocs(budgetsRef),
          getDocs(transactionsRef),
        ]);

        const balance = balanceSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const pots = potsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const budgets = budgetsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const transactions = transactionsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setData({ balance, pots, budgets, transactions });
        setError(null);
      } catch (err) {
        console.error("Xatolik:", err.message);
        toast.error(err.message);
        setError(err.message);
      } finally {
        setIsPending(false);
      }
    }

    fetchMultipleCollections();
  }, []);

  return { data, isPending, error };
};
