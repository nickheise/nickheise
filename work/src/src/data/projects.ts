export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  featured: boolean;
  link?: string;
  productLink?: string;
  image?: string;
  // Detail page content
  detailContent?: {
    heroImage: string;
    overview: string;
    keyPoints: string[];
    longDescription: string;
    images: string[];
    metrics?: {
      label: string;
      value: string;
    }[];
  };
}

export const projectsData: Project[] = [
  {
    id: 'opal',
    title: 'Opal',
    description: 'Describe, create, and share your AI mini-apps. Automate workflows with ease.',
    tags: ['AI Tools', 'Productivity'],
    featured: true,
    link: 'https://developers.googleblog.com/en/introducing-opal/',
    productLink: 'https://opal.google/',
    image: 'https://images.unsplash.com/photo-1757310998648-f8aaa5572e8e?w=800',
    detailContent: {
      heroImage: 'https://images.unsplash.com/photo-1757310998648-f8aaa5572e8e?w=1920',
      overview: 'Opal is a revolutionary platform that makes creating AI-powered mini-apps accessible to everyone. Simply describe what you want, and Opal brings it to life.',
      keyPoints: [
        'Natural language app creation',
        'Instant deployment and sharing',
        'Integration with Google AI models',
        'Collaborative workspace for teams',
        'No coding required'
      ],
      longDescription: `Opal represents a fundamental shift in how we think about application development. By leveraging Google's most advanced AI models, Opal allows anyone to create sophisticated mini-apps through natural language descriptions. The platform handles the complexity of AI integration, deployment, and scaling automatically.

The vision behind Opal is to democratize app creation, making it possible for product managers, designers, and domain experts to prototype and deploy solutions without writing a single line of code. This accelerates innovation cycles and enables rapid experimentation.

From workflow automation to custom data analysis tools, Opal empowers teams to build exactly what they need, when they need it. The platform includes robust sharing capabilities, allowing apps to be distributed across organizations or made publicly available.`,
      images: [
        'https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?w=1200',
        'https://images.unsplash.com/photo-1617153817979-283ffdcd52f5?w=1200',
        'https://images.unsplash.com/photo-1756723903184-32fed816ea5d?w=1200'
      ],
      metrics: [
        { label: 'Launch Date', value: 'July 2025' },
        { label: 'Platform', value: 'Web' },
        { label: 'Team Size', value: '8-12 people' }
      ]
    }
  },
  {
    id: 'mixboard',
    title: 'Mixboard',
    description: 'A new way to visualize your ideas from Google Labs. Combining creativity with AI.',
    tags: ['Creativity', 'Visualization'],
    featured: true,
    link: 'https://blog.google/technology/google-labs/mixboard/',
    productLink: 'https://labs.google/mixboard',
    image: 'https://images.unsplash.com/photo-1552233697-193249b08f5f?w=800',
    detailContent: {
      heroImage: 'https://images.unsplash.com/photo-1552233697-193249b08f5f?w=1920',
      overview: 'Mixboard transforms how we brainstorm and visualize ideas, combining traditional moodboarding with AI-powered creativity tools.',
      keyPoints: [
        'AI-assisted brainstorming',
        'Visual idea organization',
        'Collaborative creation',
        'Multi-modal content generation',
        'Export and share capabilities'
      ],
      longDescription: `Mixboard is designed for the creative process. Whether you're a designer sketching initial concepts, a marketer planning a campaign, or a product manager exploring new features, Mixboard provides the perfect canvas.

The platform intelligently suggests complementary content, generates variations on themes, and helps organize scattered thoughts into coherent visual narratives. It's like having a creative partner that never runs out of ideas.

Built on Google's latest multimodal AI models, Mixboard understands text, images, and the relationships between them. This allows for truly dynamic brainstorming sessions where AI becomes an active collaborator in the creative process.`,
      images: [
        'https://images.unsplash.com/photo-1558403194-611308249627?w=1200',
        'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200',
        'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200'
      ],
      metrics: [
        { label: 'Launch Date', value: 'September 2025' },
        { label: 'Platform', value: 'Web' },
        { label: 'Primary Users', value: 'Creatives & Marketers' }
      ]
    }
  },
  {
    id: 'pomelli',
    title: 'Pomelli',
    description: 'Help SMBs grow by creating on-brand content for their business.',
    tags: ['SMB', 'Content Gen'],
    featured: true,
    link: 'https://blog.google/technology/google-labs/pomelli/',
    productLink: 'https://labs.google.com/pomelli/about',
    image: 'https://images.unsplash.com/photo-1675119717007-ad04bd2a9d10?w=800',
    detailContent: {
      heroImage: 'https://images.unsplash.com/photo-1675119717007-ad04bd2a9d10?w=1920',
      overview: 'Pomelli empowers small and medium businesses to create professional, on-brand content without needing a design team.',
      keyPoints: [
        'Brand-consistent content generation',
        'Multiple content formats',
        'Social media ready outputs',
        'Simple, intuitive interface',
        'Affordable for SMBs'
      ],
      longDescription: `Small businesses often struggle with content creation. They know they need a strong online presence, but hiring designers and content creators is expensive. Pomelli solves this problem.

By learning a business's brand identity—colors, fonts, tone, and style—Pomelli can generate everything from social media posts to marketing materials that look professionally designed. It's like having an in-house creative team at a fraction of the cost.

The platform is specifically optimized for speed and simplicity. Business owners can generate weeks worth of content in minutes, all while maintaining consistent branding across every piece.`,
      images: [
        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200',
        'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200'
      ],
      metrics: [
        { label: 'Launch Date', value: 'October 2025' },
        { label: 'Target Market', value: 'Small Businesses' },
        { label: 'Content Types', value: '15+' }
      ]
    }
  },
  {
    id: 'mariner',
    title: 'Project Mariner',
    description: 'Exploring the future of human-agent interactions. An AI agent that uses the web for you.',
    tags: ['AI Agents', 'Future Tech'],
    featured: false,
    link: 'https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/#agents-for-developers'
  },
  {
    id: 'ai-studio',
    title: 'Google AI Studio & Gemini API',
    description: "Making Google's most capable models accessible to developers and enterprises.",
    tags: ['Developer Tools', 'API'],
    featured: false,
    link: 'https://blog.google/technology/ai/google-gemini-pro-imagen-duet-ai-update/'
  }
];