function Validation(email, password) {
    let emailVerification = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    let passwordVerification = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if (!emailVerification) return "not a valid email"
    if (!passwordVerification) return "use 1-8 a-z A-Z and sybols in password"

    return null
}

export default Validation
