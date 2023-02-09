import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Frontpage</h1>
      <Link href="/apidoc/beta">Link to doc</Link>
    </>
  );
}
