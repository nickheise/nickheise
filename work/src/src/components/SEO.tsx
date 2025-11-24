import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    tags?: string[];
  };
}

const defaultSEO = {
  title: 'Jaclyn Konzelmann - Director of Product Management at Google Labs',
  description: 'Director of Product Management at Google Labs, focusing on creative tools and AI applications. Expert in product strategy, innovation, and bringing cutting-edge technology to creative professionals.',
  image: 'https://www.jaclynkonzelmann.com/og-image.jpg', // You'll need to add this
  url: 'https://www.jaclynkonzelmann.com',
  type: 'profile' as const
};

export function SEO({ 
  title = defaultSEO.title, 
  description = defaultSEO.description,
  image = defaultSEO.image,
  url = defaultSEO.url,
  type = defaultSEO.type,
  article
}: SEOProps) {
  const fullTitle = title === defaultSEO.title ? title : `${title} | Jaclyn Konzelmann`;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      
      {/* Keywords for AI Crawlers */}
      <meta name="keywords" content="Jaclyn Konzelmann, Product Management, Google Labs, AI Products, Creative Tools, Innovation, Technology Leadership, UX Design, Product Strategy" />
      <meta name="author" content="Jaclyn Konzelmann" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Jaclyn Konzelmann" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article-specific Open Graph tags */}
      {type === 'article' && article && (
        <>
          {article.publishedTime && (
            <meta property="article:published_time" content={article.publishedTime} />
          )}
          {article.modifiedTime && (
            <meta property="article:modified_time" content={article.modifiedTime} />
          )}
          {article.author && (
            <meta property="article:author" content={article.author} />
          )}
          {article.tags?.map(tag => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Additional SEO */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      
      {/* Structured Data - JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Jaclyn Konzelmann",
          "jobTitle": "Director of Product Management",
          "worksFor": {
            "@type": "Organization",
            "name": "Google Labs"
          },
          "url": "https://www.jaclynkonzelmann.com",
          "image": image,
          "description": description,
          "sameAs": [
            "https://www.linkedin.com/in/jaclynkonzelmann",
            "https://blog.jaclynkonzelmann.com"
          ],
          "knowsAbout": [
            "Product Management",
            "Artificial Intelligence",
            "Creative Tools",
            "UX Design",
            "Innovation",
            "Technology Leadership"
          ]
        })}
      </script>
      
      {/* WebSite Schema for search box */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Jaclyn Konzelmann",
          "url": "https://www.jaclynkonzelmann.com",
          "description": description,
          "author": {
            "@type": "Person",
            "name": "Jaclyn Konzelmann"
          }
        })}
      </script>
    </Helmet>
  );
}
