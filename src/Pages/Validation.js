
const Validation = (values) => {
    let errors = {}

    if(!values.email){
        errors.email = "Email Required"
    }
    else if (values.email.length < 5) {
        errors.email = "Invalid Email"
    }

    if(!values.password){
        errors.password = "Password Required"
    }
    else if (values.password.length < 6) {
        errors.password = "Password must be more than 6 char"
    }

    return errors;
}

export default Validation;