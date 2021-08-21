import db from "./db";


const resolvers ={
    Query: {
        movies: () => db.selectAllMovies(),
        movie: (_,{id}) => db.selectOneMovie({id})
    },
    Mutation: {
        updateMovie: (_,{id,name}) => db.updateMovie({id,name}),
        deleteMovie: (_,{id}) => db.deleteMovie({id})
    }
}

export default resolvers;