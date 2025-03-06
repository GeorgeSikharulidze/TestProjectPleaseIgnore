// app/ClientLayout.tsx
"use client"; // Mark this as a client component

import { usePathname } from 'next/navigation';
import { Navbar5 } from '@/components/Navbar5';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {/* Conditionally render the navbar */}
      {pathname !== '/login' && <Navbar5 />}
      {children}
    </>
  );
}