import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient()

const main = async () => {
    // find all
    const getAllDataFromDb = await prisma.post.findMany()

    // find fast
    const findFastFromDb = await prisma.post.findFirstOrThrow({
        where: {
            id: 2
        }
    })
    // find unique or find unique or throw
    const findUniqe = await prisma.post.findUniqueOrThrow({
        where: {
            id: 4
        },
        select: {
            title: true
        }
    })

    console.log(findUniqe);
}

main()