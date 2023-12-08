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
                <h6>{location}</h6>
                <h2>{title}</h2>
                <Link to={`/stories/${_id}`} className="details-button">Details</Link>
            </div>
        </div>

    )

}