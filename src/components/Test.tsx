import {useForm , SubmitHandler} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import z from 'zod';




const Test =()=>{


    const Admin = z.object({
        email: z.string().email({message :'Email not valid'}),
        password: z.string().min(6,{message :'Password not valid'})
    })

    type dataType = z.infer<typeof Admin>;
    const { register , handleSubmit ,reset , formState : {errors , isValid}} = useForm<dataType>(
        {
            mode:'onChange',
            resolver: zodResolver(Admin)
        }
    );




    const onSubmit:SubmitHandler<dataType> = ({email , password})=>{
        const admin ={
            email,
            password
        }
        console.log(admin)
        reset();
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)} >
            <div>
                <label htmlFor="">Email</label>
                <input 
                    type="email"
                    {...register('email')} 
                />
                {errors.email?   <span>{errors.email?.message}</span> : null}
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input 
                    type="email"
                    {...register('email')} 
                />
                {errors.email?   <span>{errors.email?.message}</span> : null}
            </div>
            <input type="submit" disabled={!isValid} value="Login" />
        </form>
    )

}

export default Test;