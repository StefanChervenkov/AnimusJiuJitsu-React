export default function LoginForm() {
    const styles = {
        loginContainer: {
            //display: "flex",
            border: "3px solid black",
            margin: "20px",
        }
    }

    return (
        <>
            <div className="login-container" style={styles.loginContainer}>
                <h1>Welcome to Animus Jiu Jitsu</h1>
                <form >
                    <div className="emailField">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="passwordField">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>

                    <input type="submit" value="Log in" id="loginButton" />

                    <input type="checkbox" id="rememberMe" name="rememberMe" />
                    <label htmlFor="rememberMe"> Remember me</label>
                        <br />
                    <a href="#">Forgot your password?</a>

                </form>

            </div>
        </>
    )
}