import React from 'react';
import {
  useMantineTheme,
  Card,
  Image,
  Text,
  Button,
  Group,
} from '@mantine/core';
import { useStore } from 'store';

interface MovieCardProps {
  title: string;
  image: string;
  showAddButton?: boolean;
}
export default function MovieCard({
  title,
  image,
  showAddButton,
}: MovieCardProps) {
  const theme = useMantineTheme();
  const { addMovie } = useStore();
  return (
    <Card shadow="sm" p="lg">
      <Card.Section>
        <Image src={image} height={320} alt={title} />
      </Card.Section>

      <Group
        position="apart"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}>
        <Text weight={500}>{title}</Text>
      </Group>

      {showAddButton && (
        <Button
          variant="light"
          color="blue"
          fullWidth
          style={{ marginTop: 14 }}
          onClick={() => addMovie({ title, image })}>
          Add To List
        </Button>
      )}
    </Card>
  );
}
