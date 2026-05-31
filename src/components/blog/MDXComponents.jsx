import Callout from './Callout';
import StatHighlight from './StatHighlight';

function slugify(text) {
  return String(text)
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

const MDXComponents = {
  h2: ({ children, ...props }) => (
    <h2
      id={slugify(children)}
      className="font-heading text-2xl md:text-3xl font-black text-navy mt-14 mb-4 scroll-mt-32"
      {...props}
    >
      {children}
    </h2>
  ),

  h3: ({ children, ...props }) => (
    <h3
      id={slugify(children)}
      className="font-heading text-xl font-bold text-navy mt-10 mb-3 scroll-mt-32"
      {...props}
    >
      {children}
    </h3>
  ),

  p: ({ children, ...props }) => (
    <div className="font-sans text-base text-navy/75 leading-[1.85] mb-6" {...props}>
      {children}
    </div>
  ),

  ul: ({ children, ...props }) => (
    <ul className="space-y-3 mb-6 ml-1" {...props}>
      {children}
    </ul>
  ),

  ol: ({ children, ...props }) => (
    <ol className="space-y-3 mb-6 ml-5 list-decimal" {...props}>
      {children}
    </ol>
  ),

  li: ({ children, ...props }) => (
    <li className="font-sans text-base text-navy/75 leading-relaxed flex gap-3" {...props}>
      <span className="text-coral font-bold shrink-0 mt-0.5">—</span>
      <span>{children}</span>
    </li>
  ),

  strong: ({ children, ...props }) => (
    <strong className="font-bold text-navy" {...props}>
      {children}
    </strong>
  ),

  em: ({ children, ...props }) => (
    <em className="italic text-navy/80" {...props}>
      {children}
    </em>
  ),

  a: ({ children, href, ...props }) => (
    <a
      href={href}
      className="text-coral underline underline-offset-2 hover:opacity-75 transition-opacity"
      {...props}
    >
      {children}
    </a>
  ),

  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-l-4 border-coral bg-coral/5 rounded-r-2xl px-6 py-5 my-8"
      {...props}
    >
      {children}
    </blockquote>
  ),

  code: ({ children, ...props }) => (
    <code
      className="bg-navy/8 text-coral font-mono text-[0.85em] px-1.5 py-0.5 rounded-md"
      {...props}
    >
      {children}
    </code>
  ),

  pre: ({ children, ...props }) => (
    <div className="relative my-8 group">
      <pre
        className="bg-navy rounded-2xl p-6 overflow-x-auto font-mono text-sm text-alabaster/85 leading-relaxed"
        {...props}
      >
        {children}
      </pre>
    </div>
  ),

  hr: () => <hr className="border-none border-t border-navy/8 my-10" />,

  // Custom MDX components used in articles
  Callout,
  StatHighlight,
};

export default MDXComponents;
