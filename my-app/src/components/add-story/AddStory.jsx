export default function AddStory(){

    return(
        <section id="create-page" className="auth">
    <form id="create" 
    // onSubmit={createStorySubmitHandler}
    >
        <div className="container">

            <h1>Add your travel story</h1>
            <label htmlFor="story-title">Title:</label>
            <input type="text" id="title" name="title" placeholder="Enter story title..."/>

            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" placeholder="Enter story location..."/>

            <label htmlFor="date">Date:</label>
            <input type="date" id="date" name="date"/>

            <label htmlFor="cover-image">Cover Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a cover photo..."/>

            <label htmlFor="story-content">Story Content:</label>
            <textarea name="story-content" id="story-content" placeholder="Write your travel story..."></textarea>
            <input className="btn submit" type="submit" value="Create Story"/>
        </div>
    </form>
</section>
    )
}