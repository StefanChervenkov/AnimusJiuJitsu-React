import '../public/css/LoginForm.css'

export default function LoginForm() {
    return (
        <>
            <div className="login-container">
                <h1>Welcome to Animus Jiu Jitsu</h1>
                <form>
                    <div className="form-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" />
                    </div>

                    <input type="submit" value="Log in" id="loginButton" />

                  
                    <a href="#">Forgot your password?</a>
                </form>
            </div>
        </>
    );
}