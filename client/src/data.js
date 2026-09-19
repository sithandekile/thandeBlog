import {
  Brain,
  Sprout,
  BriefcaseBusiness,
  Heart,
  HeartHandshake,
} from "lucide-react";
import blogHero from "./assets/bloghero.webp";
import startupImage from "./assets/startup.webp";
import techHero from "./assets/techhero.webp";

export const categories = [
  {
    name: "Mental Health",
    icon: Brain,
    count: 4,
  },
  {
    name: "Personal Growth",
    icon: Sprout,
    count: 4,
  },
  {
    name: "Career",
    icon: BriefcaseBusiness,
    count: 4,
  },
  {
    name: "Faith",
    icon: Heart,
    count: 4,
  },
  {
    name: "Relationships",
    icon: HeartHandshake,
    count: 4,
  },
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
    title: "Learning to Be Kind to Myself",
    image: blogHero,
    category: "Mental Health",
    createdAt: Date.now() - 1 * 24 * 60 * 60 * 1000,
    description:
      "For a long time, I thought being hard on myself would make me stronger. Learning to practice self-compassion changed the way I handle mistakes and difficult days.",
  },

  {
    id: 2,
    title: "When Asking for Help Became a Strength",
    image: techHero,
    category: "Mental Health",
    createdAt: Date.now() - 2 * 24 * 60 * 60 * 1000,
    description:
      "I used to believe I had to handle everything alone. Learning to reach out to trusted people taught me that asking for help is not a weakness.",
  },

  {
    id: 3,
    title: "Finding Peace During a Difficult Season",
    image: startupImage,
    category: "Mental Health",
    createdAt: Date.now() - 3 * 24 * 60 * 60 * 1000,
    description:
      "Some seasons of life feel heavier than others. This is a reflection on finding small moments of peace while going through a challenging time.",
  },

  {
    id: 4,
    title: "The Day I Realized I Needed to Slow Down",
    image: blogHero,
    category: "Mental Health",
    createdAt: Date.now() - 4 * 24 * 60 * 60 * 1000,
    description:
      "Constantly trying to keep up left me exhausted. Slowing down helped me understand the importance of rest, boundaries, and listening to myself.",
  },

  {
    id: 5,
    title: "Becoming Comfortable With Who I Am",
    image: techHero,
    category: "Personal Growth",
    createdAt: Date.now() - 5 * 24 * 60 * 60 * 1000,
    description:
      "Growth is not always about becoming someone new. Sometimes it is about accepting yourself, understanding your values, and becoming more comfortable with who you already are.",
  },

  {
    id: 6,
    title: "Small Steps Changed the Way I See Progress",
    image: blogHero,
    category: "Personal Growth",
    createdAt: Date.now() - 6 * 24 * 60 * 60 * 1000,
    description:
      "I used to expect big changes to happen quickly. Learning to appreciate small improvements taught me that progress can happen one step at a time.",
  },

  {
    id: 7,
    title: "What Failure Taught Me About Starting Again",
    image: startupImage,
    category: "Personal Growth",
    createdAt: Date.now() - 8 * 24 * 60 * 60 * 1000,
    description:
      "Failure can make you question yourself, but it can also teach you what needs to change. This is a story about finding the courage to begin again.",
  },

  {
    id: 8,
    title: "Learning to Stop Comparing My Journey",
    image: techHero,
    category: "Personal Growth",
    createdAt: Date.now() - 10 * 24 * 60 * 60 * 1000,
    description:
      "Watching other people succeed made me feel like I was falling behind. I learned that personal growth becomes easier when you stop measuring your journey against someone else's.",
  },

  {
    id: 9,
    title: "Starting My Career With No Clear Direction",
    image: startupImage,
    category: "Career",
    createdAt: Date.now() - 12 * 24 * 60 * 60 * 1000,
    description:
      "Not everyone knows exactly what they want to do after school. This story explores what it feels like to start a career while still figuring yourself out.",
  },

  {
    id: 10,
    title: "What My First Job Taught Me",
    image: blogHero,
    category: "Career",
    createdAt: Date.now() - 14 * 24 * 60 * 60 * 1000,
    description:
      "My first job taught me lessons that had nothing to do with my job description. I learned about communication, responsibility, patience, and working with different people.",
  },

  {
    id: 11,
    title: "Changing Careers Even When I Was Afraid",
    image: techHero,
    category: "Career",
    createdAt: Date.now() - 16 * 24 * 60 * 60 * 1000,
    description:
      "Starting over professionally can be frightening. This is a reflection on leaving a familiar path and taking a chance on something new.",
  },

  {
    id: 12,
    title: "Learning That Success Does Not Happen Overnight",
    image: startupImage,
    category: "Career",
    createdAt: Date.now() - 18 * 24 * 60 * 60 * 1000,
    description:
      "Career growth can feel slow when you compare yourself with others. I learned that building skills, experience, and confidence takes time.",
  },

  {
    id: 13,
    title: "Finding Faith When I Had More Questions Than Answers",
    image: blogHero,
    category: "Faith",
    createdAt: Date.now() - 20 * 24 * 60 * 60 * 1000,
    description:
      "There were moments when I questioned what I believed. Instead of walking away, I learned that faith can also include honest questions and uncertainty.",
  },

  {
    id: 14,
    title: "How Prayer Helped Me Through a Difficult Season",
    image: techHero,
    category: "Faith",
    createdAt: Date.now() - 22 * 24 * 60 * 60 * 1000,
    description:
      "When life felt uncertain, prayer became a place where I could slow down, reflect, and find hope even when I did not have all the answers.",
  },

  {
    id: 15,
    title: "Learning to Trust the Journey",
    image: startupImage,
    category: "Faith",
    createdAt: Date.now() - 24 * 24 * 60 * 60 * 1000,
    description:
      "Sometimes the path ahead is unclear. This story is about learning to trust the journey and remain hopeful during seasons of uncertainty.",
  },

  {
    id: 16,
    title: "What Faith Taught Me About Forgiveness",
    image: blogHero,
    category: "Faith",
    createdAt: Date.now() - 26 * 24 * 60 * 60 * 1000,
    description:
      "Forgiveness is not always easy. My faith helped me understand the difference between holding onto pain and choosing to move forward.",
  },

  {
    id: 17,
    title: "Learning to Communicate Better in Relationships",
    image: techHero,
    category: "Relationships",
    createdAt: Date.now() - 28 * 24 * 60 * 60 * 1000,
    description:
      "Good relationships require more than caring about someone. Learning to communicate honestly and listen carefully changed the way I connect with others.",
  },

  {
    id: 18,
    title: "When a Friendship Changed My Life",
    image: startupImage,
    category: "Relationships",
    createdAt: Date.now() - 30 * 24 * 60 * 60 * 1000,
    description:
      "Some friendships arrive at exactly the right time. This is a story about a friendship that taught me something important about support, trust, and connection.",
  },

  {
    id: 19,
    title: "Learning When to Let Go",
    image: blogHero,
    category: "Relationships",
    createdAt: Date.now() - 32 * 24 * 60 * 60 * 1000,
    description:
      "Not every relationship is meant to last forever. Sometimes letting go is painful, but it can also create space for healing and a healthier future.",
  },

  {
    id: 20,
    title: "Setting Healthy Boundaries Without Feeling Guilty",
    image: techHero,
    category: "Relationships",
    createdAt: Date.now() - 34 * 24 * 60 * 60 * 1000,
    description:
      "I used to think saying no meant I did not care about people. Learning to set healthy boundaries helped me protect my time while maintaining meaningful relationships.",
  },
];
