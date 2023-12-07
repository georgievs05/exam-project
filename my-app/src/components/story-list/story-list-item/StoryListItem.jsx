export default function StoryListItem({
    imageUrl,
    location,
    title
}){

    return(
        <div className="story-card">
            <img src={imageUrl} alt="Travel Story Image"/>
            <div className="story-info">
                <h6>{location}</h6>
                <h2>{title}</h2>
                <a href="#" className="details-button">Details</a>
            </div>
        </div>
    )
}