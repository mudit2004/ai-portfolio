'use client';

import React from 'react';
import { Photos, PhotoItem } from './photos';

const Gallery = () => {
  const creativePhotos: PhotoItem[] = [
    {
      src: '/Binghamton.jpg',
      alt: 'Binghamton',
      caption: 'Binghamton in Summer — my home base for now',
    },
    {
      src: '/event-portrai.png',
      alt: 'Portrait during university event',
      caption: 'A candid portrait from an event I covered with Estudio',
    }
  ];

  return (
    <div className="mx-auto w-full">
      <div className="mb-8">
        <h2 className="text-foreground text-3xl font-semibold md:text-4xl">
          Creative Side 🎨
        </h2>
        <p className="mt-4 text-muted-foreground">
          Outside of code, I lead a university photography team and founded a college band called <strong>The_Unknowns</strong>. 
          Here are some photos I’ve captured — and a glimpse of my music side too.
        </p>
      </div>
      <Photos photos={creativePhotos} />
    </div>
  );
};

export default Gallery;