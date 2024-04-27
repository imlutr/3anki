import React, { ReactElement } from 'react';
import { Welcome } from '@/components/Welcome/Welcome';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage(): ReactElement {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
    </>
  );
}
