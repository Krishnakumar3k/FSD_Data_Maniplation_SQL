import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {
    // State to store form input values
    const [inputval, setinputval] = useState({
        name: "",
        designation: "",
        email: "",
        phone: "",
        address: "",
    });

    // Function: Handle input changes (update state dynamically based on name attribute)
    const setdata = (e) => {
        const { name, value } = e.target;
        setinputval((preval) => ({
            ...preval,      // Keep previous values
            [name]: value,  // Update only the changed field
        }));
    };

    // Function: Handle form submission (send data to backend API)
    const usercreate = async (e) => {
        e.preventDefault(); // Prevent page reload when form is submitted

        // Simple client-side validation
        if (!inputval.name || !inputval.email) {
            alert("Name and Email are required!");
            return; // Stop if required fields are missing
        }

        try {
            // Destructure only required fields (ignore extra ones if present)
            const { name, designation, email, phone, address } = inputval;

            // Send POST request to backend API with form data
            const response = await axios.post("http://localhost:8080/api/create", {
                name,
                designation,
                email,
                phone,
                address,
            });

            // Show success message returned by the backend
            alert(response.data.message || "User registered successfully!");

            // Reset form fields after successful registration
            setinputval({
                name: "",
                designation: "",
                email: "",
                phone: "",
                address: "",
            });
        } catch (error) {
            // Catch network or server errors and display them
            console.error("Error creating user:", error.response?.data || error.message);
            alert(error.response?.data?.message || "Failed to register user!");
        }
    };

    const navigate = useNavigate();

    return (
        <div className="container mt-5 mb-5">
            {/* Header with navigation back to Home */}
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="fw-bold text-primary">Register</h2>
                <NavLink to="/" className="btn btn-outline-dark">Home</NavLink>
            </div>

            {/* Registration form */}
            <div className="row justify-content-center">
                <form
                    className="col-lg-10 col-md-12 p-4 shadow-lg rounded bg-light"
                    onSubmit={usercreate}
                >
                    <div className="row g-4">
                        {/* Left section of form */}
                        <div className="col-lg-6 col-md-12">
                            {/* Name Input */}
                            <div className="form-group mb-3">
                                <label className="fw-semibold">Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    value={inputval.name}
                                    onChange={setdata}
                                    placeholder="Enter your name"
                                />
                            </div>

                            {/* Email Input */}
                            <div className="form-group mb-3">
                                <label className="fw-semibold">Email</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    value={inputval.email}
                                    onChange={setdata}
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Address Input */}
                            <div className="form-group mb-3">
                                <label className="fw-semibold">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    value={inputval.address}
                                    onChange={setdata}
                                    placeholder="Enter your address"
                                />
                            </div>
                        </div>

                        {/* Transparent vertical divider */}
                        <div className="col-lg-1 d-none d-lg-flex justify-content-center">
                            <div style={{
                                width: "1px",
                                background: "rgba(0,0,0,0.1)",
                                height: "100%",
                            }}></div>
                        </div>

                        {/* Right section of form */}
                        <div className="col-lg-5 col-md-12">
                            {/* Designation Input */}
                            <div className="form-group mb-3">
                                <label className="fw-semibold">Designation</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="designation"
                                    value={inputval.designation}
                                    onChange={setdata}
                                    placeholder="Enter your designation"
                                />
                            </div>

                            {/* Phone Input */}
                            <div className="form-group mb-3">
                                <label className="fw-semibold">Phone</label>
                                <input
                                    type="tel"
                                    className="form-control"
                                    name="phone"
                                    value={inputval.phone}
                                    onChange={setdata}
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="text-end mt-4">
                                <button
                                    type="submit"
                                    className="btn btn-primary px-4"
                                    onClick={() => navigate("/")}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
