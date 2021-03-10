

const Password = ({label, onPasswordChange, success}) => (

                <div>
                    <label>{label}</label>
                    <input className="form-control" type="password" style={{border: success ? "2px solid green" : "2px solid red"}} onChange={onPasswordChange}/>
                </div>
        
)

export default Password;