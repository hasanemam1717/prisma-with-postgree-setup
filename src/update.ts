import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient()

const main = async () => {
    // const updateSingle = await prisma.post.update({
    //     where: {
    //         id: 6
    //     },
    //     data: {
    //         title: "Update",
    //         author: "Naim",
    //         content: "update content"
    //     }
    // })
    // console.log(updateSingle);

    // const updateMany = await prisma.post.updateMany({
    //     where: {
    //         id: 4
    //     },
    //     data: {
    //         title: "Up 2"
    //     }
    // })
    // console.log(updateMany);

    const upsertData = await prisma.post.upsert({
        where: {
            id: 2
        },
        update: {
            title: "upsert title"
        },
        create: {
            title: "crete by upsert",
            content: "ha;sdflkhakdfs"
        }
    })

    console.log(upsertData);
}

main()