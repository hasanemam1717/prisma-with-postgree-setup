import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient()

const filtering = async () => {
    const andFiltering = await prisma.post.findMany({
        where: {
            AND: [
                {
                    title: {
                        contains: 'post'
                    }
                }, {
                    published: true
                }
            ]
        }
    })
    // console.log(andFiltering);
    const notFiltering = await prisma.post.findMany({
        where: {
            NOT: [
                {
                    title: "this"
                }
            ]
        }
    })

    const startsWith = await prisma.user.findMany({
        where: {
            email: {
                startsWith: "hasan@gmail.com"
            }
        }
    })
}

filtering()