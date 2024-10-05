import Description from "@/component/Description";
import Carousel from "@/component/Carousel";

export default function MorpionCubeDescription() {

  const images = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
  ];

  const description = "Voici une description du Morpion-Cube"
  
    return (
      <main className="">
        <h1>Morpion-Cube</h1>
        <Description description={description}/> 
        <Carousel images={images}/>
      </main>
    );
  }