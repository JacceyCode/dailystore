import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      Home page
      <Image
        src="/assets/images/logo.svg"
        alt="logo"
        width="200"
        height="200"
      />
    </main>
  );
}
