import { useEffect, useState } from "react";
import axios from 'axios';
import { API_URL } from "./constants";

function AllDebuts() {
    const [serverData, setServerData] = useState([]);

    useEffect(() => {
        async function getDebuts() {
            const response = await axios(`${API_URL}/debuts`);
            setServerData(response.data.payload);
        }

        getDebuts();
    }, [])

    return (
        <>
            {
                serverData.map((debut) => (
                    <li key={debut._id}>{debut.characterName}</li>
                ))
            }
        </>
    )
}

export default AllDebuts;