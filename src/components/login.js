import React, { useState } from 'react';
import { Button, Typography, Box, TextField, InputAdornment, IconButton } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoginImage from '../assets/login.png';
import { useNavigate } from 'react-router-dom';
import loginFormStyles from '../styles/loginStyles';
import { useSelector, useDispatch } from 'react-redux';
import { setIsAuthenticated } from '../shared/slice/loginSlice'

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(false);

    // Access signup data from Redux
    const signupData = useSelector((state) => state.signup.userData);

    const initialValues = {
        email: '',
        password: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });

    const handleSubmit = (values) => {
        // Validate login credentials against signup data
        console.log(signupData)
        if (signupData && values.email === signupData.email && values.password === signupData.password) {
            alert('Login successful');
            dispatch(setIsAuthenticated(true));
            navigate('/home');
        } else {
            alert('Invalid email or password');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <Box sx={loginFormStyles.container}>
            <Box sx={loginFormStyles.imageContainer}>
                <img src={LoginImage} alt="Login" className="login-image" />
            </Box>
            <Box sx={loginFormStyles.formContainer}>
                <Box sx={loginFormStyles.formBox}>
                    <Typography sx={loginFormStyles.titleText}>Hey there!</Typography>
                    <Typography sx={loginFormStyles.subtitleText}>Welcome Back.</Typography>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, handleChange, handleBlur }) => (
                            <Form>
                                <Box sx={{ marginTop: 6 }}>
                                    <Typography sx={loginFormStyles.fieldContainer}>Email</Typography>
                                    <Field
                                        as={TextField}
                                        name="email"
                                        variant="standard"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        InputProps={{
                                            style: { fontSize: 12 }
                                        }}
                                        fullWidth
                                        helperText={<ErrorMessage name="email" component="span" style={loginFormStyles.helperText} />}
                                    />
                                    <Typography sx={loginFormStyles.fieldContainer}>Password</Typography>
                                    <Field
                                        as={TextField}
                                        name="password"
                                        type={showPassword ? 'text' : 'password'}
                                        variant="standard"
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        fullWidth
                                        InputProps={{
                                            style: { fontSize: 12 },
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        style={{ margin: 2 }}
                                                        onClick={togglePasswordVisibility}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        helperText={<ErrorMessage name="password" component="span" style={loginFormStyles.helperText} />}
                                    />
                                    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '100%', marginBottom: 4 }}>
                                        <span
                                            style={loginFormStyles.linkText}
                                            onClick={() => { console.log('Get OTP clicked'); }}
                                        >
                                            Get OTP
                                        </span>
                                        <span
                                            style={loginFormStyles.linkText}
                                            onClick={() => { console.log('Forgot password clicked'); }}
                                        >
                                            Forget password?
                                        </span>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 3 }}>
                                        <Button
                                            variant="contained"
                                            sx={loginFormStyles.submitButton}
                                            type="submit"
                                        >
                                            LOGIN
                                        </Button>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                                        <Typography sx={loginFormStyles.accountText}>
                                            Don't have an account?
                                            <span
                                                style={loginFormStyles.createAccountText}
                                                onClick={() => navigate('/signup')}
                                            >
                                                CREATE ACCOUNT
                                            </span>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Form>
                        )}
                    </Formik>
                </Box>
            </Box>
        </Box>
    );
};

export default LoginForm;
