export type ContentBlockType = 
  | 'paragraph' 
  | 'heading' 
  | 'image' 
  | 'code' 
  | 'list';

export interface ContentBlock {
  type: ContentBlockType;
  content: string;
  level?: number; // For headings (h2, h3, etc.)
  language?: string; // For code blocks
  alt?: string; // For images
  ordered?: boolean; // For lists
  items?: string[]; // For lists
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  readingTime: number; // in minutes
  featuredImage?: string; // For hero section
  featured?: boolean; // For hero section
  content: ContentBlock[];
  relatedArticles?: string[]; // Array of article IDs
}

export const categories = [
  'All',
  'AI',
  'Product',
  'Leadership',
  'Parenting'
] as const;

export type Category = typeof categories[number];

// Sample articles - easy to extend
export const articles: Article[] = [
  {
    id: '1',
    slug: 'raising-ai-native-kids',
    title: 'Raising AI-Native Kids: Creativity, Literacy, And Boundaries At Home',
    excerpt: 'How our family uses tools like Gemini and Opal to spark creativity and curiosity while maintaining healthy boundaries.',
    category: 'AI',
    tags: ['Parenting', 'AI', 'Education'],
    readingTime: 8,
    featuredImage: 'https://images.unsplash.com/photo-1759646827278-27c5733e0cee?w=1200',
    featured: true,
    content: [
      {
        type: 'paragraph',
        content: 'As a product leader working in AI, I spend my days thinking about how technology shapes human behavior. But nowhere is this more personal—or consequential—than at home with my two young kids.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Challenge of Raising Digital Natives'
      },
      {
        type: 'paragraph',
        content: 'My children will grow up in a world where AI is as ubiquitous as the internet is today. The question isn\'t whether they\'ll use AI—it\'s how we teach them to use it thoughtfully, creatively, and safely.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Practical Examples: Gemini and Creative Play'
      },
      {
        type: 'paragraph',
        content: 'Recently, my daughter was obsessed with a nursery rhyme about birds flying out of a pie. Instead of just reading it together, we used the Gemini app to turn that line into a short video clip. Her eyes lit up seeing her imagination come to life.'
      },
      {
        type: 'paragraph',
        content: 'I also built a simple "Fact Snacks" app using Opal—a tool that lets you prototype quickly without code. My kids can ask questions and get bite-sized, age-appropriate answers. It\'s become our dinner table companion for those "Why is the sky blue?" moments.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Setting Boundaries'
      },
      {
        type: 'paragraph',
        content: 'But creativity alone isn\'t enough. We\'re equally intentional about boundaries:'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Screen time limits are non-negotiable',
          'AI tools are used together, not solo',
          'We discuss what the AI is doing and why',
          'Critical thinking is encouraged: "Do you think that answer makes sense?"'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Lessons for Product Leaders'
      },
      {
        type: 'paragraph',
        content: 'This parenting journey has deepened my conviction that AI products must be designed with intention. Whether building for kids or adults, we need to:'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Make the invisible visible—help users understand how AI works',
          'Design for co-use, not isolation',
          'Build in natural stopping points and boundaries',
          'Optimize for learning, not just engagement'
        ]
      },
      {
        type: 'paragraph',
        content: 'The stakes are high, but so is the opportunity. If we get this right, we can raise a generation that\'s not just comfortable with AI, but empowered by it.'
      }
    ],
    relatedArticles: ['2', '3']
  },
  {
    id: '2',
    slug: 'friction-in-product-design',
    title: 'The Importance of Friction in Product Design',
    excerpt: 'Exploring when and why intentional friction creates better user experiences and builds trust.',
    category: 'Product',
    tags: ['UX', 'Product', 'Design'],
    readingTime: 6,
    content: [
      {
        type: 'paragraph',
        content: 'In the world of product design, we\'re obsessed with reducing friction. Faster checkouts. One-click purchases. Seamless onboarding. But what if I told you that sometimes, friction is exactly what your users need?'
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Myth of Frictionless Everything'
      },
      {
        type: 'paragraph',
        content: 'The pursuit of frictionless experiences has become almost dogmatic in tech. We measure success in milliseconds saved and clicks eliminated. But this approach misses a crucial insight: not all friction is bad.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'When Friction Builds Trust'
      },
      {
        type: 'paragraph',
        content: 'Consider the "Are you sure?" dialog before deleting something important. Or the multi-step verification for financial transactions. These moments of friction aren\'t bugs—they\'re features.'
      },
      {
        type: 'paragraph',
        content: 'Good friction serves several purposes:'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Prevents costly mistakes',
          'Builds user confidence through transparency',
          'Creates moments for reflection and decision-making',
          'Signals importance and gravity of an action'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'A Framework for Intentional Friction'
      },
      {
        type: 'paragraph',
        content: 'Here\'s how I think about when to add friction:'
      },
      {
        type: 'code',
        language: 'typescript',
        content: `// Friction Decision Framework
const shouldAddFriction = (action: UserAction) => {
  const isIrreversible = action.canUndo === false;
  const hasHighImpact = action.impact === 'high';
  const involvesMoneyOrData = action.sensitive === true;
  
  if (isIrreversible || hasHighImpact || involvesMoneyOrData) {
    return true; // Add friction
  }
  
  return false; // Optimize for speed
};`
      },
      {
        type: 'heading',
        level: 2,
        content: 'Real-World Examples'
      },
      {
        type: 'paragraph',
        content: 'Some of the best products use friction masterfully:'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Stripe\'s test mode toggle requires deliberate clicking to prevent accidental production charges',
          'GitHub\'s repository deletion requires typing the repo name—friction that prevents disasters',
          'Superhuman\'s training flow creates friction upfront to ensure long-term speed',
          'Apple\'s Face ID adds a brief moment of verification that builds security confidence'
        ]
      },
      {
        type: 'paragraph',
        content: 'The key is being intentional. Every piece of friction should serve a purpose. Ask yourself: does this friction make my users more confident, informed, or protected? If yes, keep it. If no, remove it.'
      }
    ],
    relatedArticles: ['1', '3']
  },
  {
    id: '3',
    slug: 'mentoring-product-managers',
    title: 'Mentoring Product Managers: Lessons from the Trenches',
    excerpt: 'Reflections on what I\'ve learned from mentoring PMs at various stages of their careers.',
    category: 'Leadership',
    tags: ['Leadership', 'Mentorship', 'Product'],
    readingTime: 7,
    content: [
      {
        type: 'paragraph',
        content: 'Over the past decade, I\'ve had the privilege of mentoring dozens of product managers—from new grads finding their footing to senior PMs navigating leadership transitions. Here\'s what I\'ve learned.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Mentoring Mindset'
      },
      {
        type: 'paragraph',
        content: 'Great mentoring isn\'t about having all the answers. It\'s about asking the right questions and creating space for growth.'
      },
      {
        type: 'paragraph',
        content: 'My approach centers on three principles:'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Listen more than you speak',
          'Share context, not just conclusions',
          'Make it safe to fail (in small, controlled ways)'
        ]
      },
      {
        type: 'heading',
        level: 2,
        content: 'Common Challenges and How to Navigate Them'
      },
      {
        type: 'paragraph',
        content: 'Most PMs struggle with similar issues at different career stages. Here are the patterns I see most often:'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Early Career: Finding Your Voice'
      },
      {
        type: 'paragraph',
        content: 'Junior PMs often hesitate to push back on engineers or designers. They think their job is to please everyone. I help them see that healthy conflict—grounded in data and user needs—is part of the job.'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Mid Career: Avoiding the Feature Factory'
      },
      {
        type: 'paragraph',
        content: 'Mid-level PMs can get stuck in execution mode, shipping features without connecting to strategy. We work on zooming out: What problem are we really solving? How does this connect to business goals?'
      },
      {
        type: 'heading',
        level: 3,
        content: 'Senior Career: Leading Without Authority'
      },
      {
        type: 'paragraph',
        content: 'Senior PMs often struggle with influence at scale. How do you shape strategy when you\'re not the CEO? How do you bring cross-functional partners along? This is where storytelling and stakeholder mapping become critical skills.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Power of Reverse Mentoring'
      },
      {
        type: 'paragraph',
        content: 'Here\'s the secret: I learn just as much from my mentees as they learn from me. They keep me sharp on:'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Emerging tools and workflows I might have missed',
          'How the next generation of users thinks and behaves',
          'Fresh frameworks and mental models from other companies',
          'Blind spots in my own thinking'
        ]
      },
      {
        type: 'paragraph',
        content: 'This bidirectional flow is what makes mentoring so energizing. It\'s not charity—it\'s collaboration.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Practical Tips for Aspiring Mentors'
      },
      {
        type: 'paragraph',
        content: 'If you\'re thinking about mentoring, here\'s my advice:'
      },
      {
        type: 'list',
        ordered: true,
        items: [
          'Start small—even 30 minutes a month can be valuable',
          'Be honest about your constraints and areas of expertise',
          'Focus on teaching frameworks, not memorizing your career path',
          'Create accountability: set goals and check in on progress',
          'Know when to refer them to someone with more relevant experience'
        ]
      },
      {
        type: 'paragraph',
        content: 'Mentoring has been one of the most rewarding parts of my career. If you\'re on the fence about doing it, I encourage you to start. You\'ll be amazed at what you gain in return.'
      }
    ],
    relatedArticles: ['1', '2']
  },
  {
    id: '4',
    slug: 'building-ai-products-that-people-trust',
    title: 'Building AI Products That People Trust',
    excerpt: 'Five principles for designing AI experiences that earn and maintain user trust.',
    category: 'AI',
    tags: ['AI', 'Product', 'Trust'],
    readingTime: 9,
    content: [
      {
        type: 'paragraph',
        content: 'Trust is the foundation of any successful product. But with AI, trust is both more critical and more fragile than ever before.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Trust Deficit in AI'
      },
      {
        type: 'paragraph',
        content: 'Users are rightfully skeptical of AI. They\'ve seen the headlines about bias, hallucinations, and privacy violations. As builders, we can\'t just tell users to trust us—we have to earn it through design.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Five Principles for Trustworthy AI Products'
      },
      {
        type: 'heading',
        level: 3,
        content: '1. Make the Invisible Visible'
      },
      {
        type: 'paragraph',
        content: 'AI feels like magic—and that\'s the problem. Magic is unpredictable. Show users how the AI works, even in simplified terms. Use progressive disclosure to explain reasoning when it matters most.'
      },
      {
        type: 'heading',
        level: 3,
        content: '2. Design for Graceful Failure'
      },
      {
        type: 'paragraph',
        content: 'Your AI will make mistakes. Accept it and design for it. Provide clear error states, let users easily correct mistakes, and learn from failures to improve over time.'
      },
      {
        type: 'heading',
        level: 3,
        content: '3. Give Users Control'
      },
      {
        type: 'paragraph',
        content: 'The best AI products are collaborative, not autonomous. Let users steer, edit, and override AI suggestions. Control builds confidence.'
      },
      {
        type: 'heading',
        level: 3,
        content: '4. Be Consistent and Predictable'
      },
      {
        type: 'paragraph',
        content: 'If your AI behaves differently in similar contexts, users will lose trust. Invest in consistency—even if it means being slightly less accurate in edge cases.'
      },
      {
        type: 'heading',
        level: 3,
        content: '5. Respect Privacy and Data'
      },
      {
        type: 'paragraph',
        content: 'Be transparent about what data you collect, how you use it, and how users can delete it. Privacy isn\'t just legal compliance—it\'s a core product feature.'
      },
      {
        type: 'paragraph',
        content: 'Building AI products that people trust isn\'t easy. But it\'s the only way to build products that last.'
      }
    ],
    relatedArticles: ['1', '2']
  },
  {
    id: '5',
    slug: 'product-strategy-in-uncertain-times',
    title: 'Product Strategy in Uncertain Times',
    excerpt: 'How to build resilient product roadmaps when the future is unpredictable.',
    category: 'Product',
    tags: ['Strategy', 'Product', 'Leadership'],
    readingTime: 8,
    content: [
      {
        type: 'paragraph',
        content: 'If there\'s one constant in tech, it\'s change. Markets shift. Technologies emerge. Competitors appear overnight. So how do you build a product strategy that can withstand uncertainty?'
      },
      {
        type: 'heading',
        level: 2,
        content: 'The Problem with Traditional Roadmaps'
      },
      {
        type: 'paragraph',
        content: 'Most roadmaps are built on assumptions: market conditions will remain stable, resources won\'t change, competitors will behave predictably. These assumptions rarely hold.'
      },
      {
        type: 'paragraph',
        content: 'Instead, I advocate for a more adaptive approach—one that embraces uncertainty rather than ignoring it.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Principles for Resilient Strategy'
      },
      {
        type: 'list',
        ordered: false,
        items: [
          'Focus on outcomes, not outputs',
          'Build optionality into your plans',
          'Shorten feedback loops',
          'Maintain a portfolio of bets at different time horizons',
          'Create clear decision triggers'
        ]
      },
      {
        type: 'paragraph',
        content: 'Let me break down what each of these means in practice.'
      }
    ],
    relatedArticles: ['2', '3']
  },
  {
    id: '6',
    slug: 'from-ic-to-leader',
    title: 'From Individual Contributor to Leader: What I Wish I Knew',
    excerpt: 'The mindset shifts that matter most when transitioning from maker to manager.',
    category: 'Leadership',
    tags: ['Leadership', 'Career', 'Product'],
    readingTime: 6,
    content: [
      {
        type: 'paragraph',
        content: 'The transition from individual contributor to leader is one of the hardest career shifts you\'ll make. Here\'s what I wish someone had told me.'
      },
      {
        type: 'heading',
        level: 2,
        content: 'Your Job Is No Longer Doing—It\'s Enabling'
      },
      {
        type: 'paragraph',
        content: 'This was the hardest lesson for me. I loved shipping features, writing specs, being in the details. As a leader, your job is to help your team do those things better than you ever could alone.'
      },
      {
        type: 'paragraph',
        content: 'The best leaders create environments where great work happens, not where they do all the great work themselves. This means learning to delegate, to coach, and to step back from the work you love doing.'
      }
    ],
    relatedArticles: ['3', '5']
  }
];

// Helper functions for blog functionality
export const getFeaturedArticle = (): Article | undefined => {
  return articles.find(article => article.featured);
};

export const getArticleBySlug = (slug: string): Article | undefined => {
  return articles.find(article => article.slug === slug);
};

export const getRelatedArticles = (articleId: string, limit: number = 3): Article[] => {
  const article = articles.find(a => a.id === articleId);
  
  // Start with explicitly defined related articles
  let related: Article[] = [];
  
  if (article?.relatedArticles) {
    related = article.relatedArticles
      .map(id => articles.find(a => a.id === id))
      .filter((a): a is Article => a !== undefined);
  }
  
  // If we don't have enough related articles, fill with articles from same category
  if (related.length < limit && article) {
    const sameCategoryArticles = articles.filter(
      a => a.id !== article.id && 
      a.category === article.category && 
      !related.some(r => r.id === a.id)
    );
    related = [...related, ...sameCategoryArticles];
  }
  
  // If still not enough, fill with any other articles
  if (related.length < limit && article) {
    const otherArticles = articles.filter(
      a => a.id !== article.id && 
      !related.some(r => r.id === a.id)
    );
    related = [...related, ...otherArticles];
  }
  
  return related.slice(0, limit);
};

export const filterArticlesByCategory = (category: Category): Article[] => {
  if (category === 'All') return articles;
  return articles.filter(article => article.category === category);
};

export const searchArticles = (query: string): Article[] => {
  const lowercaseQuery = query.toLowerCase();
  return articles.filter(article => 
    article.title.toLowerCase().includes(lowercaseQuery) ||
    article.excerpt.toLowerCase().includes(lowercaseQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
};

export const estimateReadingTime = (content: ContentBlock[]): number => {
  const wordsPerMinute = 200;
  const totalWords = content.reduce((count, block) => {
    if (block.type === 'paragraph' || block.type === 'heading') {
      return count + block.content.split(' ').length;
    }
    if (block.type === 'list' && block.items) {
      return count + block.items.join(' ').split(' ').length;
    }
    return count;
  }, 0);
  
  return Math.ceil(totalWords / wordsPerMinute);
};