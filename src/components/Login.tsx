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
            <div className="fixed top-0 left-0 right-0 px-8 py-4 font-medium italic text-3xl">
                Expert<span className='text-green-900'>Pro</span>            
            </div>
            <div className="formContainer border rounded-lg px-8  py-4">
                <h3 className='text-3xl font-medium mb-6'>Login</h3>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}  >
                    <div className="inputWrapper flex flex-col  w-fit " >
                        <label  className='mb-2'>Email</label>
                        <input  
                        {...register('email')}  
                            type="email"
                            className='w-72 border h-8 rounded-sm ps-2 outline-none' 
                          
                        />
                        {errors.email? <p className='text-red-500'>{errors.email.message}</p> : null}

                    </div>
                    <div className="inputWrapper flex flex-col  w-fit " >
                        <label  className='mb-2'>Password</label>
                        <input
                               {...register('password')}  
                            type="password"
                            className='w-72 border h-8 rounded-sm ps-2 outline-none' 
                          
                        />
                         {errors.password? <p className='text-red-500'>{errors.password.message}</p> : null}
                    </div>
                    <input 
                      
                        disabled={!isValid}
                        type="submit"   
                        value="Login"
                        className='bg-green-600 disabled:bg-green-400  text-white font-bold m-auto w-full mt-2  py-2 mb-4 px-4 rounded '
                    />
                   

                </form>
            </div>
            
        </div>
    )



}


export default Login;