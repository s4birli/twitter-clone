import { SVGProps } from "react";

export interface SidebarRowProps { 
    Icon:(property: SVGProps<SVGSVGElement>) => JSX.Element
    title: string
}