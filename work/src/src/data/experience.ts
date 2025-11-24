export interface Experience {
  id: string;
  company: string;
  title: string;
  startDate: string;
  endDate: string;
  milestones: string[];
}

export const experienceData: Experience[] = [
  {
    id: 'google-director',
    company: 'Google',
    title: 'Director of Product Management, Google Labs',
    startDate: '2024',
    endDate: 'Present',
    milestones: [
      'Leading product strategy for AI-powered creative tools',
      'Managing cross-functional teams across engineering, design, and research',
      'Driving innovation in generative AI product development',
      'Expanding Google Labs portfolio with new experimental products',
      'Building partnerships with creative communities and enterprises',
      'Shaping the future of AI-assisted content creation',
      'Mentoring senior product managers and growing the team'
    ]
  },
  {
    id: 'google-group-pm',
    company: 'Google',
    title: 'Group Product Manager, Google Labs',
    startDate: '2022',
    endDate: '2024',
    milestones: [
      'Launched multiple AI experiments reaching millions of users',
      'Built and scaled product teams for creative AI initiatives',
      'Established product development frameworks for rapid experimentation',
      'Collaborated with Google Research on cutting-edge AI technologies'
    ]
  },
  {
    id: 'google-pm-assistant',
    company: 'Google',
    title: 'Product Manager, Google Assistant',
    startDate: '2017',
    endDate: '2022',
    milestones: [
      'Led product development for Google Assistant\'s conversational features',
      'Shipped features used by hundreds of millions of users globally',
      'Drove 0-1 initiatives in voice AI and natural language understanding',
      'Partnered with hardware teams on Assistant integration',
      'Developed go-to-market strategies for new Assistant capabilities',
      'Led cross-functional product launches across multiple markets',
      'Established metrics and analytics frameworks for feature performance'
    ]
  },
  {
    id: 'weebly-group-pm',
    company: 'Weebly',
    title: 'Group Product Manager',
    startDate: '2016',
    endDate: '2017',
    milestones: [
      'Managed product portfolio for website building platform'
    ]
  },
  {
    id: 'weebly-senior-pm',
    company: 'Weebly',
    title: 'Senior Product Manager',
    startDate: '2014',
    endDate: '2016',
    milestones: [
      'Led product initiatives for small business tools'
    ]
  },
  {
    id: 'amulyte',
    company: 'Amulyte (YC W13)',
    title: 'Co-Founder',
    startDate: '2013',
    endDate: '2014',
    milestones: [
      'Founded Y Combinator-backed startup focused on health tech'
    ]
  },
  {
    id: 'microsoft-pm',
    company: 'Microsoft',
    title: 'Product Manager, Office',
    startDate: '2011',
    endDate: '2013',
    milestones: [
      'Drove product development for Microsoft Office features',
      'Collaborated with engineering teams on Office 365 initiatives'
    ]
  },
  {
    id: 'amazon-pm',
    company: 'Amazon',
    title: 'Product Manager',
    startDate: '2009',
    endDate: '2011',
    milestones: [
      'Managed e-commerce product features and customer experiences'
    ]
  }
];
