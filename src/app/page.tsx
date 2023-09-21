"use client"
import React, { useState, useEffect } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'


const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const router = useRouter()

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        if (!email || !password) {
            setError('All input fields are neccessary')
            setTimeout(() => {
                setError('')
            }, 3000)
            return
        }

        signIn('credentials', { email, password, redirect: true, callbackUrl: '/gallery' })
        setLoading(true)
    }

    useEffect(() => {
        setEmail('')
        setPassword('')
    }, [])

    return (
        <main className='w-full h-screen flex justify-center items-center'>
            <form
                onSubmit={handleSubmit}
                className='shadow-xl p-8 rounded-lg flex flex-col gap-4 bg-blue-100 min-w-[30%]'>
                <div className=' text-gray-600'>
                    <p>Email: user@example.com</p>
                    <p>Password: 1Password</p>
                </div>

                <p className='font-bold'>Enter the above details</p>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    className='px-2 py-2'
                    type="text"
                    placeholder='Email' />
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    className='px-2 py-2'
                    type="password"
                    placeholder='Password' />

                {
                    loading ? (
                        <input
                            // onClick={() => signIn('credentials', { email, password, redirect: true, callbackUrl: '/gallery' })}
                            // disabled={!email || !password}
                            className='cursor-pointer bg-green-500 p-2'
                            type="submit"
                            value="Loading..." />
                    ) : (
                        <input
                            // onClick={() => signIn('credentials', { email, password, redirect: true, callbackUrl: '/gallery' })}
                            // disabled={!email || !password}
                            className='cursor-pointer bg-green-500 p-2'
                            type="submit"
                            value="Sign In" />
                    )
                }

                {
                    error && (
                        <p className='inline bg-red-500 text-white px-3 py-2'>{error}</p>
                    )
                }
            </form>
        </main>
    )
}

export default SignIn