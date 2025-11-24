import { useState } from 'react';
import { ArrowLeft, Image as ImageIcon, Type, ClipboardList, Lightbulb, Palette, FileText, FolderOpen, Target, CheckCircle, Pen } from 'lucide-react';
import { projectsData } from '../data/projects';
import { imagePanelData } from '../data/images';

interface ContentInventoryProps {
  onNavigateBack: () => void;
}

interface AssetItem {
  id: string;
  location: string;
  purpose: string;
  currentSource: string;
  dimensions: string;
  format: string;
  notes: string;
}

interface TextContentItem {
  id: string;
  section: string;
  contentType: string;
  fileLocation: string;
  description: string;
  notes: string;
}

export default function ContentInventory({ onNavigateBack }: ContentInventoryProps) {
  const [activeTab, setActiveTab] = useState<'text' | 'images' | 'colors' | 'fonts'>('text');

  // Text Content Inventory
  const textContent: TextContentItem[] = [
    {
      id: 'hero-text',
      section: 'Hero Section',
      contentType: 'Main headline, tagline, CTA text',
      fileLocation: '/src/components/sections/Hero.tsx',
      description: 'Primary landing section with headline, subheadline, and introduction text',
      notes: 'Update the heading, subtitle, and description text directly in the component. The rotating art images are also defined here in the artImages array.'
    },
    {
      id: 'company-logos',
      section: 'Company Logos',
      contentType: 'Section heading',
      fileLocation: '/src/components/sections/CompanyLogos.tsx',
      description: 'Carousel section showing previous company logos with heading text',
      notes: 'Update the section title and any descriptive text. Logo images themselves are in /src/components/logos/'
    },
    {
      id: 'featured-work',
      section: 'Featured Work',
      contentType: 'Section heading, project titles, descriptions, tags, case study content',
      fileLocation: '/src/data/projects.ts',
      description: 'All project information including card data and detailed case study content',
      notes: 'This is the main data file for all projects. Each project has: title, company, role, description, tags, image, and optional detailContent for case study pages.'
    },
    {
      id: 'experience',
      section: 'Experience Timeline',
      contentType: 'Job titles, companies, dates, descriptions',
      fileLocation: '/src/data/experience.ts',
      description: 'Professional experience timeline with positions, responsibilities, and achievements',
      notes: 'Array of experience items with company, role, period, location, description, and highlights'
    },
    {
      id: 'press',
      section: 'Press & Speaking',
      contentType: 'Conference names, talk titles, descriptions',
      fileLocation: '/src/components/sections/PressSection.tsx',
      description: 'Speaking engagements, conference talks, and press mentions',
      notes: 'Update the events array with conference details, talk titles, dates, and locations'
    },
    {
      id: 'patents',
      section: 'Patents & Innovation',
      contentType: 'Patent titles, descriptions, status',
      fileLocation: '/src/components/sections/PatentsSection.tsx',
      description: 'Intellectual property and innovation achievements',
      notes: 'Patents array contains title, description, status, year, and optional patent number'
    },
    {
      id: 'bio',
      section: 'Bio Section',
      contentType: 'Personal bio, background story, philosophy',
      fileLocation: '/src/components/sections/BioSection.tsx',
      description: 'Personal background, design philosophy, and professional journey',
      notes: 'Long-form biographical content with personal story and professional values'
    },
    {
      id: 'personal',
      section: 'Side Projects & Interests',
      contentType: 'Hobby titles, descriptions',
      fileLocation: '/src/components/sections/PersonalSection.tsx',
      description: 'Personal interests, hobbies, and side projects',
      notes: 'Array of interests with titles, descriptions, and icons'
    },
    {
      id: 'faq',
      section: 'FAQ Section',
      contentType: 'Questions and answers',
      fileLocation: '/src/components/sections/FAQ.tsx',
      description: 'Frequently asked questions about role, skills, and approach',
      notes: 'faqs array with question and answer pairs. Update directly in the component.'
    },
    {
      id: 'footer',
      section: 'Footer / Let\'s Connect',
      contentType: 'Contact heading, description, social links',
      fileLocation: '/src/components/layout/Footer.tsx',
      description: 'Footer contact section with email and social media links',
      notes: 'Update contact information, social media handles, and footer text'
    },
    {
      id: 'blog',
      section: 'Blog Articles',
      contentType: 'Article titles, content, metadata',
      fileLocation: '/src/data/articles.ts',
      description: 'Blog posts with full content, featured images, tags, and metadata',
      notes: 'Array of articles with title, slug, excerpt, content (rich text with sections), author, date, tags, and featuredImage'
    }
  ];

  // Image Content Inventory
  const imageAssets: AssetItem[] = [
    {
      id: 'hero-bg',
      location: 'Hero Section',
      purpose: 'Background decorative blobs',
      currentSource: 'CSS-generated (no image)',
      dimensions: 'Varies (responsive)',
      format: 'CSS/SVG shapes',
      notes: 'Animated floating blobs - purely CSS, no image needed'
    },
    {
      id: 'hero-photo',
      location: 'Hero Section',
      purpose: 'Main hero stacked photo cards (4 art photos with interactive hover effect)',
      currentSource: 'Google Drive - 4 art photos (Reality, Pen Art, Watercolor, Acrylic)',
      dimensions: '202px mobile, 246px tablet, 275px desktop (3:4 portrait aspect ratio)',
      format: 'JPG from Google Drive',
      notes: 'Interactive stacked card effect with bidirectional rotation on hover. Cards have white 8px borders. Alternative: Professional headshot available at figma:asset/6717c6f9763f28225cc75418e9f3fdf6385c6a90.png. Update in /src/components/sections/Hero.tsx (artImages array)'
    },
    
    ...imagePanelData.speaking.map((src, index) => ({
      id: `speaking-${index}`,
      location: 'Speaking Events Carousel',
      purpose: `Event photo ${index + 1}`,
      currentSource: src,
      dimensions: '400x300px (4:3 aspect ratio)',
      format: 'JPG/WebP',
      notes: 'Conference/speaking/networking event photos. Update in /src/data/images.ts (imagePanelData.speaking array)'
    })),

    ...projectsData.filter(p => p.featured).map((project) => ({
      id: `project-card-${project.id}`,
      location: 'Featured Work Section',
      purpose: `Project card thumbnail - ${project.title}`,
      currentSource: project.image || 'Not set',
      dimensions: '800x600px (4:3 aspect ratio)',
      format: 'JPG/WebP',
      notes: `Card image for ${project.title}. Update in /src/data/projects.ts`
    })),

    ...projectsData.filter(p => p.featured && p.detailContent).map((project) => ({
      id: `project-hero-${project.id}`,
      location: `Project Detail: ${project.title}`,
      purpose: 'Hero image (large banner at top)',
      currentSource: project.detailContent!.heroImage,
      dimensions: '1920x1080px (16:9 aspect ratio)',
      format: 'JPG/WebP',
      notes: `Main hero image for ${project.title} case study. Update in /src/data/projects.ts (detailContent.heroImage)`
    })),

    ...projectsData
      .filter(p => p.featured && p.detailContent && p.detailContent.images)
      .flatMap((project) => 
        project.detailContent!.images!.map((image, idx) => ({
          id: `project-gallery-${project.id}-${idx}`,
          location: `Project Detail: ${project.title} - Gallery`,
          purpose: `Gallery image ${idx + 1}`,
          currentSource: image,
          dimensions: '1200x800px (3:2 aspect ratio)',
          format: 'JPG/WebP',
          notes: `Product showcase image ${idx + 1} for ${project.title}. Update in /src/data/projects.ts (detailContent.images array)`
        }))
      ),

    {
      id: 'timeline-logos',
      location: 'Experience Timeline',
      purpose: 'Company logos for each position',
      currentSource: 'Not implemented yet',
      dimensions: '200x200px (square)',
      format: 'PNG/SVG',
      notes: 'Company logos for: Amazon, Meta, Google, Microsoft, IBM. Could be added to /src/data/experience.ts'
    },

    {
      id: 'blog-featured-images',
      location: 'Blog Articles',
      purpose: 'Featured images for blog posts',
      currentSource: 'Various Unsplash images',
      dimensions: '1200x630px (16:9 aspect ratio)',
      format: 'JPG/WebP',
      notes: 'Update in /src/data/articles.ts (featuredImage property for each article)'
    }
  ];

  const groupedTextContent = textContent.reduce((acc, item) => {
    if (!acc[item.section]) {
      acc[item.section] = [];
    }
    acc[item.section].push(item);
    return acc;
  }, {} as Record<string, TextContentItem[]>);

  const groupedImageAssets = imageAssets.reduce((acc, asset) => {
    const location = asset.location;
    if (!acc[location]) {
      acc[location] = [];
    }
    acc[location].push(asset);
    return acc;
  }, {} as Record<string, AssetItem[]>);

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-900 transition-colors">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-stone-900 backdrop-blur-md shadow-sm border-b border-stone-200 dark:border-stone-800 transition-all duration-300 py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-serif font-bold text-stone-800 dark:text-stone-100">
            Content Inventory
          </h1>
          <button
            onClick={onNavigateBack}
            className="flex items-center gap-2 text-stone-600 dark:text-stone-300 hover:text-rose-500 dark:hover:text-rose-400 font-medium transition-colors text-sm uppercase tracking-wider"
          >
            <ArrowLeft size={16} />
            <span>Back</span>
          </button>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Introduction */}
            <div className="mb-8 p-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <div className="flex items-start gap-3">
                <ClipboardList className="text-amber-600 dark:text-amber-400 flex-shrink-0 mt-1" size={24} />
                <div className="flex-1">
                  <h2 className="text-2xl font-serif font-bold text-amber-900 dark:text-amber-100 mb-3">
                    Content Replacement Guide
                  </h2>
                  <p className="text-amber-800 dark:text-amber-200 mb-3">
                    This inventory catalogs all text content and images used across the site. Use this as a reference when replacing placeholder content with your own.
                  </p>
                  <div className="text-sm text-amber-700 dark:text-amber-300">
                    <strong>Total:</strong> {textContent.length} text sections • {imageAssets.length} image assets
                  </div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="mb-8">
              <div className="border-b border-stone-200 dark:border-stone-700">
                <div className="flex flex-wrap gap-4 md:gap-8">
                  <button
                    onClick={() => setActiveTab('text')}
                    className={`flex items-center gap-2 pb-4 px-1 border-b-2 font-medium transition-colors ${
                      activeTab === 'text'
                        ? 'border-rose-500 text-rose-600 dark:text-rose-400'
                        : 'border-transparent text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300'
                    }`}
                  >
                    <FileText size={20} />
                    <span>Text Content</span>
                    <span className="ml-1 px-2 py-0.5 bg-stone-200 dark:bg-stone-700 rounded-full text-xs">
                      {textContent.length}
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveTab('images')}
                    className={`flex items-center gap-2 pb-4 px-1 border-b-2 font-medium transition-colors ${
                      activeTab === 'images'
                        ? 'border-rose-500 text-rose-600 dark:text-rose-400'
                        : 'border-transparent text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300'
                    }`}
                  >
                    <ImageIcon size={20} />
                    <span>Image Assets</span>
                    <span className="ml-1 px-2 py-0.5 bg-stone-200 dark:bg-stone-700 rounded-full text-xs">
                      {imageAssets.length}
                    </span>
                  </button>
                  <button
                    onClick={() => setActiveTab('colors')}
                    className={`flex items-center gap-2 pb-4 px-1 border-b-2 font-medium transition-colors ${
                      activeTab === 'colors'
                        ? 'border-rose-500 text-rose-600 dark:text-rose-400'
                        : 'border-transparent text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300'
                    }`}
                  >
                    <Palette size={20} />
                    <span>Colors</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('fonts')}
                    className={`flex items-center gap-2 pb-4 px-1 border-b-2 font-medium transition-colors ${
                      activeTab === 'fonts'
                        ? 'border-rose-500 text-rose-600 dark:text-rose-400'
                        : 'border-transparent text-stone-500 dark:text-stone-400 hover:text-stone-700 dark:hover:text-stone-300'
                    }`}
                  >
                    <Type size={20} />
                    <span>Fonts</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Text Content Tab */}
            {activeTab === 'text' && (
              <div>
                {Object.entries(groupedTextContent).map(([section, items]) => (
                  <div key={section} className="mb-12">
                    <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4 flex items-center gap-3">
                      <span className="w-2 h-8 bg-rose-500 rounded"></span>
                      {section}
                      <span className="text-sm font-normal text-stone-500 dark:text-stone-400">
                        ({items.length} {items.length === 1 ? 'item' : 'items'})
                      </span>
                    </h2>

                    <div className="bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-stone-100 dark:bg-stone-900">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wider w-1/5">
                                Content Type
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wider w-1/4">
                                File Location
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wider w-1/4">
                                Description
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wider w-1/3">
                                Notes
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-stone-200 dark:divide-stone-700">
                            {items.map((item, index) => (
                              <tr key={item.id} className={index % 2 === 0 ? 'bg-white dark:bg-stone-800' : 'bg-stone-50 dark:bg-stone-800/50'}>
                                <td className="px-4 py-4 text-sm text-stone-900 dark:text-stone-100">
                                  {item.contentType}
                                </td>
                                <td className="px-4 py-4 text-sm">
                                  <code className="px-2 py-1 bg-stone-200 dark:bg-stone-700 rounded text-xs font-mono text-stone-800 dark:text-stone-200">
                                    {item.fileLocation}
                                  </code>
                                </td>
                                <td className="px-4 py-4 text-sm text-stone-600 dark:text-stone-400">
                                  {item.description}
                                </td>
                                <td className="px-4 py-4 text-sm text-stone-600 dark:text-stone-400">
                                  {item.notes}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Quick Reference */}
                <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" size={20} />
                    <div className="flex-1">
                      <h2 className="text-xl font-serif font-bold text-blue-900 dark:text-blue-100 mb-3">
                        Quick Tips
                      </h2>
                      <ul className="space-y-2 text-blue-800 dark:text-blue-200 text-sm">
                        <li>• Most text content is in <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900 rounded text-xs font-mono">/src/data/</code> folder or directly in component files</li>
                        <li>• Search for specific text in your code editor to find exact locations</li>
                        <li>• Component files in <code className="px-1.5 py-0.5 bg-blue-100 dark:bg-blue-900 rounded text-xs font-mono">/src/components/sections/</code> contain section-specific content</li>
                        <li>• Data files are structured as TypeScript objects/arrays for easy editing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Image Assets Tab */}
            {activeTab === 'images' && (
              <div>
                {/* Statistics Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
                  <div className="p-6 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700">
                    <div className="text-3xl font-bold text-rose-500 mb-2">
                      {imageAssets.filter(a => a.currentSource.includes('unsplash')).length}
                    </div>
                    <div className="text-sm text-stone-600 dark:text-stone-400">Unsplash Images</div>
                  </div>
                  <div className="p-6 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700">
                    <div className="text-3xl font-bold text-rose-500 mb-2">
                      {projectsData.filter(p => p.featured).length}
                    </div>
                    <div className="text-sm text-stone-600 dark:text-stone-400">Featured Projects</div>
                  </div>
                  <div className="p-6 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700">
                    <div className="text-3xl font-bold text-rose-500 mb-2">
                      {imagePanelData.speaking.length}
                    </div>
                    <div className="text-sm text-stone-600 dark:text-stone-400">Speaking Events</div>
                  </div>
                  <div className="p-6 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700">
                    <div className="text-3xl font-bold text-rose-500 mb-2">
                      {imageAssets.filter(a => a.format === 'CSS/SVG shapes').length}
                    </div>
                    <div className="text-sm text-stone-600 dark:text-stone-400">CSS/SVG Elements</div>
                  </div>
                </div>

                {Object.entries(groupedImageAssets).map(([location, items]) => (
                  <div key={location} className="mb-12">
                    <h2 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-4 flex items-center gap-3">
                      <span className="w-2 h-8 bg-rose-500 rounded"></span>
                      {location}
                      <span className="text-sm font-normal text-stone-500 dark:text-stone-400">
                        ({items.length} {items.length === 1 ? 'asset' : 'assets'})
                      </span>
                    </h2>

                    <div className="bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700 overflow-hidden">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead className="bg-stone-100 dark:bg-stone-900">
                            <tr>
                              <th className="px-4 py-3 text-left text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wider">
                                Purpose
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wider">
                                Current Source
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wider">
                                Dimensions
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wider">
                                Format
                              </th>
                              <th className="px-4 py-3 text-left text-xs font-bold text-stone-600 dark:text-stone-300 uppercase tracking-wider">
                                Notes
                              </th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-stone-200 dark:divide-stone-700">
                            {items.map((asset, index) => (
                              <tr key={asset.id} className={index % 2 === 0 ? 'bg-white dark:bg-stone-800' : 'bg-stone-50 dark:bg-stone-800/50'}>
                                <td className="px-4 py-4 text-sm text-stone-900 dark:text-stone-100">
                                  {asset.purpose}
                                </td>
                                <td className="px-4 py-4 text-sm">
                                  {asset.currentSource.includes('unsplash') ? (
                                    <a
                                      href={asset.currentSource}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-600 dark:text-blue-400 hover:underline break-all"
                                    >
                                      View on Unsplash →
                                    </a>
                                  ) : (
                                    <span className="text-stone-600 dark:text-stone-400">{asset.currentSource}</span>
                                  )}
                                </td>
                                <td className="px-4 py-4 text-sm text-stone-700 dark:text-stone-300 whitespace-nowrap">
                                  {asset.dimensions}
                                </td>
                                <td className="px-4 py-4 text-sm">
                                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200">
                                    {asset.format}
                                  </span>
                                </td>
                                <td className="px-4 py-4 text-sm text-stone-600 dark:text-stone-400">
                                  {asset.notes}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Image Guidelines */}
                <div className="mt-8 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                  <h2 className="text-xl font-serif font-bold text-green-900 dark:text-green-100 mb-3">
                    ✅ Image Replacement Guidelines
                  </h2>
                  <ul className="space-y-2 text-green-800 dark:text-green-200 text-sm">
                    <li>• <strong>Format:</strong> Use WebP for best performance, with JPG fallback</li>
                    <li>• <strong>Optimization:</strong> Compress images (aim for &lt;200KB for cards, &lt;500KB for heroes)</li>
                    <li>• <strong>Resolution:</strong> Provide 2x resolution for retina displays</li>
                    <li>• <strong>Aspect Ratios:</strong> Maintain the aspect ratios listed above for proper display</li>
                    <li>• <strong>Alt Text:</strong> Update alt text in the code when replacing images</li>
                    <li>• <strong>Dark Mode:</strong> Test all images in both light and dark modes</li>
                  </ul>
                </div>

                {/* Navigation System */}
                <div>
                  <div className="p-8 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
                    <h2 className="text-3xl font-serif font-bold text-green-900 dark:text-green-100 mb-4">
                      🧭 Navigation System
                    </h2>
                    <p className="text-green-800 dark:text-green-200 mb-6">
                      Centralized navigation configuration with performance and accessibility optimizations. See <code className="px-2 py-1 bg-green-100 dark:bg-green-900 rounded text-sm font-mono">/NAVIGATION_GUIDE.md</code> for complete documentation.
                    </p>
                    
                    <div className="space-y-6">
                      <div>
                        <div className="text-sm font-medium text-green-900 dark:text-green-100 mb-3">
                          📁 File Location:
                        </div>
                        <code className="px-4 py-3 bg-green-100 dark:bg-green-900/50 rounded text-sm font-mono text-green-800 dark:text-green-200 block">
                          /src/components/layout/Header.tsx
                        </code>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-green-900 dark:text-green-100 mb-3">
                          🎯 How to Add Nav Items:
                        </div>
                        <div className="bg-green-100 dark:bg-green-900/50 rounded p-4">
                          <p className="text-green-800 dark:text-green-200 mb-2 text-sm">Edit the <code className="px-1.5 py-0.5 bg-green-200 dark:bg-green-800 rounded text-xs font-mono">NAV_CONFIG</code> object:</p>
                          <pre className="text-xs font-mono text-green-800 dark:text-green-200 overflow-x-auto">
{`const NAV_CONFIG = {
  mainItems: [
    { 
      name: 'New Section',
      href: '#new-section',
      ariaLabel: 'Navigate to new section'
    }
  ]
}`}
                          </pre>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-green-900 dark:text-green-100 mb-3">
                          ✨ Key Features:
                        </div>
                        <ul className="space-y-2 text-green-800 dark:text-green-200">
                          <li>• <strong>Performance:</strong> RequestAnimationFrame scroll detection, passive listeners</li>
                          <li>• <strong>Accessibility:</strong> ARIA labels, keyboard navigation, screen reader support</li>
                          <li>• <strong>Responsive:</strong> Desktop horizontal nav, mobile full-screen menu</li>
                          <li>• <strong>Animations:</strong> Pure CSS (60fps), no animation libraries</li>
                          <li>• <strong>Scalable:</strong> Centralized config, easy to maintain</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Colors Tab */}
            {activeTab === 'colors' && (
              <div>
                <div className="p-8 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
                  <h2 className="text-3xl font-serif font-bold text-purple-900 dark:text-purple-100 mb-4">
                    🎨 Color System
                  </h2>
                  <p className="text-purple-800 dark:text-purple-200 mb-6">
                    The site uses a stone color palette with rose accents. Update colors in the global stylesheet.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm font-medium text-purple-900 dark:text-purple-100 mb-3">
                        📁 File Location:
                      </div>
                      <code className="px-4 py-3 bg-purple-100 dark:bg-purple-900/50 rounded text-sm font-mono text-purple-800 dark:text-purple-200 block">
                        /src/styles/globals.css
                      </code>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-purple-900 dark:text-purple-100 mb-3">
                        🎯 What to Update:
                      </div>
                      <ul className="space-y-2 text-purple-800 dark:text-purple-200">
                        <li>• <strong>Primary Colors:</strong> Update stone-* values (backgrounds, text, borders)</li>
                        <li>• <strong>Accent Colors:</strong> Update rose-* values (buttons, hover states, highlights)</li>
                        <li>• <strong>Supporting Colors:</strong> Update amber-*, blue-*, green-* values (alerts, info boxes)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Fonts Tab */}
            {activeTab === 'fonts' && (
              <div>
                <div className="p-8 bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl">
                  <h2 className="text-3xl font-serif font-bold text-indigo-900 dark:text-indigo-100 mb-4">
                    ✍️ Typography & Fonts
                  </h2>
                  <p className="text-indigo-800 dark:text-indigo-200 mb-6">
                    The site uses Inter for body text and Playfair Display for headings. Font definitions are in the global stylesheet.
                  </p>
                  <div className="space-y-6">
                    <div>
                      <div className="text-sm font-medium text-indigo-900 dark:text-indigo-100 mb-3">
                        📁 File Location:
                      </div>
                      <code className="px-4 py-3 bg-indigo-100 dark:bg-indigo-900/50 rounded text-sm font-mono text-indigo-800 dark:text-indigo-200 block">
                        /src/styles/globals.css
                      </code>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-indigo-900 dark:text-indigo-100 mb-3">
                        🎯 Current Font Stack:
                      </div>
                      <ul className="space-y-2 text-indigo-800 dark:text-indigo-200">
                        <li>• <strong>Body Text (Sans):</strong> Inter (Google Fonts) - imported at top of globals.css</li>
                        <li>• <strong>Headings (Serif):</strong> Playfair Display (Google Fonts) - imported at top of globals.css</li>
                        <li>• <strong>Font Classes:</strong> Use <code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900 rounded text-xs font-mono">font-serif</code> for headings/Playfair</li>
                      </ul>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-indigo-900 dark:text-indigo-100 mb-3">
                        💡 How to Update:
                      </div>
                      <ul className="space-y-2 text-indigo-800 dark:text-indigo-200">
                        <li>1. Replace the Google Fonts @import URLs at the top of globals.css</li>
                        <li>2. Update the <code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900 rounded text-xs font-mono">--font-sans</code> and <code className="px-1.5 py-0.5 bg-indigo-100 dark:bg-indigo-900 rounded text-xs font-mono">--font-serif</code> CSS variables</li>
                        <li>3. Font weights, sizes, and line-heights are defined in the typography section of globals.css</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}