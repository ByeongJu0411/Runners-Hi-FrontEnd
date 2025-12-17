"use client";

import { useEffect, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

function ProgressBarContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    NProgress.done();
  }, [pathname, searchParams]);

  return null;
}

export function ProgressBarProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    NProgress.configure({ showSpinner: false });
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <ProgressBarContent />
      </Suspense>
      {children}
    </>
  );
}
