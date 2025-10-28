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
    <li className="relative grid grid-cols-[auto,1fr] grid-rows-[auto auto] gap-4 py-4 sm:ml-10 sm:block">
      {/* Career item logo */}
      <Link
        href={href}
        target="_blank"
        className="static col-span-1 row-span-1 flex flex-col items-center justify-start rounded-full sm:absolute sm:-left-16 sm:top-4"
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

      {/* Career item heading */}
      <div className="col-span-1 row-span-1 flex min-w-0 flex-col justify-start gap-1 sm:min-w-full">
        <h2 className="order-1 font-semibold leading-none sm:order-2">
          {name}
        </h2>
        {start && (
          <time className="order-2 text-xs text-muted-foreground sm:order-1">
            <span>{start}</span>
            <span>{" - "}</span>
            <span>{end ? end : "Present"}</span>
          </time>
        )}
        {title && (
          <p className="order-3 text-sm text-muted-foreground sm:order-3">
            {title}
          </p>
        )}
      </div>

      {/* Career item description */}
      {description && (
        <ul className="col-span-2 ml-4 list-outside list-disc">
          {description.map((desc, i) => (
            <li key={i} className="prose pr-4 text-sm dark:prose-invert">
              {desc}
            </li>
          ))}
        </ul>
      )}
      {links && links.length > 0 && (
        <div className="col-span-2 mt-2 flex flex-row flex-wrap items-start gap-2 sm:col-span-auto">
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
