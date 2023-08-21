import React from 'react';

import Seo from '../components/seo';
import Gallery from '../components/Gallery/Gallery';
import Layout from '../components/layout';
import Footer from '../_nextGen/footer/Footer';

const PortraitGalleryPage = ({ location }: { location: string }) => {
  return (
    <Layout page={location}>
      <Gallery />
      <Footer />
    </Layout>
  );
};

export default PortraitGalleryPage;

export const Head = () => <Seo title="Photography showcase: Portrait Gallery" />;
