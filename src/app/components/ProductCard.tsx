"use client"
import Image from "next/image"
import type { Product } from "@/app/db/types"
import Link from "next/link"
import { Badge, Button, Card, Group, Text } from "@mantine/core"

export default function ProductCard({
  product,
  onAddToCartAction,
}: {
  product: Product
  onAddToCartAction: () => void
}) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={product.image}
          alt={product.name}
          width={100}
          height={100}
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{product.name}</Text>
        <Badge color={product.price > 20 ? "pink" : "green"}>
          ${product.price}
        </Badge>
      </Group>

      <Text size="sm" c="dimmed">
        {product.description}
      </Text>

      <Button.Group mt="md">
        <Button
          color="blue"
          radius="md"
          onClick={() => {
            onAddToCartAction()
          }}
        >
          Add to Cart
        </Button>
        <Button
          radius="md"
          component={Link}
          href={`/marketplace/product/${product._id}`}
        >
          View Details
        </Button>
      </Button.Group>
    </Card>
  )
}
