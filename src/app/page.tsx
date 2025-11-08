import { Carousel, CarouselSlide } from "@mantine/carousel"
import { Title, Text } from "@mantine/core"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <main>
        <Title order={1}>Welcome to Hesam Shop</Title>
        <Carousel withIndicators height={200}>
          <CarouselSlide>
            <Image
              src={"/1200W-null.jpg"}
              alt={"1200W-null.jpg"}
              width={100}
              height={100}
            />
          </CarouselSlide>
          <CarouselSlide>
            <Image
              src={"/1200W-null.jpg"}
              alt={"1200W-null.jpg"}
              width={100}
              height={100}
            />
          </CarouselSlide>
          <CarouselSlide>
            <Title order={2}>Welcom to my Shop</Title>
            <Text>lorem </Text>
          </CarouselSlide>
        </Carousel>
      </main>
    </div>
  )
}
