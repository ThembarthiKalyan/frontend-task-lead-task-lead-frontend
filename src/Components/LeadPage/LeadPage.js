import './LeadPage.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

function LeadPage(){
    let navigate = useNavigate();
    const createLead = async(e) =>{
        e.preventDefault();
        let products = e.target.products.value;
        let productsArr = products.split(',');
        
        const response = await axios.post('http://localhost:3070/create-lead', {
            name: e.target.name.value,
            email: e.target.email.value,
            number: e.target.number.value,
            products: productsArr
        })

        toast(response.data.message)

        setTimeout(()=>{
            navigate('/')
        }, 6000);
    }

    return(
        <div>
            <form className='form-login' onSubmit={(e)=>{createLead(e)}}>
                <input name='email' type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"/>
                <input name='name' type="text" className="form-control" placeholder="Name" aria-label="Name" aria-describedby="basic-addon1"/>
                <input name='number' type="text" className="form-control" placeholder="Number" aria-label="Number" aria-describedby="basic-addon1"/>
                <input name='products' type="text" className="form-control" placeholder="Products" aria-label="Products" aria-describedby="basic-addon1"/>
                <div className="login-button">
                    <button type="submit" class="btn btn-success">Create Lead</button>
                </div>
            </form>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition= "Bounce"
            />
        </div>
    )
}

export default LeadPage;