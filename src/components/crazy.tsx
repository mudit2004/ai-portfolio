'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Crazy = () => {
  const funPhotos: PhotoItem[] = [
    {
      src: '/fun-mudit.JPG',
      alt: 'Mudit with guitar',
      caption: 'Performing live with The_Unknowns (college band I started)',
    },
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          The Unknowns 🎸
        </h2>
      </div>
      <Photos photos={funPhotos} />
    </div>
  );
};

export default Crazy;