import { prisma } from "../prisma";
import { movieProps } from "./addMoviesToList";

export async function deleteMovieByTmdBidAndListId({ TMDBid, listId }: movieProps) {

    const movieFound = await prisma.movie.findFirst({
        where: {
            TMDBid,
            listId
        },
        select: {
            listId: true,
            TMDBid: true,
            id: true
        }
    });

    if (!movieFound) {
        return null;
    }

    const movieId = movieFound?.id;


    const movieDeleted = await prisma.movie.delete({
        where: {
            id: movieId,
        }, select: {
            listId: true,
            TMDBid: true,
        }
    });

    return movieDeleted;


}

/*
Primeiro buscar o id do filme que deseja ser deletado
Deletar um filme da lista de um usuário especifico pelo ID da lista e do TMDB

*/