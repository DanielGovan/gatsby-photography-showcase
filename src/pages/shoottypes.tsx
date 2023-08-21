import React from 'react';

import Seo from '../components/seo';
import Layout from '../components/layout';
import { ShootTypesContent } from '../_nextGen/components/ShootTypesContent';
import Footer from '../_nextGen/footer/Footer';
import { Box } from '../_nextGen/primitives';

const ShootTypesPage = ({ location }: { location: string }) => {
  return (
    <Layout page={location}>
      <Box mt={['5rem', '8rem']}>
        <ShootTypesContent />
      </Box>
      <Footer />
    </Layout>
  );
};

export default ShootTypesPage;

export const Head = () => <Seo title="Photography showcase: Portrait Gallery" />;
