import React from 'react';
import { Box, Typography } from '@mui/material';
import LoginImage from '../assets/login.png';
import loginFormStyles from '../styles/loginStyles';
import { useSelector } from 'react-redux';

const Home = () => {
    // Access signup data from the Redux store
    const signupData = useSelector((state) => state.signup.userData);

    return (
        <Box sx={loginFormStyles.container}>
            <Box sx={loginFormStyles.imageContainer}>
                <img src={LoginImage} alt="Login" className="login-image" />
            </Box>
            <Box sx={{
                backgroundColor: 'white',
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 2, // Added padding for better spacing
            }}>
                <Typography style={{ fontSize: 25, color: '#75235f', fontWeight: 'bold' }}>
                    Welcome to our app, {signupData?.fullName}...
                </Typography>

                {signupData && (
                    <Box sx={{ marginTop: 2 }}>
                        <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'black' }}>
                            Signin Details:
                        </Typography>
                        <Box sx={{ marginTop: 1 }}>
                            <Typography sx={{ color: 'gray', fontWeight: 'bold' }}>Name:
                                <span > {signupData.fullName}</span>
                            </Typography>
                        </Box>
                        <Box sx={{ marginTop: 1 }}>
                            <Typography sx={{ color: 'gray', fontWeight: 'bold' }}>Email:
                                <span > {signupData.email}</span>
                            </Typography>
                        </Box>
                        <Box sx={{ marginTop: 1 }}>
                            <Typography sx={{ color: 'gray', fontWeight: 'bold' }}>Password:
                                <span > {signupData.password}</span>
                            </Typography>
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    );
};

export default Home;
