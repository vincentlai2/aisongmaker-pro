'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function GlobalNotFound() {
  const router = useRouter();

  useEffect(() => {
    // 重定向到默认语言的404页面
    router.replace('/en/404');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p>Redirecting...</p>
      </div>
    </div>
  );
}
