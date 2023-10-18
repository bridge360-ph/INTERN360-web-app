import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

export default function Addstud() {
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
        setInputdata({ ...inputdata, [e.target.name]: e.target.value });   
    }
    //onclick event
    const addinpdata = async (e) => {
        e.preventDefault();

        const { name, email, location, contact, startDate, endDate, school, docuLink } = inputdata;

        const res = await fetch("http://localhost:5000/addstud", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,email, location, contact, startDate,endDate, school, docuLink
            })
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 422 || !data) {
            console.log("error ");
            alert("error");

        } else {
            setInputdata(data);
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
    }
    return (
        <div className='container mt-5'>
            <h4>All Interns Information</h4>
            <div className='underline1'></div>
            <form className='mt-5 shadow p-5 w-75'>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Student Name" 
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
                    <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Enter Start date"
                    onChange={setstud} name="startDate" value={inputdata.startDate}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">End Date</label>
                    <input type="date" className="form-control" id="exampleFormControlInput1" placeholder="Enter End date"
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
                         <button className='btn btn-primary' onClick={addinpdata}>Add Intern</button>
                         <ToastContainer />
                         <NavLink className='btn btn-primary ms-auto' to="/allstud">Back to Home</NavLink>
                </div>
              

            </form>
        </div>
    )
}
