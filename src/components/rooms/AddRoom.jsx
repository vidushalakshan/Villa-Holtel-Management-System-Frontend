import React, {useState} from 'react'
import { addRoom } from '../utils/ApiFunction'

const AddRoom = () => {
    const [newRoom, setNewRoom] = useState({
        photo : null,
        roomType: "",
        roomPrice: ""
    })

    const[imagePreview, setImagePreview] = useState("")
    const[successMessage, setSuccessMessage] = useState("")
    const[errorMessage, setErrorMessage] = useState("")

    const handleRoomInputChange = (e) => {
        const name = e.target.name
        let value = e.target.value
        if(name === "roomPrice") {
            if(!isNaN(value)){
                value.parseInt(value)
            }else {
                value=""
            }
        }
        setNewRoom({...newRoom, [name]: value})
    } 

    const hendleImageChange = (e) => {
        const selectedImage = e.target.files[0]
        setNewRoom({...newRoom, phooto: selectedImage})
        setImagePreview(URL.createObjectURL(selectedImage))
    }

    const handleSubmit  = async (e) => {
        e.preventDefault()
        try{
            const success = await AddRoom(newRoom.photo, newRoom.roomType, newRoom.roomPrice)
            if(success !== underfined) {
                setSuccessMessage("A new room added to the database")
                setNewRoom({photo: null, roomType:"", roomPrice:""})
                setImagePreview("")
                setErrorMessage("")
            }
        }catch(error){
            setErrorMessage(error.message)
        }
    }

  return (
    <div>
        
    </div>
  )
}

export default AddRoom
