import "./ProjectCard.css"
import {ItemCard} from "./Card/ItemCard";

interface ProjectCardProps {
    cardData: {
        imageUrl: string;
        title: string;
        text: string;
        gitUrl: string;
    }[];
}

export function ProjectCard(props: ProjectCardProps) {
    const {cardData} = props;
    const numRows = Math.ceil(cardData.length / 3);
    //const numCols = 3;

    // Generate an array of indices for both rows and columnsvitvite
    const rows = Array.from({length: numRows}, (_, rowIndex) => rowIndex);
    //const cols = Array.from({ length: numCols }, (_, colIndex) => colIndex);
    return (
        <div className="container-fluid p-0">
            {rows.map(rowIndex => (
                <div key={rowIndex} className="row">
                    {cardData.slice(rowIndex * 3, (rowIndex + 1) * 3).map((card, index) => (
                        <div key={index} className="col-sm-4 d-flex align-items-stretch">
                            <ItemCard imageURL={card.imageUrl} title={card.title} text={card.text}
                                      gitUrl={card.gitUrl}/>
                        </div>
                    ))}
                </div>
            ))}
        </div>
        // <div className="container">
        //     {rows.map(rowIndex => (
        //         <div key={rowIndex} className="row d-flex">
        //             {cols.map(colIndex => (
        //                 <div key={colIndex} className="col-sm d-flex align-items-center">
        //                     <ItemCard />
        //                 </div>
        //             ))}
        //         </div>
        //     ))}
        // </div>
    );
}

export default ProjectCard;