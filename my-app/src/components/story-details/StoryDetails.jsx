import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import * as storyServise from "../../services/storyService";
import * as commentService from "../../services/commentService"
import AuthContext from "../../contexts/authContext";

export default function StoryDetails(){
    const {email} = useContext(AuthContext)
    const [story, setStory] = useState({})
    const [comments,setComments] = useState([])
    const {storyId} = useParams()

    useEffect(()=>{
        storyServise.getOne(storyId)
        .then(setStory)
        
        commentService.getAll(storyId)
        .then(setComments)
    }, [storyId])


    const addCommentHandler =async(e)=>{
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const newComment = await commentService.create(
            storyId,
            formData.get("comment")
        );

        setComments(state => [...state, {...newComment, owner:{email}}])

    }

    return(
        <main className="details-container">
        <section id="story-details">
            <h1>Story Details</h1>
            <div className="info-section">

                <div className="story-header">
                    <h1>{story.title}</h1>
                    <p className="location">Location: {story.location}</p>
                    
                </div>

                <img className="story-picture" src={story.imageUrl} alt="Story Image" />
                <h2 className="text">
                   {story.storyContent}
                </h2>

                <p className="date">Date: {story.date}</p>
                
                {/* <!-- Edit/Delete buttons ( Only visible for the creator of this story ) --> */}
                   <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div>
            </div>


                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* <!-- Sample Comment --> */}
                      
            

                        {comments.map(({_id, text, owner:{email}})=>(
                        <li key={_id} className="comment">
                        <p>{email}: {text}</p>
                         </li>
                    ))}
                        {/* <!-- Add more comments dynamically based on your data --> */}

                        {/* <!-- No comments message --> */}
                        {comments.length === 0 &&<p className="no-comment">No comments yet.</p>}
                    </ul>
                </div>

               

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={addCommentHandler}>
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment"/>
                </form>
            </article>
        </section>
    </main>
    )
}