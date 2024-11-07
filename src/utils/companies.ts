import bioGusta from "../assets/images/bio-gusta.jpg";
import dek from "../assets/images/dek.jpg";
import juniorUTBM from "../assets/images/junior.png";
import nehtek from "../assets/images/nehtek.jpg";
import sjd from "../assets/images/sjd.png";

interface Company {
    imageUrl: string,
    name: string;
    linkedProject: string;
};

export const companies: Company[] = [
    {
        imageUrl: bioGusta,
        name: "Terroir d'Afrique",
        linkedProject: "/projects"
    },
    {
        imageUrl: sjd,
        name: "Saint Jérôme Douala",
        linkedProject: "/projects"
    },
    {
        imageUrl: juniorUTBM,
        name: "Junior UTBM",
        linkedProject: "/projects"
    },
    {
        imageUrl: nehtek,
        name: "NEHTEK",
        linkedProject: "/projects"
    },
    {
        imageUrl: dek,
        name: "DEK Construction",
        linkedProject: "/projects"
    },
];