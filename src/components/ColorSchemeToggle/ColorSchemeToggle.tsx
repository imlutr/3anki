'use client';

import { Button, Group, useMantineColorScheme } from '@mantine/core';
import { ReactElement } from 'react';

export function ColorSchemeToggle(): ReactElement {
  const { setColorScheme } = useMantineColorScheme();

  return (
    <Group justify="center" mt="xl">
      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
    </Group>
  );
}
