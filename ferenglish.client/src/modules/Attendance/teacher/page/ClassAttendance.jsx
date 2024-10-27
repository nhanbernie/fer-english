// src/modules/Attendance/teacher/page/ClassAttendance.jsx
import { useParams } from 'react-router-dom';
import '../styles/styles.css';

const ClassAttendance = () => {
    const { classId } = useParams();

    const students = [
        { id: "En101", name: "Nguyễn Gia Thịnh", email: "t@gmail.com", course: "IELTS 8+" },
        { id: "En101", name: "Ngô Bảo Anh", email: "a@gmail.com", course: "IELTS 8+" },
        { id: "En101", name: "Nguyễn Thục Linh", email: "linh@gmail.com", course: "IELTS 8+" },
        { id: "En101", name: "Trương Cẩm Tú", email: "tu@gmail.com", course: "IELTS 8+" },
        { id: "En101", name: "Bùi Minh Anh", email: "anh@gmail.com", course: "IELTS 8+" },
        { id: "En101", name: "Nguyễn Quốc Anh", email: "a1@gmail.com", course: "IELTS 8+" },
    ];

    return (
        <div className="class-attendance">
            <h1>Attendance - Class {classId}</h1>
            <table className="attendance-table">
                <thead>
                    <tr>
                        <th>ID Student</th>
                        <th>Student Name</th>
                        <th>Email</th>
                        <th>Name Center</th>
                        <th>Course joined</th>
                        <th>Attended</th>
                        <th>Absented</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student, index) => (
                        <tr key={index}>
                            <td>{student.id}</td>
                            <td style={{ color: "#32C685", fontWeight: "bold" }}>{student.name}</td>
                            <td>{student.email}</td>
                            <td>ABC English</td>
                            <td>{student.course}</td>
                            <td><input type="checkbox" /></td>
                            <td><input type="checkbox" /></td>
                            <td>...</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ClassAttendance;
