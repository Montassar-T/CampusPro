import {useForm, SubmitHandler  }  from 'react-hook-form'
import { zodResolver} from '@hookform/resolvers/zod'
import z from 'zod';



const Login = () =>{
        const Admin = z.object({
            email : z.string().email({message:"Email not valid"}),
            password : z.string().min(6,{message : "Password not valid"})
        })

    const {register, handleSubmit,reset, formState: { errors , isValid} } = useForm<dataType>(
        {
            mode:'onChange',
            resolver: zodResolver(Admin)
        }
    )

    type dataType = z.infer<typeof Admin>;
    const onSubmit: SubmitHandler<dataType> = ({email , password}) => {
        const admin = {
            email,
            password
        }
        console.log(admin)

        reset()
    }

      

    return(
        <div className="container min-w-full items-center justify-center flex ">
            <div className="fixed top-0 left-0 right-0 px-8 py-4 bg-zinc-900 text-white font-medium italic text-2xl">
                Campus<span className='text-green-600'>Pro</span>            
            </div>
            <div className="formContainer border  bg-zinc-900 rounded-lg px-16  py-14">
                <div className="top mb-12 text-center">
                    <h3 className='text-3xl text-white font-medium  mb-2'>Login</h3>
                    <p className='text-gray-500 '>Please enter your login and password!

</p>
                </div>
               
                <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}  >
                    <div className="inputWrapper flex flex-col  w-fit " >
                        <label  className='mb-2 text-white'>Email</label>
                        <input  
                        {...register('email')}  
                            type="email"
                            className='w-96 border h-10 rounded-md ps-2 outline-none' 
                          
                        />
                        {errors.email? <p className='text-red-500'>{errors.email.message}</p> : null}

                    </div>
                    <div className="inputWrapper flex flex-col  w-fit " >
                        <label  className='mb-2 text-white'>Password</label>
                        <input
                               {...register('password')}  
                            type="password"
                            className='w-96 border h-10 rounded-md ps-2 outline-none' 
                          
                        />
                         {errors.password? <p className='text-red-500'>{errors.password.message}</p> : null}
                    </div>
                    <input 
                      
                        disabled={!isValid}
                        type="submit"   
                        value="Login"
                        className='bg-green-600 disabled:bg-green-400  text-white font-bold m-auto    py-2 mb-4 mt-6 px-4 rounded '
                    />
                   

                </form>
            </div>
            
        </div>
    )



}


export default Login;