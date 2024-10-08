import { MdEmail, MdLock } from "react-icons/md";
import { useForm } from 'react-hook-form'
import { useState } from 'react'

function Login({ setIsModalOpen, validateUser }) {
    const { handleSubmit, register } = useForm()
    const [email, setEmail] = useState('')

    return (
        <div className='wrapper'>
            <div class="x">
                <span onClick={() => setIsModalOpen(false)}>x</span>
            </div>
            <form action="" onSubmit={handleSubmit(async values => {
                await validateUser(values)
                setTimeout(() => window.location.reload(), 10)
            })}>
                <h1>Login </h1>
                <div class="input-box">
                <input type="text" {...register('email', {required: true})} placeholder="Correo" value={email} onInput={(e) => setEmail(e.target.value.toLowerCase())} />
                    <MdEmail className="icon"/>
                </div>
                <div class="input-box">
                    <input type="password" {...register('password', { required: true })} placeholder="Contraseña"/>
                    <MdLock className="icon"/>
                </div>

                <button type="submit">Iniciar Sesion</button>
            </form>
        </div>
    )
}

export default Login