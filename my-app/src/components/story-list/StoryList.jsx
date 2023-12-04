export default function StoryList(){


    return(
        <section id="all-stories-page" className="all-stories-page">
           <div className="container">
            <h1>All Stories</h1>

        <div className="story-card">
            <img src='https://images.unsplash.com/photo-1512056923875-49b35ba21fe2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Travel Story Image"/>
            <div className="story-info">
                <h6>Italy</h6>
                <h2>My eu trip</h2>
                <a href="#" className="details-button">Details</a>
            </div>
        </div>

        <div className="story-card">
            <img src='https://images.unsplash.com/photo-1512056923875-49b35ba21fe2?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Travel Story Image"/>
            <div className="story-info">
                <h6>Italy</h6>
                <h2>My eu trip</h2>
                <a href="#" className="details-button">Details</a>
            </div>
        </div>
        
        </div>
         </section>
    )
}