import { Row } from 'react-bootstrap';
import "../styles/Table.scss"
import { useState } from 'react';
import dotHead from "../../../asset/images/dotHead.svg"

const Classmanage = () => {
    const [members, setMembers] = useState([
        { className: 'En101', teacherName: 'Huỳnh Yến Vi', nameCenter: 'ABC English', studentNumber: 20 },
    { className: 'En102', teacherName: 'Huỳnh Tấn Lực', nameCenter: 'ABC English', studentNumber: 13 },
    { className: 'En103', teacherName: 'Nguyễn Trọng Tín', nameCenter: 'ABC English', studentNumber: 14 },
    { className: 'En104', teacherName: 'Huỳnh Tấn Lực', nameCenter: 'ABC English', studentNumber: 20 },
    { className: 'En105', teacherName: 'Bùi Thế Sơn', nameCenter: 'ABC English', studentNumber: 15 },
    { className: 'En106', teacherName: 'Huỳnh Tấn Lực', nameCenter: 'ABC English', studentNumber: 17 },
    { className: 'En201', teacherName: 'Tô Thiện Nhân', nameCenter: 'ABC English', studentNumber: 11 },
    { className: 'En301', teacherName: 'Huỳnh Tấn Lực', nameCenter: 'ABC English', studentNumber: 12 },
    { className: 'En401', teacherName: 'Phan Nguyên Vũ', nameCenter: 'ABC English', studentNumber: 10 },
    ]);
    return (
        <>
            <Row className='number-items'>
                <p>{members.length} items</p>
            </Row>

            <div className="table-container">
                <div className="table-header">
                    <div className="cell">class</div>
                    <div className="cell">teacher</div>
                    <div className="cell">name center</div>
                    <div className="cell">student Number</div>
                </div>
                {members.map((member, index) => (
                    <div className="table-row" key={index}>
                        <div className="cell">{member.className}</div>
                        <div className="cell">{member.teacherName}</div>
                        <div className="cell">{member.nameCenter}</div>
                        <div className="cell">{member.studentNumber}</div>
                        <div className="cell head-dot">
                            <img src={dotHead} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Classmanage;




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
