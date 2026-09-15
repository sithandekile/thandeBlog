// components/Card.jsx
export const Card = ({ cardItems }) => {
  return (
  <div className="dark:border border-orange-700 p-4 rounded-lg shadow bg-white dark:bg-sky-950" >
    <img src={cardItems.image} alt={cardItems.title} loading='lazy' className="w-full h-48 object-cover rounded-lg mb-4" />
    <h2 className="text-xl font-semibold mb-2">{cardItems.title}</h2>
    <p className="text-gray-600 dark:text-gray-300">{cardItems.description?.slice(0, 100)}...</p>
  </div>
);
}