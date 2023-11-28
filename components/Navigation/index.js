import Link from "next/link";

export default function Navigation() {
  return (
    <footer>
      <ul>
        <li>
          <Link href="/">Spotlight</Link>
        </li>
        <li>
          <Link href="/art-pieces">Pieces</Link>
        </li>
      </ul>
    </footer>
  );
}
