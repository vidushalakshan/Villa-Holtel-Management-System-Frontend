import axios from "axios"

export const api = axios.create({
    baseURL: "http://localhost:9192"
})


//this function add a new room to the database
export async function addRoom (photo, roomType, roomPrice) {
    const formData = new FormData()
    console.log("photo", photo)
    formData.append("photo", photo)
    formData.append("roomType", roomType)
    console.log("roomType:", roomType);
console.log("Form Data Before Sending:");
formData.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
    formData.append("roomPrice", parseFloat(roomPrice));
    try {
        const response = await api.post("/api/v1/addroom", formData, {
            headers: {
                "Content-Type": "multipart/form-data", 
            },
        });
        if (response.status === 201 || response.status === 200) {
            return true;
        } else {
            console.error("Unexpected response:", response);
            return false;
        }
    } catch (error) {
        console.error("Error in addRoom:", error.response?.data || error.message);
        throw error;
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