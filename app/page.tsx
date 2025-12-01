import { About } from "app/components/about";
import { Divider } from "app/components/divider";
import { Hero } from "app/components/hero";
import { Latest } from "./components/latest";

export default function Page() {
  return (
    <section>
      <Hero />
      <About />
      <Divider />

      <Latest />
    </section>
  );
}
