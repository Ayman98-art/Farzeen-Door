import { useForm } from "react-hook-form"

function SignUp() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => console.log(data)

return (
<>
    <form className="SignSection p-5" onSubmit={handleSubmit(onSubmit)}>

    <input placeholder='Username' minLength={5} {...register("name", { required: "this is required" })}  className=" mb-3 p-3 d-block"/>
    {errors.name && <p className='error'>This field is required !</p>}

    <input placeholder='Email' type='email' minLength={5} {...register("email", { required: "this is required" })}  className=" mb-3 p-3 d-block"/>
    {errors.email && <p className='error'>This field is required !</p>}

    <input placeholder='Password' type='password' minLength={5} {...register("Password", { required: "this is required" })}  className=" mb-3 p-3 d-block"/>
    {errors.Password && <p className='error'>This field is required !</p>}


    <div className='Forget'>
        <button type="submit" className=" btn-Sign btn-offer btn-valid d-block">Register</button>
    </div>

    </form>
</>
)
}

export default SignUp;