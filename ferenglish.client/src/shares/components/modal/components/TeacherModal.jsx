import React from 'react';
import { Modal } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../styles/teacherModal.css'; // Thay đổi đường dẫn nếu cần

// Định nghĩa schema validation bằng Yup
const validationSchema = Yup.object().shape({
  studentName: Yup.string().required('Student Name is required'),
  className: Yup.string().required('Class Name is required'),
  phoneNumber: Yup.string().required('Phone Number is required'),
  centerName: Yup.string().required('Center Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  courseJoined: Yup.string().required('Course Joined is required'),
  studentID: Yup.string().required('Student ID is required'),
  note: Yup.string(),
});

// Định nghĩa component StudentModal
const TeacherModal = ({ open, onClose, onSubmit }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className='studentModal-container'>
      <div className="modal-container-wrapper">
        <div className="modal-container">
          <div className="modal-header">
            <h2 className="modal-title">Adding a new teacher</h2>
            <button className="modal-close-button" onClick={onClose}>
              &times;
            </button>
          </div>
          <p className="modal-subtitle">Please fill in the form below</p>
          <Formik
            initialValues={{
              teacherName: '',
              className: '',
              phoneNumber: '',
              centerName: '',
              email: '',
              courseJoined: '',
              studentID: '',
              note: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              onSubmit(values);
              onClose(); // Đóng modal sau khi submit
            }}
          >
            {({ errors, touched }) => (
              <Form className="modal-form">
                <div className="input-row">
                  <div className="input-group">
                    <label className="input-label">Teacher Name</label>
                    <Field
                      name="teacherName"
                      placeholder="Enter your name"
                      className="input-field"
                    />
                    {touched.studentName && errors.studentName && (
                      <div className="error-message">{errors.studentName}</div>
                    )}
                  </div>
                  <div className="input-group">
                    <label className="input-label">Class Name</label>
                    <Field
                      name="className"
                      placeholder="Enter your class name"
                      className="input-field"
                    />
                    {touched.className && errors.className && (
                      <div className="error-message">{errors.className}</div>
                    )}
                  </div>
                </div>

                <div className="input-row">
                  <div className="input-group">
                    <label className="input-label">Phone Number</label>
                    <Field
                      name="phoneNumber"
                      placeholder="Enter your phone number"
                      className="input-field"
                    />
                    {touched.phoneNumber && errors.phoneNumber && (
                      <div className="error-message">{errors.phoneNumber}</div>
                    )}
                  </div>
                  <div className="input-group">
                    <label className="input-label">Center Name</label>
                    <Field
                      name="centerName"
                      placeholder="Enter your center name"
                      className="input-field"
                    />
                    {touched.centerName && errors.centerName && (
                      <div className="error-message">{errors.centerName}</div>
                    )}
                  </div>
                </div>

                <div className="input-row">
                  <div className="input-group">
                    <label className="input-label">Email</label>
                    <Field
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      className="input-field"
                    />
                    {touched.email && errors.email && (
                      <div className="error-message">{errors.email}</div>
                    )}
                  </div>
                  <div className="input-group">
                    <label className="input-label">Course Joined</label>
                    <Field
                      name="courseJoined"
                      placeholder="Enter your course joined"
                      className="input-field"
                    />
                    {touched.courseJoined && errors.courseJoined && (
                      <div className="error-message">{errors.courseJoined}</div>
                    )}
                  </div>
                </div>

                <div className="input-row">
                  <div className="input-group">
                    <label className="input-label">ID</label>
                    <Field
                      name="studentID"
                      placeholder="Enter your student ID"
                      className="input-field-id"
                    />
                    {touched.studentID && errors.studentID && (
                      <div className="error-message">{errors.studentID}</div>
                    )}
                  </div>
                </div>

                <div className="input-group">
                  <label className="input-label">Note</label>
                  <Field
                    as="textarea"
                    name="note"
                    placeholder="Description"
                    className="textarea-field"
                  />
                </div>

                <div className="button-group">
                  <button type="button" className="cancel-button" onClick={onClose}>
                    Cancel
                  </button>
                  <button type="submit" className="save-button">
                    Save
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      </div>
    </Modal>
    
  );
};

export default TeacherModal;
