import Link from "next/link";

export default function ChallengeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-full flex-col">
      <main className="flex-1">{children}</main>

      <Link
        href="/"
        className="fixed right-0 bottom-0 left-0 inline-flex items-center gap-2 rounded-md border border-black bg-white px-4 py-2 text-black transition hover:bg-black hover:text-white dark:border-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
        aria-label="Return to challenges"
      >
        ← Return to Challenges
      </Link>
    </div>
  );
}
