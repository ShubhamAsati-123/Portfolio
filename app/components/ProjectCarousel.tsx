import * as React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProjectArray from "../assets/ProjectsArray";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

type Project = {
  image: string;
  title: string;
  description: string;
  tags: string[];
  live: string;
  github: string;
};

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-60 md:max-w-4xl">
      <CarouselContent>
        {ProjectArray.map((project: Project, index: number) => (
          <CarouselItem key={index}>
            <Card className="w-full h-auto md:h-96 flex justify-center items-center pt-6">
              <CardContent className="flex flex-col md:flex-row justify-center items-center md:items-center gap-4 md:gap-8">
                <div className="flex justify-center items-center h-full">
                  <Image
                    src={project.image}
                    alt="Portfolio"
                    width={400}
                    height={100}
                    className="aspect-auto"
                  />
                </div>

                <div className="flex flex-col gap-4 px-4 md:px-0">
                  <CardTitle className="text-xl md:text-4xl">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm md:text-xl my-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string, tagIndex: number) => (
                      <Badge variant="outline" key={tagIndex}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-4 md:mt-10">
                    <Link href={project.live} passHref>
                      <Button variant="outline" className="flex gap-2">
                        <SquareArrowOutUpRight size={20} />
                        <p className="text-base">Live</p>
                      </Button>
                    </Link>
                    <Link href={project.github} passHref>
                      <Button variant="outline" className="flex gap-2">
                        <FaGithub size={20} />
                        <p className="text-base">Github</p>
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
}
