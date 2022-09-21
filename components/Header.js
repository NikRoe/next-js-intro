import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <Link href="/" passHref>
          <a>Startseite</a>
        </Link>
        <Link href="/products" passHref>
          <a>Produkte</a>
        </Link>
        <Link href="/categories" passHref>
          <a>Kategorien</a>
        </Link>
      </nav>
    </header>
  );
}
