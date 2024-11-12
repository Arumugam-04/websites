import React, { useState } from 'react';
import { Button, Typography, Box, TextField, IconButton, InputAdornment } from '@mui/material';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import LoginImage from '../assets/login.png';
import { useNavigate } from 'react-router-dom';
import signUpStyles from '../styles/signupStyles';
import { useDispatch } from 'react-redux';
import { saveSignupData } from '../shared/slice/signupSlice';
const SignUp = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const initialValues = {
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object({
        fullName: Yup.string().required('Full name is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm password is required'),
    });

    const handleSubmit = (values) => {
        dispatch(saveSignupData(values));
        navigate('/')
    };

    const toggleShowPassword = () => setShowPassword(!showPassword);
    const toggleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

    return (
        <Box sx={signUpStyles.container}>
            <Box sx={signUpStyles.imageContainer}>
                <img src={LoginImage} alt="Login" className="login-image" />
            </Box>
            <Box sx={signUpStyles.formContainer}>
                <Box sx={signUpStyles.formBox}>
                    <Typography sx={signUpStyles.titleText}>Create your</Typography>
                    <Typography sx={signUpStyles.subtitleText}>Rento account.</Typography>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values, handleChange, handleBlur }) => (
                            <Form>
                                <Box sx={{ marginTop: 6 }}>
                                    <Typography sx={signUpStyles.fieldLabel}>Full name</Typography>
                                    <Field
                                        as={TextField}
                                        name="fullName"
                                        variant="standard"
                                        InputProps={{
                                            style: { fontSize: 12 }
                                        }}
                                        value={values.fullName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        fullWidth
                                        helperText={<ErrorMessage name="fullName" component="span" style={{ color: 'red' }} />}
                                    />
                                    <Typography sx={signUpStyles.fieldLabel}>Email</Typography>
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
                                        helperText={<ErrorMessage name="email" component="span" style={{ color: 'red' }} />}
                                    />
                                    <Typography sx={signUpStyles.fieldLabel}>Password</Typography>
                                    <Field
                                        as={TextField}
                                        name="password"
                                        variant="standard"
                                        type={showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        fullWidth
                                        InputProps={{
                                            style: { fontSize: 12 },
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={toggleShowPassword}>
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        helperText={<ErrorMessage name="password" component="span" style={{ color: 'red' }} />}
                                    />
                                    <Typography sx={signUpStyles.fieldLabel}>Confirm password</Typography>
                                    <Field
                                        as={TextField}
                                        name="confirmPassword"
                                        variant="standard"
                                        type={showConfirmPassword ? 'text' : 'password'}
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        fullWidth
                                        InputProps={{
                                            style: { fontSize: 12 },
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton onClick={toggleShowConfirmPassword}>
                                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                        helperText={<ErrorMessage name="confirmPassword" component="span" style={{ color: 'red' }} />}
                                    />
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 3 }}>
                                        <Button
                                            variant="contained"
                                            fullWidth
                                            sx={signUpStyles.button}
                                            type="submit"
                                        >
                                            SIGN UP
                                        </Button>
                                    </Box>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
                                        <Typography sx={signUpStyles.accountText}>
                                            Already have an account?{' '}
                                            <span
                                                style={signUpStyles.linkText}
                                                onClick={() => navigate('/')}
                                            >
                                                LOGIN
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

export default SignUp;
