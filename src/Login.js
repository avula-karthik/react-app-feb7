function Login(){
    function loginFun(){
        alert("Logged-in")
    }
    return(
        <button onClick={loginFun}>Login</button>
    )
}
export default Login;