import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projectsData } from '../data/projects';
import { pageTransition } from '../utils/animations';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { ParallaxImage } from '../components/ui/ParallaxImage';

export function ProjectPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.id === projectId);

  if (!project || !project.detailContent) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-stone-900 mb-4">
            Project Not Found
          </h1>
          <button
            onClick={() => navigate('/')}
            className="text-rose-500 hover:text-rose-600 font-medium"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  const { detailContent } = project;

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
      className="min-h-screen bg-white"
    >
      {/* Back Button */}
      <div className="fixed top-24 left-6 z-50">
        <motion.button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-lg border border-stone-200 hover:border-rose-300 hover:shadow-xl transition-all text-stone-700 hover:text-rose-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={18} />
          <span className="font-medium">Back</span>
        </motion.button>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <ParallaxImage
          src={detailContent.heroImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full"
          speed={-30}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
                {project.description}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 py-20">
        {/* Overview */}
        <ScrollReveal>
          <div className="max-w-4xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-6">
              Overview
            </h2>
            <p className="text-xl text-stone-600 leading-relaxed">
              {detailContent.overview}
            </p>
          </div>
        </ScrollReveal>

        {/* Key Points */}
        <ScrollReveal delay={0.2}>
          <div className="max-w-4xl mx-auto mb-20">
            <h3 className="text-2xl font-bold text-stone-900 mb-6">
              Key Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {detailContent.keyPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 bg-stone-50 rounded-xl border border-stone-100"
                >
                  <div className="w-2 h-2 rounded-full bg-rose-400 mt-2 flex-shrink-0" />
                  <span className="text-stone-700">{point}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Metrics */}
        {detailContent.metrics && (
          <ScrollReveal delay={0.3}>
            <div className="max-w-4xl mx-auto mb-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {detailContent.metrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-6 bg-gradient-to-br from-rose-50 to-orange-50 rounded-2xl border border-rose-100"
                  >
                    <div className="text-3xl font-bold text-rose-600 mb-2">
                      {metric.value}
                    </div>
                    <div className="text-sm text-stone-600 font-medium">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Long Description */}
        <ScrollReveal delay={0.4}>
          <div className="max-w-4xl mx-auto mb-20">
            <div className="prose prose-lg prose-stone max-w-none">
              {detailContent.longDescription.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-stone-600 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Images Grid */}
        {detailContent.images && detailContent.images.length > 0 && (
          <ScrollReveal delay={0.5}>
            <div className="max-w-6xl mx-auto mb-20">
              <h3 className="text-2xl font-bold text-stone-900 mb-8 text-center">
                Product Gallery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {detailContent.images.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="aspect-video rounded-2xl overflow-hidden shadow-lg border border-stone-100"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Call to Action */}
        <ScrollReveal delay={0.6}>
          <div className="max-w-2xl mx-auto text-center">
            <div className="p-8 bg-gradient-to-br from-rose-50 via-white to-orange-50 rounded-3xl border border-rose-100 shadow-lg">
              <h3 className="text-2xl font-bold text-stone-900 mb-4">
                Explore {project.title}
              </h3>
              <p className="text-stone-600 mb-6">
                Want to learn more or try it yourself?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {project.productLink && (
                  <a
                    href={project.productLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white rounded-full font-medium hover:shadow-lg transition-all"
                  >
                    Visit Website <ExternalLink size={16} />
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-stone-800 border-2 border-rose-200 rounded-full font-medium hover:bg-rose-50 transition-all"
                  >
                    Read Announcement <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </motion.div>
  );
}
