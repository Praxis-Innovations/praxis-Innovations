import React from 'react';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-primary-50">
      <div className="text-center">
        <div className="text-8xl font-bold text-primary-600 mb-4">404</div>
        <h1 className="text-3xl font-bold text-neutral-900 mb-4">Page Not Found</h1>
        <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
          We can't seem to find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <Link href="/" className="btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
