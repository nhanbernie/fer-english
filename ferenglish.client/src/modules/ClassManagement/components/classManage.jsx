import React, { useState } from 'react';
import '../styles/classManage.css';
import { FaPlus } from 'react-icons/fa';

const ClassManage = () => {
    const [filterClassName, setFilterClassName] = useState('');

    const handleFilterChange = (e) => {
        setFilterClassName(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            console.log('Filtering by class name:', filterClassName);
            // Thực hiện lọc lớp ở đây, có thể thêm logic để cập nhật danh sách lớp
        }
    };

    const classData = [
        { className: 'En101', teacherName: 'Huỳnh Yến Vi', nameCenter: 'ABC English', studentNumber: 20 },
        { className: 'En102', teacherName: 'Huỳnh Tấn Lực', nameCenter: 'ABC English', studentNumber: 13 },
        { className: 'En103', teacherName: 'Nguyễn Trọng Tín', nameCenter: 'ABC English', studentNumber: 14 },
        { className: 'En104', teacherName: 'Huỳnh Tấn Lực', nameCenter: 'ABC English', studentNumber: 20 },
        { className: 'En105', teacherName: 'Bùi Thế Sơn', nameCenter: 'ABC English', studentNumber: 15 },
        { className: 'En106', teacherName: 'Huỳnh Tấn Lực', nameCenter: 'ABC English', studentNumber: 17 },
        { className: 'En201', teacherName: 'Tô Thiện Nhân', nameCenter: 'ABC English', studentNumber: 11 },
        { className: 'En301', teacherName: 'Huỳnh Tấn Lực', nameCenter: 'ABC English', studentNumber: 12 },
        { className: 'En401', teacherName: 'Phan Nguyên Vũ', nameCenter: 'ABC English', studentNumber: 10 },
    ];

    // Lọc danh sách lớp theo tên
    const filteredClasses = classData.filter(item => item.className.includes(filterClassName));

    return (
        <div className='classManager-template'>
        <div className="container">
            <div className="header">
                <div className="filter">
                    <input
                        type="text"
                        value={filterClassName}
                        onChange={handleFilterChange}
                        onKeyPress={handleKeyPress} // Thêm sự kiện key press
                        placeholder="Enter class name"
                        className="filter-input"
                    />
                    {/* Cập nhật số lượng item dựa trên danh sách đã lọc */}
                    <span className="item-count">{filteredClasses.length} items</span>
                </div>
                <div className="actions">
                    <button className="button button-primary">
                        <FaPlus className="button-icon" />
                        Add Student
                    </button>
                    <button className="button button-primary">
                        <FaPlus className="button-icon" />
                        Add Teacher
                    </button>
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th className='first-row'>Class Name</th>
                        <th>Teacher Name</th>
                        <th>Name Center</th>
                        <th>Student Number</th>
                        <th className='last-row'></th>
                    </tr>
                </thead>
                <tbody>
                    {filteredClasses.map((item, index) => (
                        <tr key={index}>
                            <td className='first-row'>{item.className}</td>
                            <td className="teacher-name">{item.teacherName}</td>
                            <td>{item.nameCenter}</td>
                            <td>{item.studentNumber}</td>
                            <td className="ellipsis-icon last-row">
                                <i className="fas fa-ellipsis-h"></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
};

export default ClassManage;
