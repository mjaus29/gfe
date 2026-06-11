import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const challenges = [
    { name: "Testimonial Card", href: "/testimonial-card" },
    { name: "Blog Card", href: "/blog-card" },
  ];

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
        <div className="mt-6 flex w-full max-w-3xl justify-center">
          <div className="flex flex-wrap gap-3">
            {challenges.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="inline-flex items-center gap-2 rounded-md border border-black bg-white px-4 py-2 text-black transition hover:bg-black hover:text-white dark:border-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
                aria-label={`Open ${c.name} challenge`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
