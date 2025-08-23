import React from 'react';
import Link from 'next/link';

export default function Custom500() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-accent-50">
      <div className="text-center">
        <div className="text-8xl font-bold text-accent-600 mb-4">500</div>
        <h1 className="text-3xl font-bold text-neutral-900 mb-4">Server Error</h1>
        <p className="text-lg text-neutral-600 mb-8 max-w-md mx-auto">
          Something went wrong on our end. We're working to fix the issue. Please try again later.
        </p>
        <Link href="/" className="btn-primary">
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
