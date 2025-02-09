import { ReactNode } from 'react';
import StyledComponentsRegistry from '@/lib/styled-components-registry';
import ClientLayout from '@/lib/client-layout';
import StoreProvider from '@/lib/StoreProvider';
import Header from '@/components/Header';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import DataPush from './DataPush';
import { mockImages } from '@/mock-data/mock-images';
import { Recipe } from '@/custom-type';
config.autoAddCss = false

export default async function RootLayout({ children }: { children: ReactNode }) {
  let error = null;

  const fetchData = async () => {
    let dataResponse;

    try {
      const response = await fetch("https://dummyjson.com/recipes");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();


      const updatedRecipes = data.recipes.map((recipe: Recipe, index: number) => ({
        ...recipe,
        // image: imageUrls[index],
        image: mockImages[index].url
      }));

      dataResponse = updatedRecipes;
      // Errors need to be set to any
    } catch (err: any) {
      error = err?.message || err;
      console.error("Error fetching recipes:", err);
    }
    return dataResponse;
  };

  const allData = await fetchData();

  const dataInfo = {
    allData,
    error,
  }

  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <StyledComponentsRegistry>
            <Header />
            <main>
              <DataPush {...dataInfo}>
                <ClientLayout>{children}</ClientLayout>
              </DataPush>
            </main>
          </StyledComponentsRegistry>
        </StoreProvider>
      </body>
    </html>
  );
}
