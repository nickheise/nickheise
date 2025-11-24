import type { ContentBlock as ContentBlockType } from '../../data/articles';

interface ContentBlockProps {
  block: ContentBlockType;
}

export default function ContentBlock({ block }: ContentBlockProps) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className="text-base text-stone-700 dark:text-stone-300 leading-relaxed mb-6 transition-colors">
          {block.content}
        </p>
      );

    case 'heading':
      const HeadingTag = `h${block.level || 2}` as keyof JSX.IntrinsicElements;
      const headingClasses = {
        2: 'text-3xl md:text-4xl mt-12 mb-6 first:mt-0',
        3: 'text-xl md:text-2xl mt-10 mb-4',
        4: 'text-lg md:text-xl mt-8 mb-3',
      }[block.level || 2] || 'text-2xl mt-8 mb-4';

      return (
        <HeadingTag className={`font-serif font-bold text-stone-900 dark:text-stone-100 transition-colors ${headingClasses}`}>
          {block.content}
        </HeadingTag>
      );

    case 'image':
      return (
        <figure className="my-8">
          <img
            src={block.content}
            alt={block.alt || 'Article image'}
            className="w-full h-auto rounded-xl shadow-lg"
            loading="lazy"
          />
          {block.alt && (
            <figcaption className="text-sm text-stone-500 dark:text-stone-400 text-center mt-3 italic transition-colors">
              {block.alt}
            </figcaption>
          )}
        </figure>
      );

    case 'code':
      return (
        <div className="my-8 rounded-xl overflow-hidden border border-stone-200 dark:border-stone-800 transition-colors">
          <div className="bg-stone-100 dark:bg-stone-900 px-4 py-2.5 flex items-center justify-between border-b border-stone-200 dark:border-stone-800 transition-colors">
            <span className="text-stone-500 dark:text-stone-400 text-xs font-mono uppercase tracking-wider transition-colors">
              {block.language || 'code'}
            </span>
          </div>
          <pre className="bg-stone-50 dark:bg-stone-950 p-6 overflow-x-auto transition-colors">
            <code className="text-sm font-mono text-stone-800 dark:text-stone-200 leading-relaxed transition-colors">
              {block.content}
            </code>
          </pre>
        </div>
      );

    case 'list':
      const ListTag = block.ordered ? 'ol' : 'ul';
      const listClass = block.ordered
        ? 'list-decimal list-outside space-y-2 mb-6 ml-6'
        : 'list-disc list-outside space-y-2 mb-6 ml-6';

      return (
        <ListTag className={listClass}>
          {block.items?.map((item, index) => (
            <li key={index} className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed pl-2 transition-colors">
              {item}
            </li>
          ))}
        </ListTag>
      );

    default:
      return null;
  }
}