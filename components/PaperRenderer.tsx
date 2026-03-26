"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const components: Components = {
  h1: ({ children }) => (
    <h1 className="font-serif text-2xl font-bold text-[var(--foreground)] mt-10 mb-4 leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="font-serif text-xl font-semibold text-[var(--foreground)] mt-8 mb-3 leading-snug border-b border-[var(--border)] pb-2">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="font-serif text-lg font-semibold text-[var(--foreground)] mt-6 mb-2">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="font-sans text-base font-semibold text-[var(--foreground)] mt-5 mb-2">
      {children}
    </h4>
  ),
  p: ({ children }) => (
    <p className="text-[var(--muted-foreground)] leading-relaxed mb-4 text-[15px]">
      {children}
    </p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside text-[var(--muted-foreground)] mb-4 space-y-1.5 text-[15px] pl-2">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside text-[var(--muted-foreground)] mb-4 space-y-1.5 text-[15px] pl-2">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="leading-relaxed">{children}</li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-crimson pl-4 py-1 my-4 text-[var(--muted-foreground)] italic text-[15px]">
      {children}
    </blockquote>
  ),
  code: ({ className, children, ...props }) => {
    const isBlock = className?.includes("language-");
    if (isBlock) {
      return (
        <pre className="bg-[var(--muted)] rounded-lg p-4 overflow-x-auto mb-4">
          <code className={`${className} text-xs font-mono text-[var(--foreground)]`} {...props}>
            {children}
          </code>
        </pre>
      );
    }
    return (
      <code className="bg-[var(--muted)] px-1.5 py-0.5 rounded text-xs font-mono text-[var(--foreground)]" {...props}>
        {children}
      </code>
    );
  },
  table: ({ children }) => (
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-sm border-collapse border border-[var(--border)]">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-[var(--muted)]">{children}</thead>
  ),
  th: ({ children }) => (
    <th className="border border-[var(--border)] px-3 py-2 text-left text-xs font-mono font-semibold text-[var(--foreground)] uppercase tracking-wider">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-[var(--border)] px-3 py-2 text-[var(--muted-foreground)] text-[13px]">
      {children}
    </td>
  ),
  tr: ({ children }) => (
    <tr className="even:bg-[var(--muted)]/30">{children}</tr>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      className="text-crimson hover:underline underline-offset-2"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      {children}
    </a>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-[var(--foreground)]">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-[var(--muted-foreground)]">{children}</em>
  ),
  hr: () => <hr className="border-[var(--border)] my-8" />,
};

export default function PaperRenderer({ content }: { content: string }) {
  return (
    <div className="prose-container max-w-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
