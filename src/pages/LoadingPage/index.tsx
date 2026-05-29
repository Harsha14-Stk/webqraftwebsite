import React, { Suspense } from 'react';


const DemoOne = React.lazy(() => import('components/ui/demoLoading'));

export default function LoadingPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#091018] to-[#05070c] p-6">
      <Suspense
        fallback={
          <div className="flex h-48 w-48 items-center justify-center rounded-full bg-white/5">
            <img src="/webqraft-logo-white.png" alt="logo" className="h-16 w-16 object-contain" />
          </div>
        }
      >
        <div className="animate-fade-in">
          <DemoOne />
        </div>
      </Suspense>
    </main>
  );
}
