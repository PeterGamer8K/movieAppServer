import { prisma } from "../prisma";



export async function findUserInDatabaseByEmail(email: string) {
    const userFound = await prisma.user.findFirst({
        where: {
            email: email,
        },
        select: {
            password: true,
            email: true,
            id: true,
            name: true,
        }
    });

    return userFound;
}