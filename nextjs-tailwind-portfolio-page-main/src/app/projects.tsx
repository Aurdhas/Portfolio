"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/blog-1.svg",
    title: "MY ROTTEN TOMATOES",
    desc: "Rotten tomatoes like web site with next js and MongoDB.",
    link: "https://github.com/Aurdhas/C-COD-270-COT-2-3-c2cod270p0-daniel.medehou",
  },
  {
    img: "/image/blog2.svg",
    title: "SHOWTIME",
    desc: "Site for purchasing concert tickets.",
    link:"https://github.com/Aurdhas/C-COD-250-COT-2-3-showtime-daniel.medehou",
  },
  {
    img: "/image/blog3.svg",
    title: "FREEADS",
    desc: "Ad publishing website,with Laravel.",
    link: "https://github.com/Aurdhas/C-DEV-120-COT-1-2-freeads-aurdhas.houndegnon-denakpo",
  },
  {
    img: "/image/blog4.svg",
    title: "YOWL",
    desc: "Comment anything everywhere on net.",
    link:"https://github.com/Aurdhas/C-DEV-160-COT-1-2-yowl-edem.kpomachi",
  },
  // {
  //   img: "/image/blog-1.svg",
  //   title: "Mobile App Development",
  //   desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  // },
  // {
  //   img: "/image/blog2.svg",
  //   title: "Landing Page Development",
  //   desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
  // },
  // {
  //   img: "/image/blog3.svg",
  //   title: "Mobile App Development",
  //   desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  // },
  // {
  //   img: "/image/blog4.svg",
  //   title: "E-commerce development",
  //   desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
  // },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Whether you have a mobile app idea that needs to come to life or a
          website that requires a facelift, I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
