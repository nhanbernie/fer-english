import { useContext, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom"; // Import Link từ react-router-dom
import logo from "../../../../asset/images/logo.svg";
import banner from "../../../../asset/images/banner.jpg";
import "../styles/SignIn.scss";
import { AuthContext } from '../../../../AuthContext';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    // check role
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const initialValues = { email: "", password: "" };
    const validationSchema = Yup.object({
        email: Yup.string().email("Invalid email format").required("Required"),
        password: Yup.string().required("Required"),
    });

    const handleSubmit = (values) => {
        console.log("Form data", values);
        if (login(values.email, values.password)) {
            navigate('/');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div className="signin-container">
            <header className="signin-header">
                <div className="logo">
                    <img src={logo} alt="Logo" className="logo-icon" />
                    <h1>FER English</h1>
                </div>
            </header>
            <div className="signin-content">
                <div className="signin-form">
                    <h2>Sign in</h2>
                    <p className="welcome-text">
                        Welcome there! Sign in to continue with FER English
                    </p>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {() => (
                            <Form>
                                <div className="input-group">
                                    <label htmlFor="email">Email</label>
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your Email address"
                                        className="input-field"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="error-text"
                                    />
                                </div>
                                <div className="input-group">
                                    <label htmlFor="password">Password</label>
                                    <div className="password-container">
                                        <Field
                                            type={showPassword ? "text" : "password"}
                                            id="password"
                                            name="password"
                                            placeholder="Enter your password"
                                            className="input-field"
                                        />
                                        <i
                                            className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"
                                                }`}
                                            onClick={togglePasswordVisibility}
                                        ></i>
                                    </div>
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="error-text"
                                    />
                                </div>
                                <div className="options">
                                    <label className="keep-logged-in">
                                        <Field type="checkbox" name="keepLoggedIn" />
                                        Keep me logged in
                                    </label>
                                    <Link to="/forgot-password" className="forgot-password">
                                        Forgot password?
                                    </Link>
                                </div>
                                <button type="submit" className="signin-button">
                                    Sign in
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className="signin-banner">
                    <img src={banner} alt="Banner" />
                </div>
            </div>
        </div>
    );
};

export default SignIn;