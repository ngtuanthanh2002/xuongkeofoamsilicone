"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type PromoContextValue = {
  selectedPackage: string;
  setSelectedPackage: (packageId: string) => void;
};

const PromoContext = createContext<PromoContextValue | null>(null);

export function PromoProvider({ children }: { children: ReactNode }) {
  const [selectedPackage, setSelectedPackageState] = useState("al2-1");

  const setSelectedPackage = useCallback((packageId: string) => {
    setSelectedPackageState(packageId);
  }, []);

  const value = useMemo(
    () => ({ selectedPackage, setSelectedPackage }),
    [selectedPackage, setSelectedPackage],
  );

  return (
    <PromoContext.Provider value={value}>{children}</PromoContext.Provider>
  );
}

export function usePromo() {
  const ctx = useContext(PromoContext);
  if (!ctx) {
    throw new Error("usePromo must be used within PromoProvider");
  }
  return ctx;
}
