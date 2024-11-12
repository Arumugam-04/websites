// LoginFormStyles.js
const loginFormStyles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        height: '100vh',
    },
    imageContainer: {
        width: '50%',
        display: 'flex',
    },
    formContainer: {
        backgroundColor: 'white',
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    formBox: {
        margin: 15,
    },
    titleText: {
        fontSize: 25,
    },
    subtitleText: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    fieldContainer: {
        fontSize: 12,
        color: 'gray',
        marginBottom: 1,
        fontWeight: 'bold'
    },
    helperText: {
        color: 'red',
    },
    linkText: {
        color: 'gray',
        cursor: 'pointer',
        textDecoration: 'underline',
        fontSize: 12,
    },
    submitButton: {
        backgroundColor: '#75235f',
        borderRadius: 5,
        width: '30%',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 11,
        '&:hover': {
            backgroundColor: '#5c1a49',
        },
    },
    accountText: {
        fontSize: 12,
        color: 'gray',

    },
    createAccountText: {
        color: '#75235f',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: 11,
    },
};

export default loginFormStyles;
