import { PrismaClient } from "../generated/prisma";


const prisma = new PrismaClient()

const pagination = async () => {
    // offset pagination
    // const pagination_sorting_offset = await prisma.post.findMany({ skip: 5, take: 2 })
    const pagination_sorting_cursor = await prisma.post.findMany({
        skip: 5, take: 2, cursor: {
            id: 115
        }
    })

    // sorting
    const sort = await prisma.post.findMany({
        orderBy: {
            title: 'desc'
        }
    })
    console.log(sort);
}

pagination()