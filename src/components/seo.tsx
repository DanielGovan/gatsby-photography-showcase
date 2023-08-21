import React from 'react';

import { useSiteMetadata } from '../hooks/useSiteMetadata';

type SeoProps = {
  title?: string;
  description?: string;
  children?: any;
};

const Seo = ({ title, description, children }: SeoProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    author: defaultAuthor,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    author: defaultAuthor,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='0.9em' font-size='90'>🫧</text></svg>"
      />
      {children}
    </>
  );
};

export default Seo;
