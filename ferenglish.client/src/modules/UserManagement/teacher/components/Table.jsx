import { Row } from 'react-bootstrap';
import "../styles/Table.scss"
import { useState } from 'react';
import PositionedActionModal from '../../../../shares/components/modal/components/PositionedActionModal';
import dotHead from "../../../../asset/images/dotHead.svg"

const Table = () => {
    const [members] = useState([
        { id: "SE123", name: "To Thien Nhan", Email: "user@gmail.com", className: "BBC", course: "Band 9", role: "Teacher", phoneNum: "123123123" },
        { id: "StEn101", name: "Huỳnh Yến Vi", Email: "vi@gmail.com", className: "ABC English", course: "IETL 6+", role: "Student", phoneNum: "09651478523" },
        { id: "StEn102", name: "Nguyen Van A", Email: "nguyena@gmail.com", className: "XYZ English", course: "Band 6", role: "Student", phoneNum: "0912345678" },
        { id: "StEn103", name: "Le Thi B", Email: "lethib@gmail.com", className: "ABC English", course: "Band 7", role: "Teacher", phoneNum: "0912345679" },
        { id: "StEn104", name: "Pham Van C", Email: "phamc@gmail.com", className: "BBC", course: "Band 8", role: "Student", phoneNum: "0912345680" },
        { id: "StEn105", name: "Tran Thi D", Email: "trantd@gmail.com", className: "XYZ English", course: "Band 9", role: "Teacher", phoneNum: "0912345681" },
        { id: "StEn106", name: "Do Van E", Email: "doe@gmail.com", className: "ABC English", course: "Band 7", role: "Student", phoneNum: "0912345682" },
        { id: "StEn107", name: "Ngo Thi F", Email: "ngof@gmail.com", className: "BBC", course: "Band 6", role: "Student", phoneNum: "0912345683" },
        { id: "StEn108", name: "Vu Van G", Email: "vug@gmail.com", className: "XYZ English", course: "Band 8", role: "Teacher", phoneNum: "0912345684" },
        { id: "StEn109", name: "Hoang Thi H", Email: "hoangh@gmail.com", className: "ABC English", course: "Band 6", role: "Student", phoneNum: "0912345685" },
        { id: "StEn110", name: "Nguyen Van I", Email: "nguyeni@gmail.com", className: "BBC", course: "Band 9", role: "Teacher", phoneNum: "0912345686" },
        { id: "StEn111", name: "Pham Thi J", Email: "phamj@gmail.com", className: "XYZ English", course: "Band 7", role: "Student", phoneNum: "0912345687" },
        { id: "StEn112", name: "Le Van K", Email: "lek@gmail.com", className: "ABC English", course: "Band 8", role: "Teacher", phoneNum: "0912345688" },
        { id: "StEn113", name: "Do Thi L", Email: "dol@gmail.com", className: "BBC", course: "Band 6", role: "Student", phoneNum: "0912345689" },
        { id: "StEn114", name: "Vu Van M", Email: "vum@gmail.com", className: "XYZ English", course: "Band 9", role: "Teacher", phoneNum: "0912345690" },
        { id: "StEn115", name: "Nguyen Thi N", Email: "nguyenn@gmail.com", className: "ABC English", course: "Band 7", role: "Student", phoneNum: "0912345691" },
        { id: "StEn116", name: "Pham Van O", Email: "pamo@gmail.com", className: "BBC", course: "Band 8", role: "Student", phoneNum: "0912345692" },
        { id: "StEn117", name: "Le Thi P", Email: "lethip@gmail.com", className: "XYZ English", course: "Band 6", role: "Teacher", phoneNum: "0912345693" },
        { id: "StEn118", name: "Do Van Q", Email: "doq@gmail.com", className: "ABC English", course: "Band 9", role: "Student", phoneNum: "0912345694" },
        { id: "StEn119", name: "Ngo Thi R", Email: "ngor@gmail.com", className: "BBC", course: "Band 7", role: "Teacher", phoneNum: "0912345695" }
    ]);

    
    const [anchorEl, setAnchorEl] = useState(null);

    const handleOpenModal = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseModal = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Row className='number-items'>
                <p>{members.length} items</p>
            </Row>

            <div className="table-container">
                <div className="table-header">
                    <div className="cell">ID</div>
                    <div className="cell">Name</div>
                    <div className="cell">Email</div>
                    <div className="cell">Name Centre</div>
                    <div className="cell">Course Joined</div>
                    <div className="cell">Role</div>
                    <div className="cell">Phone Number</div>
                </div>
                {members.map((member, index) => (
                    <div className="table-row" key={index}>
                        <div className="cell">{member.id}</div>
                        <div className="cell">{member.name}</div>
                        <div className="cell">{member.Email}</div>
                        <div className="cell">{member.className}</div>
                        <div className="cell">{member.course}</div>
                        <div className="cell">{member.role}</div>
                        <div className="cell">{member.phoneNum}</div>
                        <div className="cell head-dot">
                        <img
                                src={dotHead}
                                alt=""
                                onClick={handleOpenModal}
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* PositionedActionModal with action items */}
            <PositionedActionModal
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCloseModal}
            />
        </>
    )
}

export default Table