import { Experience } from "@/lib/schemas";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/Avatar";
import { Badge } from "./ui/Badge";
import Icon from "./Icon";

interface Props {
  experience: Experience;
}

export default function TimelineItem({ experience }: Props) {
  const { name, href, title, logo, start, end, description, links } =
    experience;

  return (
    <li className="relative flex items-start gap-4 py-4 sm:ml-10 sm:block">
      <Link
        href={href}
        target="_blank"
        className="static flex flex-shrink-0 items-center justify-center rounded-full bg-white sm:absolute sm:-left-16 sm:top-4"
      >
        <Avatar className="size-12 border">
          <AvatarImage
            src={logo}
            alt={name}
            className="bg-background object-contain"
          />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
      </Link>
      <div className="flex flex-1 flex-col justify-start gap-1">
        {start && (
          <time className="text-xs text-muted-foreground">
            <span>{start}</span>
            <span>{" - "}</span>
            <span>{end ? end : "Present"}</span>
          </time>
        )}
        <h2 className="font-semibold leading-none">{name}</h2>
        {title && <p className="text-sm text-muted-foreground">{title}</p>}
        {description && (
          <ul className="ml-4 list-outside list-disc">
            {description.map((desc, i) => (
              <li key={i} className="prose pr-8 text-sm dark:prose-invert">
                {desc}
              </li>
            ))}
          </ul>
        )}
      </div>
      {links && links.length > 0 && (
        <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
          {links?.map((link, idx) => (
            <Link href={link.href} key={idx}>
              <Badge key={idx} title={link.name} className="flex gap-2">
                <Icon name={link.icon} aria-hidden="true" className="size-3" />
                {link.name}
              </Badge>
            </Link>
          ))}
        </div>
      )}
    </li>
  );
}
