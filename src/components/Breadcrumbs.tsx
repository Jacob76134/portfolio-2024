"use client"

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

export default function BreadcrumbTrail() {
    return (
        <Breadcrumbs>
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem href="/blog">Blog</BreadcrumbItem>
            <BreadcrumbItem isCurrent>{"Current Post"}</BreadcrumbItem>
        </Breadcrumbs>
    )
}