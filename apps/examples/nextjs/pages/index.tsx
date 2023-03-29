import Link from "next/link";

export default function Web() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/second">Second</Link>
    </div>
  );
}
