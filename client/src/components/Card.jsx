import { Link } from 'react-router-dom';

export const Card = ({ cardItems }) => {
  const formattedDate = new Date(cardItems.createdAt).toLocaleDateString(undefined, {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Link to="/blog" className="group block rounded-lg bg-white p-4 shadow transition-transform hover:-translate-y-1 dark:border dark:border-orange-700 dark:bg-sky-950">
      <img src={cardItems.image} alt={cardItems.title} loading="lazy" className="mb-4 h-48 w-full rounded-lg object-cover" />
      <div className="mb-2 flex flex-wrap items-center justify-between gap-2 text-sm text-orange-700 dark:text-orange-400">
        <span>{cardItems.category}</span>
        <time dateTime={new Date(cardItems.createdAt).toISOString()}>{formattedDate}</time>
      </div>
      <h2 className="mb-2 text-xl font-semibold group-hover:text-orange-700">{cardItems.title}</h2>
      <p className="text-gray-600 dark:text-gray-300">{cardItems.description?.slice(0, 120)}...</p>
      <span className="mt-4 inline-block font-medium text-orange-700 dark:text-orange-400">Read article</span>
    </Link>
  );
};