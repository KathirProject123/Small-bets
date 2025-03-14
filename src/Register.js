import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { supabase } from "./supabaseClient"; // We’ll set this up next

function Register() {
    const [formData, setFormData] = useState({
        fname: "",
        lastname: "",
        email: "",
        contact: "",
        dept: "",
        year: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase.auth.signUp({
            email: formData.email,
            password: formData.password,
            options: {
                data: {
                    fname: formData.fname,
                    lastname: formData.lastname,
                    contact: formData.contact,
                    dept: formData.dept,
                    year: formData.year
                }
            }
        });

        if (error) {
            alert(error.message);
        } else {
            console.log("Signup data", data);
            alert("Registration successful!");
            setTimeout(() => {
                navigate("/login");
            }, 1500); // Adjust the delay time (1500 ms = 1.5 seconds)
        }
    };

    return (
        <div className="register-container">
            <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <input type="text" name="fname" placeholder="First Name" onChange={handleChange} required />
                <input type="text" name="lastname" placeholder="Last Name" onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
                <input type="text" name="contact" placeholder="Contact Number" onChange={handleChange} required />
                <input type="text" name="dept" placeholder="Department" onChange={handleChange} required />
                <input type="number" name="year" placeholder="Year of Passing" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Register</button>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
}

export default Register;
