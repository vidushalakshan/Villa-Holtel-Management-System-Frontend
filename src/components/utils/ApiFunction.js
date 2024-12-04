import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:9192"
})


//this function add a new room to the database
export async function addRoom (image, roomType, roomPrice) {
    const formData = new FormData()
    formData.append("image", image)
    formData.append("roomType", roomType)
    formData.append("roomPrice", roomPrice)

    const response  = await api.post("/api/v1/addroom", formData)
    if(response.status === 201){
        return true
    }else {
        return false
    }
}


// this function gets all types from thee database
export async function getRoomTypes() {
    try{
        const response = await api.get("/api/v1/roomtype")
        return response.data
    }catch(error){
        throw new Error("Error fetching room types")
    }
    
}