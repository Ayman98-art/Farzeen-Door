import { useForm } from "react-hook-form"
import { Link } from 'react-router-dom';

function SignIn() {
const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => console.log(data)

return (
<>
    
<form className="SignSection p-5" onSubmit={handleSubmit(onSubmit)}>

<input placeholder='Username' minLength={5} {...register("name", { required: "this is required" })}  className=" mb-3 p-3 d-block"/>
{errors.name && <p className='error'>This field is required !</p>}

<input placeholder='Password' type='password' minLength={5} {...register("Password", { required: "this is required" })}  className=" mb-3 p-3 d-block"/>
{errors.Password && <p className='error'>This field is required !</p>}

<div className="d-flex justify-content-between align-items-center">
    <div>
        <select {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        </select>
        {errors.gender && <p className='error'>This field is required !</p>}
    </div>

    <div className='Forget'>
        <Link to={"#"}>Forget Your Password ?</Link>
    </div>
</div>

<button type="submit" className=" btn-Sign btn-offer btn-valid d-block">Log In</button>
</form>
</>
)
}

export default SignIn;