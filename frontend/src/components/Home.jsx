import React from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../App.css";

const Home = () => {
    const [getuserdata, setUserdata] = React.useState([]);

    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/getusers");
            const data = response.data;
            setUserdata(data);
            console.log("User data getting:", data);
        } catch (error) {
            console.log("Error to getting data", error);
        }
    };

    React.useEffect(() => {
        getUser();
    }, []);

    const navigate = useNavigate();

    return (
        <div className="container-fluid mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="fw-bold text-primary">User Records</h3>
                <button
                    onClick={() => navigate('/register')}
                    className="btn btn-primary shadow-sm px-3 py-2 rounded"
                >
                    + Add Data
                </button>
            </div>

            <div className="card shadow-lg border-0 rounded-3">
                <div className="card-body">
                    <h5 className="card-title mb-3">All Users</h5>
                    <div className="table-responsive">
                        <table className="table table-hover table-striped align-middle custom-table">
                            <thead className="table-dark">
                                <tr>
                                    <th>Sr. No.</th>
                                    <th>Name</th>
                                    <th>Designation</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Address</th>
                                    <th className="text-end">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getuserdata.map((item, index) => (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.designation}</td>
                                        <td>{item.email}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.address}</td>
                                        <td className="text-end">
                                            <div className="d-flex justify-content-end gap-2 flex-wrap">
                                                <button className="btn btn-outline-success btn-sm">
                                                    <RemoveRedEyeIcon />
                                                </button>
                                                <button className="btn btn-outline-primary btn-sm">
                                                    <CreateIcon />
                                                </button>
                                                <button className="btn btn-outline-danger btn-sm">
                                                    <DeleteIcon />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                {getuserdata.length === 0 && (
                                    <tr>
                                        <td colSpan="7" className="text-center py-3 text-muted">
                                            No users found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
