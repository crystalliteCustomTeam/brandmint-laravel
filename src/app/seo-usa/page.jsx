// Components
import { Awards, Hero } from "@/components"

export default function Page() {
    return (
        <main>
            <Hero
                subTitle="America's Leading Digital Marketing Company"
                title="Fresh Strategies <br className='xs:hidden' />for Digital Success"
                desc="Maximize your online presence and captivate your audience with BrandMint's cutting-edge digital marketing solutions. From SEO to social media, our expertise ensures your brand stands out."
            />
            <Awards />
        </main>
    )
}
