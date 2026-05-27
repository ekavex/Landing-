import './globals.css';
import RootClientShell from '../components/RootClientShell';

export const metadata = {
  title: 'Ekavex | Premium Web, AI & Automation Solutions',
  description: 'A high-end editorial digital agency specializing in premium web development, custom AI agent systems, and top-tier UI/UX designs.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="relative min-h-screen font-sans antialiased text-navy selection:bg-coral/20 selection:text-navy bg-alabaster overflow-x-hidden">
        <RootClientShell>{children}</RootClientShell>
      </body>
    </html>
  );
}
