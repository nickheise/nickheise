import { ArrowRight, ExternalLink } from 'lucide-react';
import { projectsData } from '../../data/projects';
import WaveDivider from '../WaveDivider';
import { getSectionConfig, getWaveColors } from '../../utils/sectionConfig';
import { SectionHeader } from '../design-system/SectionHeader';

export default function FeaturedWork() {
  const featuredProjects = projectsData.filter(p => p.featured);
  const config = getSectionConfig('work');
  const waveColors = getWaveColors('work');

  const handleProjectClick = (e: React.MouseEvent, projectId: string) => {
    e.preventDefault();
    window.location.hash = `project/${projectId}`;
  };

  return (
    <section id="work" className={`py-20 pb-48 ${config.bgClass} relative z-20 transition-colors duration-300`}>{/* Remove waveTop since waves only go at bottom */}

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <SectionHeader
          title="Featured Work"
          description="Highlights from my recent work at Google Labs, focusing on creative tools and AI applications."
        />

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <button
              key={project.id}
              onClick={(e) => handleProjectClick(e, project.id)}
              className="scroll-reveal group flex flex-col bg-white dark:bg-stone-800 rounded-3xl overflow-hidden shadow-sm border border-stone-200 dark:border-stone-600 hover:shadow-md dark:hover:shadow-black/50 transition-all duration-300 h-full cursor-pointer text-left"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="block aspect-video overflow-hidden bg-stone-200 dark:bg-stone-700 relative">
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                )}
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-stone-50 dark:bg-stone-900 px-3 py-1 rounded-full text-xs font-medium text-stone-500 dark:text-stone-300 shadow-sm border border-stone-100 dark:border-stone-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-bold text-stone-900 dark:text-stone-100 mb-2 group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-stone-600 dark:text-stone-300 leading-relaxed mb-6 flex-1 transition-colors">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <span className="text-sm font-bold text-stone-900 dark:text-stone-100 group-hover:text-rose-500 dark:group-hover:text-rose-400 flex items-center gap-1 transition-colors">
                    View Project <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Wave Divider */}
      {config.waveBottom && (
        <WaveDivider 
          position="bottom" 
          fromColor={waveColors.fromColor}
          toColor={waveColors.toColor}
          fromColorDark={waveColors.fromColorDark}
          toColorDark={waveColors.toColorDark}
          variant={config.waveVariant}
        />
      )}
    </section>
  );
}