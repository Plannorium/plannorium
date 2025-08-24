"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import posthog from "../utils/posthog";

export default function PosthogPageView() {
    const pathname = usePathname();

    useEffect(() => {
        if (pathname) {
            posthog.capture("$pageview", { url: pathname });
        }
    }, [pathname]);

    return null;
}
