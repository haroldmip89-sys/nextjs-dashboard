import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*añadir una fuente a toda la app */}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
