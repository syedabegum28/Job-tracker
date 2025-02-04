import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/faq">FAQ</Link>
        </li>
      </ul>
    </nav>
  );
}