import { Link } from "react-router-dom";
import Path from "../../paths";

export default function FeaturedStories({
_id,
imageUrl,
title,
location
}) {

    return(
        <div className="story-card">
            <img src={imageUrl} alt="Travel Story Image"/>
            <div className="story-info">
                <h3>{location}</h3>
                <h4>{title}</h4>
                <Link to={`/stories/${_id}`} className="details-button">Details</Link>
            </div>
        </div>

    )

}