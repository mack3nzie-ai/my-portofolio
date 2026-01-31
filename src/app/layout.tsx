import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Willy Syachputra - Portfolio',
  description: 'Network Engineer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 
