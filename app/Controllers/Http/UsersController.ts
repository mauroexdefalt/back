import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class UsersController {

    public async create({ request }: HttpContextContract) {

        const { email, password, type } = request.only(["email", "password", "type"])
        const user = await User.create({
            email,
            password,
            type
        })


        return user

    }


    public async all() {
        const user = await User.all()
        return user

    }


    public async findOne({ request }: HttpContextContract) {

        const user = await User.findBy('id', '4')
        return user

    }


    public async delete({ request }: HttpContextContract) {
        const user = await User.findOrFail(1)
        await user.delete()
    }


    public async update({ request }: HttpContextContract) {
        const user = await User.findOrFail(1)
        user.email = 'teste edicao'// Luxon dateTime is used        
        await user.save()
        return user
    }
}
