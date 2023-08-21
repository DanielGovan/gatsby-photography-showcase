import React, { Suspense, useEffect, useState } from 'react';

import Seo from '../components/seo';
import { ContentBrace } from '../_nextGen/layout/ContentBrace';
import { Box } from '../_nextGen/primitives';
import { Background } from '../_nextGen/hero/Background';
import { GlassBox } from '../_nextGen/components/GlassBox';

const AdminPage = () => {
  const [isClient, setClient] = useState(false);

  const AdminSection = React.lazy(() => import('../_nextGen/admin/AdminSection'));
  const isSSR = typeof window === 'undefined';

  // console.log(user?.email);
  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <>
      <Background
        colors={[
          'rgba(4, 0, 255, 0.5)',
          'rgba(255, 162, 0, 0.3)',
          'rgba(243, 7, 255, 0.3)',
        ]}
      ></Background>
      <Box pos="relative" zIndex="10" minH="100vh" p="2rem">
        <ContentBrace>
          <Box my="5rem">
            {!isSSR && isClient && (
              <Suspense fallback={<div>Loading...</div>}>
                <GlassBox
                  p={['1rem', '2rem']}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <AdminSection />
                </GlassBox>
              </Suspense>
            )}
          </Box>
        </ContentBrace>
      </Box>
    </>
  );
};

export default AdminPage;

export const Head = () => <Seo title="Photography showcase: Admin" />;
