import { ReactNode } from 'react';
import StyledComponentsRegistry from '@/lib/styled-components-registry';
import ClientLayout from '@/lib/client-layout';
import StoreProvider from '@/lib/StoreProvider';
import Header from '@/components/Header';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import DataPush from './DataPush';
import { fetchData } from '@/utils/fetchData/fetchData';
import MockAddingItem from '@/components/MockAddingItem';
config.autoAddCss = false

export default async function RootLayout({ children }: { children: ReactNode }) {
  const fetchResponse = await fetchData();

  const dataInfo = {
    allData: fetchResponse.dataResponse,
    error: fetchResponse.error,
  }

  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <StyledComponentsRegistry>
            <ClientLayout>
              <Header />
              <MockAddingItem />
              <main>
                <DataPush {...dataInfo}>
                  {children}
                </DataPush>
              </main>
            </ClientLayout>
          </StyledComponentsRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
