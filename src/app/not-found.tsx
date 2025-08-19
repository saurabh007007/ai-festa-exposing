import Link from "next/link";
import { Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-emerald-950 text-emerald-50 p-6">
      <div className="w-full max-w-lg rounded-lg border border-emerald-700/40 bg-emerald-900/60 p-8 text-center shadow-xl">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-800 ring-1 ring-emerald-600/50">
          <Search className="text-emerald-200" size={22} />
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-emerald-100">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-emerald-300">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-600/40 bg-emerald-700/30 px-4 py-2 text-sm text-emerald-100 hover:bg-emerald-700/50"
          >
            Go back home
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/20 px-4 py-2 text-sm text-emerald-50 hover:bg-emerald-500/30"
          >
            Start a new chat
          </Link>
        </div>
      </div>
    </main>
  );
}
