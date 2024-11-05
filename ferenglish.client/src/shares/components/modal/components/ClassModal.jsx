/* eslint-disable react/prop-types */
import { Modal } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import '../styles/classModal.css';

const validationSchema = Yup.object().shape({
  className: Yup.string().required('Class Name is required'),
  teacherName: Yup.string().required('Teacher Name is required'),
  centerName: Yup.string().required('Center Name is required'),
  studentNumber: Yup.number().required('Student Number is required').positive().integer(),
  note: Yup.string(),
});

const ClassModal = ({ open, onClose, onSubmit }) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="className-modal">
      <div className="modal-container-wrapper">
        <div className="modal-container">
          <div className="modal-header">
            <h2 className="modal-title">Adding a new class</h2>
            <button className="modal-close-button" onClick={onClose}>
              &times;
            </button>
          </div>
          <p className="modal-subtitle">Please fill in the form below</p>
          <Formik
            initialValues={{
              className: '',
              teacherName: '',
              centerName: '',
              studentNumber: '',
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

                  <div className="input-group">
                    <label className="input-label">Teacher Name</label>
                    <Field
                      name="teacherName"
                      placeholder="Enter your teacher name"
                      className="input-field"
                    />
                    {touched.teacherName && errors.teacherName && (
                      <div className="error-message">{errors.teacherName}</div>
                    )}
                  </div>
                </div>

                <div className="input-row">
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

                  <div className="input-group">
                    <label className="input-label">Student Number</label>
                    <Field
                      name="studentNumber"
                      placeholder="Enter student number"
                      type="number"
                      className="input-field"
                    />
                    {touched.studentNumber && errors.studentNumber && (
                      <div className="error-message">{errors.studentNumber}</div>
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

export default ClassModal;
