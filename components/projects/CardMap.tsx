import { ProjectsDataAll } from "@/utils/data"
import Card_Layout from "./Card";

export default function CardMap() {
    return (
        <div className="font-fire-code flex flex-col gap-4 justify-center py-10 px-4 md:flex-row md:px-20">
            {ProjectsDataAll.map((projects) => (
                <Card_Layout key={projects.title} {...projects} />
            ))}
        </div>

    )
}
