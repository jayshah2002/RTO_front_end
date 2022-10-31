import './Register.css'


function Registeration() {
    return (
        <>

            <div className="signup container">
                <div className="regform">
                    <form className="form">
                        <input type="text" placeholder='Enter your Name' required />
                        <input type="email" placeholder='Enter your Email' required />
                        <input type="number" placeholder='Enter your Mobile no.' required />
                        <textarea placeholder='Enter your Address' />
                        <select name="usertype" className='user'>
                            <option value={"type"}>Type of User</option>
                            <option value={"Normal user"}>User</option>
                            <option value={"Agent"}>Agent</option>
                        </select>
                        <input type="password" placeholder='Password' required />
                        <input type="password" placeholder='Confirm Password' required />
                        <input type={"submit"} value="Register Now" style={{ backgroundColor: "#a1eafb" }} />
                    </form>
                </div>
                <div className="image">
                    <img src="mparivahan.jpg" className='parivahan' alt="parivahan"></img>
                    <img src="regnow.jpg" className='logo' alt="reg_logo"></img>
                </div>
            </div>
        </>
    );
}

export default Registeration