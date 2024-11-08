/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/styles.css';

const Attendance = () => {
    const navigate = useNavigate(); // Hook for navigation

    const [classes, setClasses] = useState([
        { id: 1, name: "En101", teacher: "Huỳnh Tấn Lực", center: "ABC English", students: 20 },
        { id: 2, name: "En102", teacher: "Nguyễn Trọng Tín", center: "AAA English", students: 16 },
        { id: 3, name: "En103", teacher: "Bùi Thế Sơn", center: "AAA English", students: 16 },
        { id: 4, name: "En104", teacher: "Tô Thiện Nhân", center: "AAA English", students: 18 },
    ]);

    const handleNavigateToClass = (classId) => {
        navigate(`/class-attendance/${classId}`);  // Thêm tham số classId vào URL
    };
    

    return (
        <div className="attendance-tracking">
            <div className="class-cards">
                {classes.map((classInfo) => (
                    <div 
                        className="class-card" 
                        key={classInfo.id}
                        onClick={() => handleNavigateToClass(classInfo.id)} // Navigate on click
                    >
                        <h3>Class {classInfo.name}</h3>
                        
                        {/* Teacher Name Row */}
                        <div className="info-row">
                            <span className="label">Teacher Name</span>
                            <span className="value">{classInfo.teacher}</span>
                        </div>
                        
                        {/* Center Name Row */}
                        <div className="info-row">
                            <span className="label">Center Name</span>
                            <span className="value">{classInfo.center}</span>
                        </div>
                        
                        {/* Student Number Row */}
                        <div className="info-row">
                            <span className="label">Student Number</span>
                            <span className="value">{classInfo.students}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Attendance;
