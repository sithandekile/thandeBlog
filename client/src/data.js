import { BriefcaseBusiness, Laptop, Trees, Rocket, ChartNoAxesCombined } from "lucide-react";
import blogHero from "./assets/bloghero.webp";
import startupImage from "./assets/startup.webp";
import techHero from "./assets/techhero.webp";

export const categories = [
  { name: "Business", icon: BriefcaseBusiness, count: 234 },
  { name: "Technology", icon: Laptop, count: 156 },
  { name: "Startup", icon:  Rocket, count: 89 },
  { name: "Economy", icon: ChartNoAxesCombined, count: 178 },
  { name: "Nature", icon:  Trees, count: 67 },
];

export const teamMembers = [
  {
    id: 1,
    name: "Sithandekile Thande",
    role: "Founder and Editor",
  },
  {
    id: 2,
    name: "The Writers",
    role: "Contributors and Researchers",
  },
  {
    id: 3,
    name: "The Creative Team",
    role: "Design and Visuals",
  },
];

export const posts = [
  {
    id: 1,
    title: "How Small Habits Create Lasting Change",
    image: blogHero,
    category: "Nature",
    createdAt: Date.now() - 1 * 24 * 60 * 60 * 1000,
    description: "Small, consistent choices can shape the way we think, work, and grow. Here are practical habits that can make a lasting difference.",
  },
  {
    id: 2,
    title: "Building Better Ideas Through Curiosity",
    image: techHero,
    category: "Technology",
    createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000,
    description: "Curiosity helps us ask better questions, understand new perspectives, and turn ordinary problems into opportunities for creative solutions.",
  },
  {
    id: 3,
    title: "What Every New Entrepreneur Should Know",
    image: startupImage,
    category: "Startup",
    createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000,
    description: "Starting a business takes more than a good idea. These lessons can help new entrepreneurs build with patience, purpose, and confidence.",
  },
  {
    id: 4,
    title: "Simple Ways to Make Work More Meaningful",
    image: blogHero,
    category: "Business",
    createdAt: Date.now() - 4 * 24 * 60 * 60 * 1000,
    description: "Meaningful work begins with clear priorities, healthy boundaries, and an understanding of the people who benefit from what we do.",
  },
  {
    id: 5,
    title: "Understanding Change in a Growing Economy",
    image: techHero,
    category: "Economy",
    createdAt: Date.now() - 5 * 24 * 60 * 60 * 1000,
    description: "Economic change affects everyday decisions. Learn how to think clearly about opportunity, uncertainty, and responsible financial choices.",
  },
  {
    id: 6,
    title: "Finding Focus in a Distracted World",
    image: blogHero,
    category: "Technology",
    createdAt: Date.now() - 6 * 24 * 60 * 60 * 1000,
    description: "A focused life does not require doing everything perfectly. It starts with protecting your attention and choosing what deserves your time.",
  },
  {
    id: 7,
    title: "The Quiet Value of Spending Time Outdoors",
    image: startupImage,
    category: "Nature",
    createdAt: Date.now() - 8 * 24 * 60 * 60 * 1000,
    description: "Time outdoors can create space for reflection, restore energy, and remind us to pay attention to the world around us.",
  },
  {
    id: 8,
    title: "Lessons From Turning an Idea Into Action",
    image: startupImage,
    category: "Startup",
    createdAt: Date.now() - 10 * 24 * 60 * 60 * 1000,
    description: "Ideas become valuable when we test them. Discover how small experiments can turn uncertainty into useful direction.",
  },
  {
    id: 9,
    title: "Better Decisions Begin With Better Questions",
    image: techHero,
    category: "Business",
    createdAt: Date.now() - 12 * 24 * 60 * 60 * 1000,
    description: "The questions we ask shape the decisions we make. Use these prompts to approach challenges with greater clarity and purpose.",
  },
  {
    id: 10,
    title: "Creating a Personal Definition of Success",
    image: blogHero,
    category: "Economy",
    createdAt: Date.now() - 14 * 24 * 60 * 60 * 1000,
    description: "Success looks different for everyone. Reflect on the values, relationships, and goals that make your own path worthwhile.",
  },
];