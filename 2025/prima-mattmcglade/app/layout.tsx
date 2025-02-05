import { ReactNode } from 'react';
import StyledComponentsRegistry from '@/lib/styled-components-registry';
import ClientLayout from '@/lib/client-layout';
import StoreProvider from '@/lib/StoreProvider';
import Header from '@/components/Header';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap" rel="stylesheet" />
      <body>
        <StoreProvider>
          <StyledComponentsRegistry>
            <Header />
            <main>
              <ClientLayout>{children}</ClientLayout>
            </main>
          </StyledComponentsRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
