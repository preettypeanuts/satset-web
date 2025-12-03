import { CardProjects } from "@/components/card-projects";
import { portfolioData } from "../data";

export default function ProjectsPage() {
    return (
        <>
            <CardProjects data={portfolioData} />
        </>
    )
}