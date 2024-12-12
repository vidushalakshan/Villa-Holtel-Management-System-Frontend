import React, { useEffect, useState } from "react";

const [rooms, setRooms] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [roomsPerPage] = useState(8);
const [isLoading, setIsLoading] = useState(false);
const [filteredRooms, setFileredRooms] = useState([]);
const [selectedRoomType, setSelectedRoomType] = useState("");
const [successMessage, setSuccessMessage] = useState("");
const [errorMessage, setErrorMessage] = useState("");


useEffect(() => {
  fetchRooms()
}, [])

const ExisitingRooms = async () => {
  
  setIsLoading(true)
  try{
    const result = await getAllRooms()
    setRooms(result)
    setIsLoading(false)
  }catch (error) {
    setErrorMessage(error.message)
  }

  useEffect(() => {
    if(salectedRoomType === ""){
      setFileredRooms(rooms)
    }else {
      const filtered  = rooms.filter((room) => room.roomType === selectedRoomType)
      setFileredRooms(filtered)
    }
    setCurrentPage(1)
  }, [rooms, selectedRoomType])

  const calculateTotalPages = (filteredRooms, roomsPerPage, room) => {
    const totalRooms =  filteredRooms.length > 0 ? filteredRooms.length : rooms.length
    return Math.ceil(totalRooms / roomsPerPage)
  }

  const indexOfLastRoom = currentPage * roomsPerPage
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage
  const currentRooms = filteredRooms.slice(indexOfFirstRoom, indexOfLastRoom)

  return <div></div>;
};

export default ExisitingRooms;
