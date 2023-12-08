import { useEffect } from "react"
import { Link,Navigate } from "react-router-dom"

import * as storyService from "../../services/storyService"
import { useContext } from "react"
import AuthContext from "../../contexts/authContext"

import MyStoryiesListItem from "./MyStoriesListItem"
import { useState } from "react"

export default function MyProfile(){
    const{isAuthenticated}= useContext(AuthContext)
    if(!isAuthenticated){
       return <Navigate to="/login"/>
    }

    const {userId, email} = useContext(AuthContext)

    const [stories, setStories] = useState([])

    useEffect(()=>{
        storyService.getUsersStories(userId)
        .then(result=> setStories(result))
    })

    return(<section id="my-profile">
    <div className="profile-info">
        <h1>My Profile</h1>
        <img src="https://i.pinimg.com/originals/77/46/99/77469931a2c21816906c5058c5dbce49.jpg" alt="User Avatar" className="avatar"/>
        <p>Email: {email}</p>
    </div>

    <div className="profile-actions">
        <h2>My Stories</h2>
     

        {stories.map(story=>(
                <MyStoryiesListItem key={story._id}{...story}/>
            ))}
       
    </div>
</section>)
    
}