import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Detail.css";

const PhotoDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const photo = location.state?.photo;

    if (!photo) {
        return (
            <div className="no-photo">
                <h2>Photo not found!</h2>
                <button onClick={() => navigate(-1)}>Go Back</button>
            </div>
        );
    }
};

export default PhotoDetails;