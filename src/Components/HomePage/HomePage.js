import { useState, useEffect } from "react";
import Card from "../Card/Card";
import {Link} from 'react-router-dom';
import axios from "axios";
import './HomePage.css';

function HomePage(){
    const [leads, setLeads] = useState([]);

    async function getLeads(){
        try{
            const response = await axios.get("http://localhost:3070/all-lead");
            setLeads(response.data.data);
        }catch(e){
            console.log(e);
        }
    }

    useEffect(() => {
        getLeads();
    }, []);

    return(
        <>
            <div style={{textAlign: "center"}}>
                <Link to='/lead'>
                    <button type="submit" class="btn btn-success">Create Lead</button>
                </Link>
                
            </div>
            <div className="main-div">
                {
                    leads.map(lead => 
                        <Card key={lead._id} {...lead}/>)
                }
            </div>
        </>

    )
}

export default HomePage;