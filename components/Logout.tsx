'use client';
import { signOut } from 'next-auth/react'; // Use client-side signOut

export function LogoutButton() {
  return (
    <button
      role="button"
      className="fixed top-2 right-2 p-2 bg-green-600 text-white z-10 rounded-md"
      onClick={() => signOut({ callbackUrl: '/' })} // Use callbackUrl for client-side
    >
      Log Out
    </button>
  );
}