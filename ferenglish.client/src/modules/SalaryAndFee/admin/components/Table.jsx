import { Row } from "react-bootstrap";
import "../styles/Table.scss";
import { useState, useEffect, useRef } from "react";
import dotHead from "../../../../asset/images/dotHead.svg";

const Table = () => {
  const [students] = useState([
    {
      id: "En101",
      name: "Nguyễn Gia Thịnh",
      tuitionFee: "5,000,000",
      center: "ABC English",
      status: "Complete",
      dateCreated: "17/10/2024",
      updateDate: "17/10/2024",
    },
    {
      id: "En102",
      name: "Ngô Bảo Anh",
      tuitionFee: "5,000,000",
      center: "ABC English",
      status: "Complete",
      dateCreated: "17/10/2024",
      updateDate: "17/10/2024",
    },
    {
      id: "En103",
      name: "Nguyễn Thục Linh",
      tuitionFee: "5,000,000",
      center: "ABC English",
      status: "Complete",
      dateCreated: "17/10/2024",
      updateDate: "17/10/2024",
    },
    {
      id: "En104",
      name: "Trương Cẩm Tú",
      tuitionFee: "5,000,000",
      center: "ABC English",
      status: "Incomplete",
      dateCreated: "17/10/2024",
      updateDate: "17/10/2024",
    },
    {
      id: "En105",
      name: "Bùi Minh Anh",
      tuitionFee: "5,000,000",
      center: "ABC English",
      status: "Complete",
      dateCreated: "17/10/2024",
      updateDate: "17/10/2024",
    },
    {
      id: "En106",
      name: "Nguyễn Quốc Anh",
      tuitionFee: "5,000,000",
      center: "ABC English",
      status: "Incomplete",
      dateCreated: "17/10/2024",
      updateDate: "17/10/2024",
    },
    {
      id: "En107",
      name: "Lê Hoài Nam",
      tuitionFee: "5,000,000",
      center: "ABC English",
      status: "Complete",
      dateCreated: "17/10/2024",
      updateDate: "17/10/2024",
    },
    {
      id: "En108",
      name: "Phạm Thanh Hương",
      tuitionFee: "5,000,000",
      center: "ABC English",
      status: "Incomplete",
      dateCreated: "17/10/2024",
      updateDate: "17/10/2024",
    },
    {
      id: "En109",
      name: "Đặng Nhật Minh",
      tuitionFee: "5,000,000",
      center: "ABC English",
      status: "Complete",
      dateCreated: "17/10/2024",
      updateDate: "17/10/2024",
    },
    {
      id: "En110",
      name: "Võ Minh Quân",
      tuitionFee: "5,000,000",
      center: "ABC English",
      status: "Incomplete",
      dateCreated: "17/10/2024",
      updateDate: "17/10/2024",
    },
    {
      id: "En111",
      name: "Trần Lan Anh",
      tuitionFee: "5,000,000",
      center: "ABC English",
      status: "Complete",
      dateCreated: "17/10/2024",
      updateDate: "17/10/2024",
    },
    {
      id: "En112",
      name: "Ngô Quỳnh Như",
      tuitionFee: "5,000,000",
      center: "ABC English",
      status: "Incomplete",
      dateCreated: "17/10/2024",
      updateDate: "17/10/2024",
    },
    {
      id: "En113",
      name: "Lý Bảo Trân",
      tuitionFee: "5,000,000",
      center: "ABC English",
      status: "Complete",
      dateCreated: "17/10/2024",
      updateDate: "17/10/2024",
    },
    {
      id: "En114",
      name: "Nguyễn Thành Long",
      tuitionFee: "5,000,000",
      center: "ABC English",
      status: "Incomplete",
      dateCreated: "17/10/2024",
      updateDate: "17/10/2024",
    },
    {
      id: "En102",
      name: "Ngô Bảo Anh",
      tuitionFee: "5,000,000",
      center: "ABC English",
      status: "Complete",
      dateCreated: "17/10/2024",
      updateDate: "17/10/2024",
    },
    {
      id: "En103",
      name: "Nguyễn Thục Linh",
      tuitionFee: "5,000,000",
      center: "ABC English",
      status: "Complete",
      dateCreated: "17/10/2024",
      updateDate: "17/10/2024",
    },
    {
      id: "En104",
      name: "Trương Cẩm Tú",
      tuitionFee: "5,000,000",
      center: "ABC English",
      status: "Incomplete",
      dateCreated: "17/10/2024",
      updateDate: "17/10/2024",
    },
  ]);

  const [dropdownOpen, setDropdownOpen] = useState(null);
  const dropdownRef = useRef([]);

  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen === index ? null : index);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.includes(event.target)) {
      setDropdownOpen(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <Row className="number-items">
        <p>{students.length} items</p>
      </Row>

      <div className="table-container">
        <div className="table-header">
          <div className="cell">ID</div>
          <div className="cell">Student Name</div>
          <div className="cell">Tuition fee</div>
          <div className="cell">Name Center</div>
          <div className="cell">Status</div>
          <div className="cell">Date created</div>
          <div className="cell">Update date</div>
          <div className="cell"></div>
        </div>
        {students.map((student, index) => (
          <div className="table-row" key={index}>
            <div className="cell">{student.id}</div>
            <div className="cell">{student.name}</div>
            <div className="cell">{student.tuitionFee}</div>
            <div className="cell">{student.center}</div>
            <div className="cell status-cell">
              <span
                className={
                  student.status === "Complete"
                    ? "status-complete"
                    : "status-incomplete"
                }
              >
                {student.status}
              </span>
            </div>
            <div className="cell">{student.dateCreated}</div>
            <div className="cell">{student.updateDate}</div>
            <div
              className="cell head-dot"
              onClick={() => toggleDropdown(index)}
              ref={(el) => (dropdownRef.current[index] = el)}
            >
              <img src={dotHead} alt="Options" />
              {dropdownOpen === index && (
                <div className="dropdown-menu">
                  <p>View</p>
                  <p>Update</p>
                  <p>Delete</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Table;
