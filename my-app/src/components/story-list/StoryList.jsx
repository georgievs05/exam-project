import { useEffect, useState } from "react"

import * as storyService from "../../services/storyService"
import StoryListItem from "./story-list-item/StoryListItem"



export default function StoryList(){

    const [stories, setStories] = useState([])

    useEffect(()=>{
        storyService.getAll()
        .then(result=> setStories(result))
    })

    return(
        <section id="all-stories-page" className="all-stories-page">
           <div className="container">
            <h1>All Stories</h1>

            {stories.map(story=>(
                <StoryListItem key={story._id}{...story}/>
            ))}

        
        
        </div>
         </section>
    )
}