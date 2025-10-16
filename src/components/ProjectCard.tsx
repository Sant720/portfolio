import { Badge } from "@/components/ui/Badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Project } from "@/lib/schemas";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import Icon from "./Icon";
import { Button } from "@/components/ui/Button";

interface Props {
  project: Project;
}

export function ProjectCard({ project }: Props) {
  const { name, href, description, image, tags, links } = project;

  return (
    <Card className="flex flex-col">
      <CardHeader>
        {image && (
          <Link href={links?.[0]?.href || "#"}>
            <Image
              src={image}
              alt={name}
              width={500}
              height={300}
              className="h-40 w-full object-cover object-top rounded-lg"
            />
          </Link>
        )}
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <CardTitle className="text-lg font-semibold leading-tight">{name}</CardTitle>
        <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
          {description}
        </Markdown>
      </CardContent>
      <CardFooter className="flex h-full flex-col items-start justify-between gap-4">
        {tags && (tags.primary.length > 0 || tags.secondary.length > 0) && (
          <div className="my-1 flex flex-wrap gap-1">
            {tags.primary.map((tag) => (
              <Badge
                key={`primary-${tag}`}
                className="px-1.5 py-1 text-[11px] select-none"
                variant="default"
              >
                {tag}
              </Badge>
            ))}
            {tags.secondary.map((tag) => (
              <Badge
                key={`secondary-${tag}`}
                className="px-1.5 py-1 text-[11px] select-none"
                variant="secondary"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="flex flex-col gap-2 w-full">
            {links.toSorted().map((link, idx) => (
              <Button
                asChild
                key={idx}
                variant="default"
                size="default"
                className="w-full"
              >
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <Icon name={link.icon} className="size-4" />
                  {link.name}
                </a>
              </Button>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}
