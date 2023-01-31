import * as React from 'react';
import {
  AppShell as MantineAppShell,
  Header,
  Title,
  MantineProvider,
} from '@mantine/core';

interface AppShellProps {
  title: string;
  colorScheme?: 'dark' | 'light';
}
export const AppShell = ({ title, colorScheme }: AppShellProps) => (
  <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
    <MantineAppShell
      padding="sm"
      header={
        <Header
          height={60}
          p="xs"
          sx={{ display: 'flex' }}
          styles={(theme) => ({
            main: {
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          })}>
          <Title>{title}</Title>
        </Header>
      }>
      <div>hello ther</div>
    </MantineAppShell>
  </MantineProvider>
);
