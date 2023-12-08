import { useNavigate , Navigate} from "react-router-dom"
import * as storyService from "../../services/storyService"
import { useContext } from "react"
import AuthContext from "../../contexts/authContext"


export default function AddStory(){
    const{isAuthenticated}= useContext(AuthContext)
    if(!isAuthenticated){
       return <Navigate to="/login"/>
    }

    const navigate = useNavigate()

    const addStorySubmitHandler = async (e)=>{
        e.preventDefault();

        const storyData = Object.fromEntries(new FormData(e.currentTarget))

        try {
            await storyService.create(storyData)
            navigate('/stories')
            
        } catch (err) {
            console.log(err)
        }
    }

    return(
        <section id="create-page" className="auth">
      <form id="create" onSubmit={addStorySubmitHandler}>
        <div className="container">

            <h1>Add your travel story</h1>
            <label htmlFor="story-title">Title:</label>
            <input type="text" id="title" name="title" placeholder="Enter story title..." required/>

            <label htmlFor="location">Location:</label>
            <input type="text" id="location" name="location" placeholder="Enter story location..." required/>

            <label htmlFor="date">Date:</label>
            <input type="text" id="date" name="date" placeholder="Enter the date of your story..."required/>

            <label htmlFor="cover-image">Cover Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a cover photo..."required/>

            <label htmlFor="story-content">Story Content:</label>
            <textarea name="storyContent" id="story-content" placeholder="Write your travel story..."required></textarea>
            <input className="btn submit" type="submit" value="Create Story"/>
        </div>
    </form>
</section>
    )
}