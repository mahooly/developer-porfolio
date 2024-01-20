import React, {useState, useRef, useEffect} from "react";
import "../styles/ExperienceCard.scss";
import ColorThief from "colorthief";

// Define the shape of the cardInfo object
interface CardInfo {
    company: string;
    companylogo: string;
    role: string;
    date: string;
    desc: string;
    descBullets?: string[]; // Optional array of strings
}

interface ExperienceCardProps {
    cardInfo: CardInfo;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({cardInfo}) => {
    const [colorArrays, setColorArrays] = useState<number[]>([]);
    const imgRef = useRef<HTMLImageElement>(null);

    const getColorArrays = () => {
        if (imgRef.current) {
            const colorThief = new ColorThief();
            setColorArrays(colorThief.getColor(imgRef.current));
        }
    };

    // It's good to define a type for the function parameter
    const rgb = (values?: number[]) => {
        return values ? `rgb(${values.join(", ")})` : null;
    };

    const GetDescBullets: React.FC<{ descBullets?: string[] }> = ({descBullets}) => {
        return (
            <>
                {descBullets?.map((item, i) => (
                    <li key={i} className="subTitle">
                        {item}
                    </li>
                ))}
            </>
        );
    };

    useEffect(() => {
        // Make sure the color thief logic runs only after the image has loaded
        if (imgRef.current?.complete) {
            getColorArrays();
        }
    }, []);

    return (
        <div className="experience-card">
            <div style={{ background: rgb(colorArrays) || 'defaultBackgroundColor' }} className="experience-banner">
                <div className="experience-blurred_div"></div>
                <div className="experience-div-company">
                    <h5 className="experience-text-company">{cardInfo.company}</h5>
                </div>

                <img
                    crossOrigin={"anonymous"}
                    ref={imgRef}
                    className="experience-roundedimg"
                    src={cardInfo.companylogo}
                    alt={cardInfo.company}
                    onLoad={() => getColorArrays()}
                />
            </div>
            <div className="experience-text-details">
                <h5
                    className="experience-text-role"
                >
                    {cardInfo.role}
                </h5>
                <h5
                    className="experience-text-date"
                >
                    {cardInfo.date}
                </h5>
                <p
                    className="subTitle experience-text-desc"
                >
                    {cardInfo.desc}
                </p>
                <ul>
                    <GetDescBullets descBullets={cardInfo.descBullets}/>
                </ul>
            </div>
        </div>
    );
}

export default ExperienceCard;