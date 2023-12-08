import { useNavigate, useParams,Navigate} from "react-router-dom";

import * as storyService from '../../services/storyService'
import { useEffect,useState } from "react";
import { useContext } from "react";
import AuthContext from "../../contexts/authContext";


export default function StoryEdit(){
    const{ isAuthenticated}= useContext(AuthContext)

    if(!isAuthenticated){
        return <Navigate to="/login"/>
    }
    const navigate = useNavigate();

    const { storyId } = useParams();
    const [story, setStory] = useState({
        title: '',
        location: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    });

    useEffect(() => {
        storyService.getOne(storyId)
            .then(result => {
                setStory(result);
            });
    }, [storyId]);

    const editstorySubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await storyService.edit(storyId, values);

            navigate('/stories');
        } catch (err) {
            console.log(err);
        }
    }

    const onChange = (e) => {
        setStory(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };


    return(
        <section id="create-page" className="auth">
        <form id="create" onSubmit={editstorySubmitHandler}>
            <div className="container">
                <h1>Edit Travel Story</h1>
                <label htmlFor="story-title">Story Title:</label>
                <input type="text" id="story-title" name="title" value={story.title} onChange={onChange} placeholder="Enter story title..." required />

                <label htmlFor="story-location">Location:</label>
                <input type="text" id="story-location" name="location" value={story.location} onChange={onChange}  placeholder="Enter story location..."required />

                <label htmlFor="date">Date:</label>
                <input type="text" id="date" name="date"  value={story.date}  onChange={onChange} placeholder="Enter the date of your story..."required/>

                <label htmlFor="story-image">Image URL:</label>
                <input type="text" id="story-image" name="imageUrl"value={story.imageUrl} onChange={onChange} placeholder="Enter image URL..." required/>

               <label htmlFor="story-content">Story Content:</label>
               <textarea name="storyContent" id="story-content" value={story.storyContent} onChange={onChange} placeholder="Write your travel story..." required></textarea>
        
                <input className="btn submit" type="submit" value="Save Changes" />
            </div>
        </form>
    </section>
    )
}