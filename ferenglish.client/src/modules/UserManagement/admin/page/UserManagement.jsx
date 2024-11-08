import { Container, Row, Col, Form, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/UserManagement.scss";
import Table from '../components/Table';
import { useState } from 'react';
import StudentModal from '../../../../shares/components/modal/components/studentModal';
import TeacherModal from '../../../../shares/components/modal/components/teacherModal';


const UserManagement = () => {
  // open, onClose, onSubmit
  const [open, setOpen] = useState(false);
  const [openTeacher, setOpenTeacher] = useState(false);

  const handleAddStudent = () => {
    setOpen(true);   
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleAddTeacher = () => {
    setOpenTeacher(true);
  }

  return (
    <Container fluid className='mt-5'>
      <Row className="justify-content-between align-items-center mb-4">
        <Col xs="auto">
          <div className="dropdown custom-dropdown">
            <Dropdown>
              <Dropdown.Toggle
                variant="outline-secondary"
                id="dropdown-basic"
                className="rounded-pill px-4 custom-dropdown-toggle"
              >
                Type
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-100 rounded-4 p-2 custom-dropdown-menu">
                <Form.Control
                  type="text"
                  placeholder="Search..."
                  className="mb-2 custom-dropdown-search"
                />
                <Dropdown.Item eventKey="1">Option 1</Dropdown.Item>
                <Dropdown.Item eventKey="2">Option 2</Dropdown.Item>
                <Dropdown.Item eventKey="3">Option 3</Dropdown.Item>
                <Dropdown.Item eventKey="4">Option 4</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
        <Col xs="auto" className='container-button'>
          <div className="d-flex gap-3">
            <button className="btn btn-primary add-button" type="button" onClick={handleAddTeacher}>
              <i className="fas fa-plus me-2"></i> Add teacher
            </button>
            <button className="btn btn-primary add-button" type="button" onClick={handleAddStudent}>
              <i className="fas fa-plus me-2"></i> Add student
            </button>
          </div>
        </Col>
      </Row>
      <Table />
      <StudentModal 
        open={open}
        onClose={handleClose}
      />

      <TeacherModal 
        open={openTeacher}
        onClose={() => setOpenTeacher(false)}
      />
    </Container>
  );
};

export default UserManagement;
