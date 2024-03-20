import './App.css'
import { TiwtterFollowCard } from './TiwtterFollowCard'

export function App () {
 return( 
    <section className='App'>
        <TiwtterFollowCard isfollowing={true} username="avatar" name="Las Bestias" />
        <TiwtterFollowCard isfollowing={false} username="emiliano" name="Emiliano Colavita" />
        <TiwtterFollowCard isfollowing={true} username="juanma" name="Juan Manuel" />
    </section>
 )
}