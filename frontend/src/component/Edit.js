import React, { useState ,useEffect} from 'react'
import { NavLink ,useParams} from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Edit() {
    const navigate = useNavigate();
    
    const [inputdata,setInputdata]=useState({
        "name":"",
        "email":"",
        "location":"",
        "contact":"",
        "startDate":"",
        "endDate":"",
        "school":"",
        "docuLink":""
    })
    
    //onchange function
    const setstud=(e)=>{
        console.log(e.target.value);
        const {name,value}=e.target;
        setInputdata((prestud)=>{
            return{
                ...prestud,[name]:value
            }
        })
    }


    //get single data student
    const { id } = useParams("");
    console.log(id);

    const getstuddata = async () => {
        const res = await fetch(`http://localhost:5000/getstud/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();

        if (res.status === 422 || !data) {
            console.log("error ");
        } else {
            setInputdata(data)
            console.log("get data");
        }
    }

    useEffect(() => {
        getstuddata();
    }, [])

    //update student Data
    const updatestud= async(e)=>{
        e.preventDefault();

        const {name, email, location, contact, startDate, endDate, school, docuLink} =inputdata;
        const res2 = await fetch(`http://localhost:5000/updatestud/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,email, location, contact, startDate, endDate, school, docuLink
            })
        });
        const data2= await res2.json();
        setInputdata(data2);
        toast.success('Please wait  !', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true, 
            progress: undefined,
            });
        setTimeout(() => {
            navigate('/allstud');
          }, 3000);


    }

    return (
        <div className='container mt-5'>
            <h4>Edit Student Information</h4>
            <div className='underline1'></div>
            <form className='mt-5 shadow p-5 w-75'>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Name" 
                    onChange={setstud} name="name" value={inputdata.name}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email Address</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Email Address"
                    onChange={setstud} name="email" value={inputdata.email}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Location</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Location" 
                    onChange={setstud} name="location" value={inputdata.location}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Contact Number</label>
                    <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Contact Number"
                    onChange={setstud} name="contact" value={inputdata.contact}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Start Date</label>
                    <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Enter Start Date"
                    onChange={setstud} name="startDate" value={inputdata.startDate}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">End Date</label>
                    <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Enter End Date"
                    onChange={setstud} name="endDate" value={inputdata.endDate}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">School</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter School"
                    onChange={setstud} name="school" value={inputdata.school}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Document Link</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Document Link"
                    onChange={setstud} name="docuLink" value={inputdata.docuLink}/>
                </div>
                <div className='d-flex'>
                         <button className='btn btn-primary' onClick={updatestud}>update Student</button>
                         <ToastContainer />
                         <NavLink className='btn btn-primary ms-auto' to="/allstud">Back to Home</NavLink>
                </div>
              

            </form>
        </div>
    )
}
