import ActorCard from "../../components/ActorCard/ActorCard"
import "./ActorListPage.css"  

export default function ActorListPage({ movies }) {

  const actorList = movies.reduce((actors, movie) => {
    movie.cast.forEach((actor) => {
      if(!actors.includes(actor)) 
        actors.push(actor)
    })
    return actors
  }, [])

  return (
    <>
    {actorList.map(actor => {
      return <ActorCard key={ actor } actor={ actor } />
    })}
    </>
  )
}

// const uniqueActors = [...new Set(movies.flatMap(movie => movie.cast))];