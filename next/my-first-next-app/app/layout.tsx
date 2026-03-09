// app/layout.tsx
import MainHeader from '@/components/layout/main-header';
import SiteFooter from '@/components/layout/site-footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <MainHeader />
        <main className='flex'>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}