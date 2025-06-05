import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient()

const main = async () => {


    const deleteDataFromDb = await prisma.post.delete({
        where: {
            id: 4
        }
    })
    console.log(deleteDataFromDb);

}

main()