import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Labora Client Dashboard',
  description: 'Manage your freelance hires',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <html lang="en" bbai-tooltip-injected="true">
      {/* Adding min-h-screen ensures the background color covers the whole page */}
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

