import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Slider } from "../components/Slider";
import { Trending } from "../components/Trending";
import { Container } from "../components/Container";

import { LatestBlogs } from "@/components/LatestBlogs";
import Blog from "./blog/[blog]";

export default function Home() {
  return (
    <Container>
      <div>articleId-Blog </div>
      <Header />
      <Slider />
      <Trending />
      <LatestBlogs />
      <Footer />
      <Blog />
    </Container>
  );
}
