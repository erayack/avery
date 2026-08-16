export type PostSection = {
  heading: string;
  paragraphs?: string[];
  quote?: string;
  items?: string[];
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  date: string;
  dateLabel: string;
  readTime: string;
  image: string;
  imageAlt: string;
  caption: string;
  sections: PostSection[];
};

export const posts: Post[] = [
  {
    slug: 'all-kyoto-theme-features',
    title: 'All Kyoto Theme Features',
    description: 'A tour of the thoughtful details included in the Kyoto theme.',
    intro: 'Kyoto is built around one idea: your work should be the loudest thing on the page. Here is a closer look at the details that make the experience calm, useful, and distinctly personal.',
    date: '2025-02-04',
    dateLabel: 'February 4, 2025',
    readTime: '8 min read',
    image: 'https://cdn.synaps.media/kyoto/content/images/2024/03/Twitter-post---5.jpg',
    imageAlt: 'A preview of the Kyoto portfolio theme',
    caption: 'A flexible home for writing, projects, and the work in between.',
    sections: [
      {
        heading: 'A homepage that reads like you',
        paragraphs: ['The homepage brings together a short introduction, current projects, recent writing, selected case studies, testimonials, and work history. Each section has a clear role, but they all share the same narrow rhythm so the page feels like one continuous story.'],
      },
      {
        heading: 'Designed for focused reading',
        paragraphs: ['Typography does most of the visual work. Comfortable line lengths, generous spacing, quiet metadata, and clear headings make long articles easy to scan without turning them into a collection of competing cards.'],
        quote: 'Minimal does not mean empty. It means every detail has earned its place.',
      },
      {
        heading: 'Light and dark, by default',
        paragraphs: ['The color system responds to your device and remembers your choice. Both modes preserve the hierarchy between primary text, supporting information, borders, and the warm Kyoto accent.'],
      },
      {
        heading: 'Thoughtful interactions',
        items: [
          'Keyboard-visible focus states across links and controls',
          'A compact mobile navigation with comfortable touch targets',
          'Reduced-motion support for visitors who request it',
          'Responsive images and layouts from phone to desktop',
        ],
      },
      {
        heading: 'Made to grow with your work',
        paragraphs: ['Projects and posts use simple, repeatable structures. Add a new story, change the order of a section, or expand a case study without redesigning the whole site. The system stays out of your way while your body of work grows.'],
      },
    ],
  },
  {
    slug: 'designing-for-quiet-moments',
    title: 'Designing for the Quiet Moments',
    description: 'Why the smallest moments in a product deserve deliberate design.',
    intro: 'The most memorable product moments are rarely the loudest. They happen while someone waits, recovers from a mistake, or returns to a familiar task.',
    date: '2025-01-18',
    dateLabel: 'January 18, 2025',
    readTime: '6 min read',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Notebook and laptop arranged on a quiet desk',
    caption: 'Good interfaces make space for attention.',
    sections: [
      {
        heading: 'Start between the milestones',
        paragraphs: ['Teams naturally focus on launches, conversions, and completed tasks. The experience between those milestones matters just as much: loading, saving, returning, and deciding what to do next.', 'Mapping these in-between states early reveals where a product can offer reassurance instead of demanding more attention.'],
      },
      {
        heading: 'Reduce uncertainty, not personality',
        paragraphs: ['Clear status language and predictable placement build trust. A small amount of warmth can make those messages feel human, but it should never compete with the information someone needs.'],
        quote: 'Calm design answers the next question before it becomes a concern.',
      },
      {
        heading: 'A useful review checklist',
        items: [
          'Explain what is happening without exposing implementation details',
          'Preserve a person’s work whenever recovery is possible',
          'Make the safest next action visually clear',
          'Respect reduced-motion and low-bandwidth preferences',
        ],
      },
    ],
  },
  {
    slug: 'a-practical-creative-system',
    title: 'A Practical Creative System',
    description: 'A lightweight system for moving creative work from idea to finished piece.',
    intro: 'Creative routines work best when they reduce decisions rather than add ceremony. This is the small system I use to keep ideas moving.',
    date: '2024-12-07',
    dateLabel: 'December 7, 2024',
    readTime: '5 min read',
    image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Open notebook with sketches and handwritten notes',
    caption: 'A simple system leaves more energy for the work.',
    sections: [
      {
        heading: 'Capture without sorting',
        paragraphs: ['Every idea starts in one inbox. I avoid categories at this stage because choosing where something belongs creates just enough friction to lose it. A sentence, photo, or rough sketch is enough.'],
      },
      {
        heading: 'Choose by energy',
        paragraphs: ['Once a week, I review the inbox and choose one idea that still feels alive. It becomes a small brief with an audience, a question, and a definition of done.'],
        quote: 'A useful process should create momentum, not homework.',
      },
      {
        heading: 'Finish in layers',
        items: [
          'Make the idea understandable',
          'Strengthen the structure and pacing',
          'Refine the visual details',
          'Publish, then record what you learned',
        ],
      },
    ],
  },
  {
    slug: 'what-i-keep-on-my-desk',
    title: 'What I Keep on My Desk',
    description: 'A short inventory of the tools that support focused creative work.',
    intro: 'My desk is intentionally ordinary. The objects that stay are the ones that make starting easier and disappearing into the work possible.',
    date: '2024-11-22',
    dateLabel: 'November 22, 2024',
    readTime: '4 min read',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=85',
    imageAlt: 'Minimal desk in a bright creative studio',
    caption: 'Only the tools that earn their place remain.',
    sections: [
      {
        heading: 'Analog first',
        paragraphs: ['A plain notebook sits to the left of the keyboard. Early thinking feels more flexible on paper, where arrows, fragments, and bad ideas can coexist without needing to look finished.'],
      },
      {
        heading: 'One screen, one task',
        paragraphs: ['The computer is deliberately unremarkable. What matters is the habit of closing everything unrelated to the current task and keeping communication out of sight during focused blocks.'],
        quote: 'The best tool is often the one you stop noticing.',
      },
      {
        heading: 'Small signals to begin',
        paragraphs: ['A glass of water, headphones, and a warm lamp form a repeatable cue. None is essential alone; together they make the transition into creative work almost automatic.'],
      },
    ],
  },
];
