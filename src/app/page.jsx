// Components
import { Awards, Hero } from "@/components"
// Media
import heroBG from 'media/heroBgHome.png'

export default function page() {
  return (
    <main>
      <Hero
        subTitle="America's Leading Digital Marketing Company"
        title="Fresh Strategies <br class='hidden lg:block' />for Digital Success"
        desc="Maximize your online presence and captivate your audience with BrandMint's cutting-edge digital marketing solutions. From SEO to social media, our expertise ensures your brand stands out."
        bg={heroBG}
      />
      <Awards />
    </main>
  )
}
