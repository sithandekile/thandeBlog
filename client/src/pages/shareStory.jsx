import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react';

const storyPrompts = [
  'What happened, and why did it matter to you?',
  'What did you learn from the experience?',
  'Who could benefit from hearing your story?',
];

export const ShareStory = () => {
  const { user } = useUser();
  const [form, setForm] = useState({
    title: '',
    category: 'Mental Health',
    excerpt: '',
    story: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('This is the frontend submission flow. The next step is connecting this form to your backend API and saving it to the database.');
  };

  return (
    <main className="mx-auto max-w-5xl px-5 py-12 md:px-8 md:py-16">
      <header className="max-w-3xl">
        <p className="mb-3 font-medium text-orange-800 dark:text-orange-400">Story Circle</p>
        <h1 className="text-3xl font-bold md:text-5xl">Your experience could help someone else.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-700 dark:text-slate-300">
          We are creating a welcoming space for honest experiences, practical lessons, and perspectives from everyday people. Share what you have learned, and help another reader feel less alone or more prepared.
        </p>
      </header>

      <section className="mt-12 rounded-lg bg-[#fef5f6] p-6 dark:bg-slate-900 md:p-8">
        <h2 className="text-2xl font-bold">Start with these questions</h2>
        <ol className="mt-5 list-decimal space-y-4 pl-6 text-slate-700 dark:text-slate-300">
          {storyPrompts.map((prompt) => (
            <li key={prompt}>{prompt}</li>
          ))}
        </ol>
      </section>

      <section className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Contributor</p>
            <h2 className="text-2xl font-bold">{user?.firstName ? `Welcome, ${user.firstName}` : 'Share your story'}</h2>
          </div>
          <Link to="/blog" className="rounded border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-slate-800">
            Browse stories
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 md:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Story title
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="A lesson I wish I had learned sooner"
                className="mt-2 w-full rounded border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-0 transition focus:border-orange-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
                required
              />
            </label>

            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
              Category
              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="mt-2 w-full rounded border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-orange-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              >
                <option>Mental Health</option>
                <option>Personal Growth</option>
                <option>Relationships</option>
                <option>Career</option>
                <option>Faith</option>
              </select>
            </label>
          </div>

          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Short description
            <textarea
              name="excerpt"
              value={form.excerpt}
              onChange={handleChange}
              rows="3"
              placeholder="A short summary of the lesson or moment you want to share..."
              className="mt-2 w-full rounded border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-orange-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              required
            />
          </label>

          <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
            Your story
            <textarea
              name="story"
              value={form.story}
              onChange={handleChange}
              rows="8"
              placeholder="Tell your story in your own words..."
              className="mt-2 w-full rounded border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:border-orange-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              required
            />
          </label>

          <div className="flex flex-wrap gap-4 pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded bg-orange-800 px-6 py-3 font-medium text-white hover:bg-orange-700"
            >
              Submit story
            </button>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded border border-orange-800 px-6 py-3 font-medium text-orange-800 hover:bg-orange-800 hover:text-white"
            >
              Contact the team
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};
