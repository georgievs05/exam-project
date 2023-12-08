import { useContext } from "react";
import { useState } from "react";
import AuthContext from "../contexts/authContext";


export default function useForm(submitHandler, initialValues){
const {setErrMessage} = useContext(AuthContext)

const [values, setValues] = useState(initialValues)

const onChange = (e) =>{
    setValues(state =>({
        ...state,
        [e.target.name]: e.target.value
    }))
    setErrMessage("")
    

}


const onSubmit = (e)=>{
    e.preventDefault()

    submitHandler(values)
}

return {
values, 
onChange,
onSubmit
}


}