import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  link: string;
}

export function ProjectCard({ img, title, desc, link }: ProjectCardProps) {
  const generateColor = () => {
    const CHHAPOLA = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${CHHAPOLA}`;
  };
  return (
    <Card color="transparent" shadow={false} placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
      {/* <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader> */}
      <CardBody style={{backgroundColor:generateColor()}} className="p-0 py-4 justify-center px-6 rounded-lg h-[200px] space-y-8" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <a
          href={link}
          className="text-white text-center transition-colors hover:text-gray-800"
        >
          <Typography variant="h4" className="mb-2" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >
            {title}
          </Typography>
        </a>
        <Typography className="mb-6 font-bold items-center !text-black" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >
          {desc}
        </Typography>
        {/* <Button color="gray" size="sm" >
          see details
        </Button> */}
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
