import { useContext, useEffect, useState, useReducer} from "react"
import { Link, useNavigate, useParams } from "react-router-dom"

import * as storyServise from "../../services/storyService";
import * as commentService from "../../services/commentService"
import AuthContext from "../../contexts/authContext";
import useForm from "../../hooks/useForm";

const reducer = (state, action) => {
    switch (action?.type) {
        case 'GET_ALL_COMMENTS':
            return [...action.payload];
        case 'ADD_COMMENT':
            return [...state, action.payload];
        case 'EDIT_COMMENT':
            return state.map(c => c._id === action.payload._id ? { ...c, text: action.payload.text } : c)
        default:
            return state;
    }
}


export default function StoryDetails(){
    const navigate = useNavigate()
    const {email, userId} = useContext(AuthContext)
    const [story, setStory] = useState({})
    const [comments, dispatch ] = useReducer(reducer, [])
    const {storyId} = useParams()

    useEffect(() => {
        storyServise.getOne(storyId)
            .then(setStory);

        commentService.getAll(storyId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_COMMENTS',
                    payload: result,
                });
            });
    }, [storyId]);

    const addCommentHandler = async (values) => {
        const newComment = await commentService.create(
            storyId,
            values.comment
        );

        newComment.owner = { email };

        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment
        })
    }

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = confirm(`Are you sure you want to delete ${story.title}`);

        if (hasConfirmed) {
            await storyServise.remove(storyId);

            navigate('/stories');
        }
    }
    console.log(userId, story._ownerId)

    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: '',
    });

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
                
                {userId === story._ownerId && (
                    <div className="buttons">
                    <Link to={`/stories/${story._id}/edit`} className="button">Edit</Link>
                    <a className="button" onClick={deleteButtonClickHandler}>Delete</a>
                </div>
                )}
                   
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
                      
                        {comments.length === 0 &&<p className="no-comment">No comments yet.</p>}
                    </ul>
                </div>

               

            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onSubmit}>
                    <textarea name="comment" value={values.comment} onChange={onChange} placeholder="Write your comment here..."></textarea>
                    <input className="btn submit" type="submit" value="Add Comment"/>
                </form>
            </article>
        </section>
    </main>
    )
}