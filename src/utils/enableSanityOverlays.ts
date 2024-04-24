"use client"

import { useEffect } from 'react';
import { enableOverlays } from '@sanity/overlays';

export const useEnableSanityOverlays = () => {
  useEffect(() => {
    enableOverlays({ allowStudioOrigin: 'http://localhost:3333' });
  }, []);
};
