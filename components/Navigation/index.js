import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <Link href="/">Spotlight</Link>
      <Link href="/art-pieces">Art Pieces</Link>
      <Link href="#">Favorites</Link>
    </>
  );
}
