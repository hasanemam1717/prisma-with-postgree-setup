import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient()

const main = async () => {
    // create data in prisma
    // const result = await prisma.post.create({
    //     data: {
    //         title: "This is the prisma project title2",
    //         content: "This is content2",
    //         author: "Hasan Emam"
    //     }
    // })
    // console.log(result);

    // create many data into db
    // const createMany = await prisma.post.createMany({
    //     data: [
    //         {
    //             title: "This is the prisma  title120",
    //             content: "This is content20",
    //             author: "Hasan Emam"
    //         }, {
    //             title: "This is the prisma  title1200",
    //             content: "This is content200",
    //             author: "Hasan Emam"
    //         }, {
    //             title: "This is the prisma  title12000",
    //             content: "This is content2000",
    //             author: "Hasan Emam"
    //         },
    //     ]
    // })
    // console.log(createMany);

}

main()