import { SignIn } from '@clerk/react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-700">Welcome back</p>
        <h1 className="mt-3 text-3xl font-bold md:text-5xl">Sign in to continue</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <SignIn
            routing="path"
            path="/sign-in"
            signUpUrl="/sign-up"
            fallbackRedirectUrl="/share-story"
          />
        </div>

        <aside className="rounded-2xl bg-sky-50 p-6 dark:bg-slate-900">
          <h2 className="text-xl font-bold">Why sign in?</h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li>• Save your story drafts as you write</li>
            <li>• Share your perspective with the Story Circle community</li>
            <li>• Track your submissions after editorial review</li>
          </ul>
          <Link to="/" className="mt-6 inline-flex rounded bg-orange-700 px-4 py-2 font-medium text-white hover:bg-orange-600">
            Back to home
          </Link>
        </aside>
      </div>
    </main>
  );
}
