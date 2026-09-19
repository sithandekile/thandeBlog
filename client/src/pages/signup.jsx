import { SignUp } from '@clerk/react';
import { Link } from 'react-router-dom';

export default function Signup() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-700">Create account</p>
        <h1 className="mt-3 text-3xl font-bold md:text-5xl">Join the Story Circle</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <SignUp
              routing="path"
              path="/sign-up"
              signInUrl="/sign-in"
              fallbackRedirectUrl="/share-story"
            />
        </div>

        <aside className="rounded-2xl bg-sky-50 p-6 dark:bg-slate-900">
          <h2 className="text-xl font-bold">You’re in good company</h2>
          <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-300">
            Create an account to publish your story, contribute to meaningful conversations, and keep your writing journey organized.
          </p>
          <Link to="/sign-in" className="mt-6 inline-flex rounded border border-orange-700 px-4 py-2 font-medium text-orange-700 hover:bg-orange-700 hover:text-white">
            Already have an account?
          </Link>
        </aside>
      </div>
    </main>
  );
}
