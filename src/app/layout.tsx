import '@mantine/core/styles.css';
import React, { ReactElement } from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { Metadata } from 'next';
import { theme } from '@/theme';

export const metadata: Metadata = {
  title: '3anki',
  description: 'A new Notion to Anki converter',
};

export default function RootLayout({ children }: { children: any }): ReactElement {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
