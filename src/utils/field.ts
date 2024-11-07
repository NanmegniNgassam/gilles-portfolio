import uxDesign from "../assets/images/ux.jpg";
import mobile from "../assets/images/mobile.png";
import web from "../assets/images/web.jpg";
import aitools from "../assets/images/ai-tools.png";


interface Field {
    title: string,
    // We'll derived the description from the title
    imageUrl: string;
}

export const FieldOfInterest: Field[] = [
    {
        title: "webDev",
        imageUrl: web
    },
    {
        title: "mobileDev",
        imageUrl: mobile
    },
    {
        title: "concepUX",
        imageUrl: uxDesign
    },
    {
        title: "aiTools",
        imageUrl: aitools
    }
];