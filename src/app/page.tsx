import React, { ReactElement } from 'react';
import { Welcome } from '@/src/components/Welcome/Welcome';
import { ColorSchemeToggle } from '@/src/components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage(): ReactElement {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
