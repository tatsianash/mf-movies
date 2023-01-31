import * as React from 'react';
import { AppShell as MantineAppShell, Header, Title } from '@mantine/core';

interface AppShellProps {
  title: string;
}
export const AppShell = ({ title }: AppShellProps) => (
  <MantineAppShell
    header={
      <Header height={60} p="xs" sx={{ display: 'flex' }}>
        <Title>{title}</Title>
      </Header>
    }>
    <div>hello</div>
  </MantineAppShell>
);
