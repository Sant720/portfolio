"use client";

import { useState } from "react";
import { Experience } from "@/lib/schemas";
import TimelineItem from "./TimelineItem";
import { Card, CardContent } from "./ui/Card";
import { ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  experience: Experience[];
}

const INITIAL_COUNT = 3;

export default function Timeline({ experience }: Props) {
  const [showAll, setShowAll] = useState(false);

  const visibleExperience = showAll ? experience : experience.slice(0, INITIAL_COUNT);
  const hiddenCount = Math.max(0, experience.length - visibleExperience.length);

  return (
    <Card>
      <CardContent className="p-0">
        <ul className="ml-4 sm:ml-10 sm:border-l">
          {visibleExperience.map((exp, id) => (
            <TimelineItem key={id} experience={exp} />
          ))}
        </ul>

        {experience.length > INITIAL_COUNT && (
          <button
            type="button"
            aria-expanded={showAll}
            className="mx-auto mt-0 mb-5 flex w-fit items-center gap-2 rounded-md border border-secondary px-4 py-2 text-sm font-medium text-primary hover:bg-primary/10 transition"
            onClick={() => setShowAll((v) => !v)}
          >
            {showAll ? (
              <>
                Show less <ChevronUp className="size-4" />
              </>
            ) : (
              <>
                Show more {hiddenCount > 0 && <span className="font-medium">({hiddenCount})</span>} <ChevronDown className="size-4" />
              </>
            )}
          </button>
        )}
      </CardContent>
    </Card>
  );
}
