const signUpStyles = {
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
    fieldLabel: {
        fontSize: 12,
        color: 'gray',
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: '#75235f',
        borderRadius: 5,
        textAlign: 'center',
        '&:hover': {
            backgroundColor: '#5c1a49',
        },
        fontWeight: 'bold',
        fontSize: 11,
        marginTop: 3,
    },
    accountText: {
        fontSize: 12,
        color: 'gray',
    },
    linkText: {
        color: '#75235f',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: 11,
    },
};
export default signUpStyles