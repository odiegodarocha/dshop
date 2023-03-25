import Image from "next/image"

import { useKeenSlider } from 'keen-slider/react'

import { HomeContainer, Product } from "./styles/pages/home"

import p1 from '../assets/products/1.png'
import p2 from '../assets/products/2.png'
import p3 from '../assets/products/3.png'
import p4 from '../assets/products/4.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    }
  })


  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={p1} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 89,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={p2} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 89,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={p3} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 89,90</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={p4} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 89,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
