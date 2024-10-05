import React from "react";
import Image from "next/image";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

type CardGameItem = {
  title: string;
  image: string;
  description: string;
  link: any;
}

type CardGameProps = {
  key: string;
  item: CardGameItem;
}



const CardGame = (props : CardGameProps) => {

  return (
    <div className="flex justify-center">
      <Card className="">
        <CardHeader>
          <Image src={props.item.image} alt={props.item.title} />
          <CardTitle>{props.item.title}</CardTitle>
          <CardDescription>{props.item.description}</CardDescription>
        </CardHeader>
        <CardFooter className="flex justify-between items-end">
        <a href={props.item.link[0].play}>
          <button> Jouer</button>
        </a>
        <Link href={props.item.link[1].description}>
            <button>Description</button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardGame;
