import { Link } from "react-router-dom"

const Home =()=>{

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

        <div className="story-card">
            <img src='https://images.unsplash.com/photo-1512056923875-49b35ba21fe2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Travel Story Image"/>
            <div className="story-info">
                <h6>Italy</h6>
                <h2>My EU Trip</h2>
                <a href="#" className="details-button">Details</a>
            </div>
        </div>

        <div className="story-card">
            <img src='https://images.unsplash.com/photo-1512056923875-49b35ba21fe2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Travel Story Image"/>
            <div className="story-info">
                <h6>Italy</h6>
                <h2>My EU Trip</h2>
                <a href="#" className="details-button">Details</a>
            </div>
        </div>

    </div>
</section>

</main>

    )
}

export default Home