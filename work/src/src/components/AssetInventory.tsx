import { ArrowLeft, ClipboardList, Palette, Waves, FolderOpen } from 'lucide-react';
import { projectsData } from '../data/projects';
import { imagePanelData } from '../data/images';

interface AssetInventoryProps {
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

export default function AssetInventory({ onNavigateBack }: AssetInventoryProps) {
  // Compile all assets from the site
  const assets: AssetItem[] = [
    // Hero Section
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
      purpose: 'Main hero photo/portrait (rotating carousel)',
      currentSource: 'Google Drive - 4 art photos (Reality, Pen Art, Watercolor, Acrylic)',
      dimensions: '280px mobile, ~500px desktop (4:5 mobile, square desktop)',
      format: 'JPG from Google Drive',
      notes: 'Currently displays rotating art photos. Alternative: Professional headshot available at figma:asset/6717c6f9763f28225cc75418e9f3fdf6385c6a90.png'
    },
    
    // Speaking Events
    ...imagePanelData.speaking.map((src, index) => ({
      id: `speaking-${index}`,
      location: 'Speaking Events Carousel',
      purpose: `Event photo ${index + 1}`,
      currentSource: src,
      dimensions: '400x300px (4:3 aspect ratio)',
      format: 'JPG/WebP',
      notes: 'Conference/speaking/networking event photos. Currently using Unsplash stock images.'
    })),

    // Featured Work - Card Images
    ...projectsData.filter(p => p.featured).map((project, index) => ({
      id: `project-card-${project.id}`,
      location: 'Featured Work Section',
      purpose: `Project card thumbnail - ${project.title}`,
      currentSource: project.image || 'Not set',
      dimensions: '800x600px (4:3 aspect ratio)',
      format: 'JPG/WebP',
      notes: `Card image for ${project.title}. Should represent the product/project visually`
    })),

    // Project Detail Pages - Hero Images
    ...projectsData.filter(p => p.featured && p.detailContent).map((project) => ({
      id: `project-hero-${project.id}`,
      location: `Project Detail: ${project.title}`,
      purpose: 'Hero image (large banner at top)',
      currentSource: project.detailContent!.heroImage,
      dimensions: '1920x1080px (16:9 aspect ratio)',
      format: 'JPG/WebP',
      notes: `Main hero image for ${project.title} case study. High quality, prominent placement`
    })),

    // Project Detail Pages - Gallery Images
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
          notes: `Product showcase image ${idx + 1} for ${project.title}`
        }))
      ),

    // Experience Timeline Company Logos
    {
      id: 'timeline-logos',
      location: 'Experience Timeline',
      purpose: 'Company logos for each position',
      currentSource: 'Not implemented yet',
      dimensions: '200x200px (square)',
      format: 'PNG/SVG',
      notes: 'Company logos for: Amazon, Meta, Google, Microsoft, IBM. Consider adding these to timeline items'
    },

    // Bio Section
    {
      id: 'bio-portrait',
      location: 'Bio Section',
      purpose: 'Professional headshot/portrait',
      currentSource: 'Not implemented yet',
      dimensions: '600x800px (3:4 portrait)',
      format: 'JPG/WebP',
      notes: 'Professional photo for bio section. Currently not displayed, but could be added'
    },

    // Side Projects & Interests
    {
      id: 'side-projects-images',
      location: 'Side Projects Section',
      purpose: 'Visual representations of hobbies/interests',
      currentSource: 'Not implemented yet',
      dimensions: '400x400px (square)',
      format: 'JPG/WebP',
      notes: 'Could add images for side projects if desired'
    }
  ];

  // Group assets by section
  const groupedAssets = assets.reduce((acc, asset) => {
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
            Asset Inventory
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
            <div className="mb-12 p-6 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
              <h2 className="text-2xl font-serif font-bold text-amber-900 dark:text-amber-100 mb-3">
                📋 Image Replacement Guide
              </h2>
              <p className="text-amber-800 dark:text-amber-200 mb-3">
                This page catalogs all images and graphical elements used across the site. Use this as a reference when replacing placeholder images with real content.
              </p>
              <div className="text-sm text-amber-700 dark:text-amber-300">
                <strong>Total Assets:</strong> {assets.length} items across {Object.keys(groupedAssets).length} sections
              </div>
            </div>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
              <div className="p-6 bg-white dark:bg-stone-800 rounded-xl border border-stone-200 dark:border-stone-700">
                <div className="text-3xl font-bold text-rose-500 mb-2">
                  {assets.filter(a => a.currentSource.includes('unsplash')).length}
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
                  {assets.filter(a => a.format === 'CSS/SVG shapes').length}
                </div>
                <div className="text-sm text-stone-600 dark:text-stone-400">CSS/SVG Elements</div>
              </div>
            </div>

            {/* Grouped Asset Tables */}
            {Object.entries(groupedAssets).map(([location, items]) => (
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

            {/* Icon Library Info */}
            <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl">
              <h2 className="text-xl font-serif font-bold text-blue-900 dark:text-blue-100 mb-3">
                🎨 Icon Library
              </h2>
              <p className="text-blue-800 dark:text-blue-200 mb-3">
                All icons are from <strong>Lucide React</strong> - a clean, consistent icon library. No image replacements needed.
              </p>
              <div className="text-sm text-blue-700 dark:text-blue-300">
                <strong>Icons used:</strong> ArrowLeft, ArrowRight, ExternalLink, Moon, Sun, Calendar, MapPin, Award, Users, Mail, Linkedin, Twitter, Github, and more.
              </div>
            </div>

            {/* SVG Elements Info */}
            <div className="mt-6 p-6 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-xl">
              <h2 className="text-xl font-serif font-bold text-purple-900 dark:text-purple-100 mb-3">
                🌊 SVG Wave Dividers
              </h2>
              <p className="text-purple-800 dark:text-purple-200 mb-3">
                Wave dividers between sections are generated SVG components with color transitions. No image files needed.
              </p>
              <div className="text-sm text-purple-700 dark:text-purple-300">
                <strong>Component:</strong> WaveDivider.tsx with 5 variants
              </div>
            </div>

            {/* Image Guidelines */}
            <div className="mt-6 p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
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

            {/* File Location Reference */}
            <div className="mt-6 p-6 bg-stone-100 dark:bg-stone-800 border border-stone-300 dark:border-stone-600 rounded-xl">
              <h2 className="text-xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-3">
                📁 File Locations to Update
              </h2>
              <div className="space-y-2 text-sm font-mono text-stone-700 dark:text-stone-300">
                <div>• <strong>Speaking Events:</strong> /src/data/images.ts (imagePanelData.speaking array)</div>
                <div>• <strong>Project Cards & Details:</strong> /src/data/projects.ts</div>
                <div>• <strong>Future Images:</strong> Store in /public/images/ folder</div>
                <div>• <strong>Hero Section Art Photos:</strong> /src/components/sections/Hero.tsx (artImages array)</div>
                <div>• <strong>Blog Articles & Featured Images:</strong> /src/data/articles.ts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}