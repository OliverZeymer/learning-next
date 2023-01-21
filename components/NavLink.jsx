"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function NavLink({ href, children, setIsMenuOpen }) {
  const pathname = usePathname();
  return (
    <Link
      onClick={() => setIsMenuOpen(false)}
      className={
        pathname === href
          ? `flex items-center w-full justify-start px-10 py-4 bg-primary-blue sm:hover:bg-primary-blue/80 transition-colors rounded-3xl`
          : `flex items-center w-full justify-start px-10 py-4 sm:hover:bg-primary-blue/80 transition-colors rounded-3xl`
      }
      href={href}>
      {children}
    </Link>
  );
}
