import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import * as storyService from '../../services/storyService';
import FeaturedStories from "./feauturedStories";

const Home =(
    _id,
)=>{


    const [featuredStories, setFeaturedStories] = useState([])

    useEffect(()=>{
        storyService.getLatest()
        .then(result=> setFeaturedStories(result.slice(0,3)))
       
    })

    return(
        <main>
    <section className="main-section">
        
        <div className="main-section-text">
            <h2>Share your travel stories with the world!</h2>
            <p>Discover new places, cultures, and adventures. Share your travel stories with the global community.</p>
            <Link to="/about" className="cta-button">Learn More</Link>
        </div>
    </section>

    <section className="featured-stories">
    <div className="container">
        <h2>Featured Stories</h2>

        {featuredStories.map(story => <FeaturedStories {...story} key={story._id}/>)}

    </div>
</section>

</main>

    )
}

export default Home