import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Link href="/art">
        Go to art work
      </Link>
    </div>
  );
}