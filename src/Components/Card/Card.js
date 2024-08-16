import { useState } from "react";
import './Card.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Card(lead){
    const navigate = useNavigate();
    const [edit, setEdit] = useState(false);
    const [products, setProducts] = useState(lead.products ? lead.products : []);
    const [name, setName] = useState(lead.name);
    const [email, setEmail] = useState(lead.email);
    const [number, setNumber] = useState(lead.number);

    const update = async(e)=>{
        try{
            e.preventDefault();
            const url = 'http://localhost:3070/edit/' + lead._id;
            const response = await axios.put(url, {email: email, name: name, number: number});
            setEdit(false);
            navigate("/");
        }catch(e){
            alert(e.message);
        }
        
    }

    const deleteLead = async(e)=>{
        try{
            e.preventDefault();
            const response = await axios.delete(`http://localhost:3070/delete/${lead._id}`);
            toast(response.data.message)
            setTimeout(()=>{
                navigate('/')
            }, 6000);
        }catch(e){
            alert(e.message)
        }
    }
    return(
        <>
            <ul className="ul-div">
                <li>
                    {edit 
                        ? <input name='email' type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1" value={email} onChange={e=>setEmail(e.target.value)}/>
                        : <div>{lead.email}</div>
                    }
                </li>
                <li>
                    {edit 
                        ? <input name='name' type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1" value={name} onChange={e=>setName(e.target.value)}/>
                        : <div>{lead.name}</div>
                    }
                </li>
                <li>
                    {edit 
                        ? <input name='number' type="text" className="form-control" placeholder="Number" aria-label="Number" aria-describedby="basic-addon1" value={number} onChange={e=>setNumber(e.target.value)}/>
                        : <div>{lead.number}</div>
                    }
                </li>
                <li style={{width:"10%", marginLeft: "150px"}}>
                    {edit 
                        ? <button type="submit" class="btn btn-success"onClick={(e)=>{update(e)}}>Save</button>
                        : <button type="submit" class="btn btn-success" onClick={(e)=>setEdit(true)}>Edit</button>
                    }
                </li>
                <li style={{width:"10%"}}>
                    <button type="submit" class="btn btn-success" onClick={(e)=>{deleteLead(e)}}>Delete</button>
                </li>
            </ul>
            <h3>Products</h3>
            <ul className="ul-div">
                {products.map(product =>
                    <li>{product}</li>
                )}
            </ul>
        </>

    )
}

export default Card;