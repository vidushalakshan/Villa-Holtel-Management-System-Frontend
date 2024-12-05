import React, { useEffect, useState } from 'react'
import { getRoomTypes } from '../utils/ApiFunction'

const RoomTypeSelector = () => {
    const [roomTypes , setRoomTypes] = useState(false)
    const [showNewROomTypeInput , setShowNewRoomTypesInput] = useState(false)
    const [newRoomType, setNewRoomType] = useState("")

    useEffect(() => {
        getRoomTypes().then((data) => {
            setRoomTypes(data)
        })
    }, [])
    
    const handleNewRoomInputChange = (e) => {
        setNewRoomType(e.target.value);
    }

  return (
    <div>
        
    </div>
  )
}

export default RoomTypeSelector
