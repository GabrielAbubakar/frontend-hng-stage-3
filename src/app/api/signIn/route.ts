import { NextResponse, NextRequest } from 'next/server'
import { connectDB } from '../../../../lib/mongodb'
import User from '../../../../lib/user'
import bcrypt from 'bcrypt'


export async function POST(req: NextRequest) {
    try {

        const { email, password } = await req.json()
        const hashPassword = await bcrypt.hash(password, 10)
        await connectDB()
        await User.create({ email, password: hashPassword })

        return NextResponse.json({ message: 'Stuff happened' }, { status: 200 })
    } catch (error) {
        console.log('Couldnt connect to the database')
    }

}