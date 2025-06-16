import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient({
    log: [
        {
            emit: 'event',
            level: 'query'
        }
    ]
})

prisma.$on("query", (e) => {
    console.log(e);
})

const main = async () => {
    const get = await prisma.post.findMany()
    // console.log(get);
}

main()