import React from 'react';
import { motion } from 'framer-motion';

import './layout.css';

import { TakeOverNav } from '../_nextGen/hero/TakeOverNav';

const Layout = ({ children, page }: { children: React.ReactNode; page: string }) => {
  return (
    <>
      <TakeOverNav page={page} />
      <motion.main
        key={page}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{
          type: 'spring',
          mass: 0.35,
          stiffness: 75,
          duration: 0.5,
        }}
      >
        {children}
      </motion.main>
    </>
  );
};

export default Layout;
