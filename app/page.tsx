import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-8 bg-white dark:bg-black">
        <Image
          className="dark:invert"
          src="/img/logo.svg"
          alt="GFE logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="max-w-md text-3xl leading-10 font-semibold tracking-tight text-black dark:text-zinc-50">
            GFE Challenges - Mark Austria
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            A collection of frontend challenges created by Mark Austria,
            showcasing my skills and creativity in web development.
          </p>
        </div>
      </main>
    </div>
  );
}
