import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient()
//fulant api
const relationalQueries = async () => {
    // const result = await prisma.user.findUnique({
    //     where: {
    //         id: 1
    //     }
    // }).post()

    // console.log(result);

    //relational filters
    const publishedPostUser = await prisma.user.findMany({
        include: {
            post: {
                where: {
                    published: false
                }
            }

        }
    })
    console.dir(publishedPostUser, { depth: Infinity });

}
relationalQueries()