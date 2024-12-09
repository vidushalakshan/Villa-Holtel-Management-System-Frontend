import React, { useEffect, useState } from "react";
import { getRoomTypes } from "../utils/ApiFunction";

const RoomTypeSelector = ({ handleRoomInputChange, newRoom }) => {
    const [roomTypes, setRoomTypes] = useState([]); // Use plural "roomTypes" for clarity
    const [showNewRoomTypeInput, setShowNewRoomTypeInput] = useState(false);
    const [newRoomType, setNewRoomType] = useState("");

    // Fetch room types when the component mounts
    useEffect(() => {
        getRoomTypes().then((data) => {
            setRoomTypes(data);
        });
    }, []);

    const handleNewRoomTypeInputChange = (e) => {
        setNewRoomType(e.target.value);
    };

    const handleAddNewRoomType = () => {
        if (newRoomType.trim() !== "") {
            setRoomTypes([...roomTypes, newRoomType]); // Add new room type to the list
            setNewRoomType("");
            setShowNewRoomTypeInput(false);
        }
    };

    return (
        <>
            {roomTypes.length > 0 && (
                <div>
                    <select
                        id="roomType"
                        name="roomType"
                        value={newRoom.roomType}
                        onChange={(e) => {
                            if (e.target.value === "Add New") {
                                setShowNewRoomTypeInput(true);
                            } else {
                                handleRoomInputChange(e);
                            }
                        }}
                        required
                    >
                        <option value="">Select a room type</option>
                        <option value="Add New">Add New</option>
                        {roomTypes.map((type, index) => (
                            <option key={index} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>

                    {showNewRoomTypeInput && (
                        <div className="input-group mt-2">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter a new room type"
                                value={newRoomType}
                                onChange={handleNewRoomTypeInputChange}
                            />
                            <button
                                className="btn btn-danger"
                                type="button"
                                onClick={handleAddNewRoomType}
                            >
                                Add
                            </button>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default RoomTypeSelector;
