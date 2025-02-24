import { ReactNode } from 'react';
import StyledComponentsRegistry from '@/lib/styled-components-registry';
import ClientLayout from '@/lib/client-layout';
import StoreProvider from '@/lib/StoreProvider';
import Header from '@/components/Header';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import DataPush from './DataPush';
import { authors } from '@/mock-data/mock-auths';
import { Post } from '@/custom-type';
config.autoAddCss = false

export default async function RootLayout({ children }: { children: ReactNode }) {
  let error = null;

  const fetchData = async () => {
    let dataResponse;

    try {
      const response = await fetch("https://dummyjson.com/posts");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();

      const getRandomAuthor = () => authors[Math.floor(Math.random() * authors.length)];


      const updatedPosts = data.posts.map((post: Post) => ({
        ...post,
        thisPostCappedText: post?.body?.length > 100 ? post.body.slice(0, 100) + "..." : post?.body,
        author: getRandomAuthor()
      }));

      dataResponse = updatedPosts;
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
            <ClientLayout>
              <Header />
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
