import { ReactNode } from 'react';
import StyledComponentsRegistry from '@/lib/styled-components-registry';
import ClientLayout from '@/lib/client-layout';
import StoreProvider from '@/lib/StoreProvider';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <StyledComponentsRegistry>
            <main>
              <ClientLayout>{children}</ClientLayout>
            </main>
          </StyledComponentsRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
