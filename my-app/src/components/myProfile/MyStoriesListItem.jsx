import { Link } from "react-router-dom"


export default function MyStoryiesListItem({
    _id,
    imageUrl,
    location,
    title
}){

    return(
        <div className="story-card">
            <img src={imageUrl} alt="Travel Story Image"/>
            <div className="story-info">
                <h3>{location}</h3>
                <h2>{title}</h2>
                <Link to= {`/stories/${_id}`}className="details-button">Details</Link>
            </div>
        </div>
    )
}