import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from 'API';
import { List, ListItem, Block, ActorInfo, Name } from './Cast.styled';

const defaultImage =
  'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1129&q=80';

const Cast = () => {
  const { movieID } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function fetchCast(movieID) {
      const { cast } = await fetchMovieCast(movieID);
      const casts = cast.map(({ id, name, profile_path, character }) => ({
        id,
        name,
        src: profile_path,
        character,
      }));
      setActors(casts);
    }
    fetchCast(movieID);
  }, [movieID]);

  return (
    <Block>
      {actors.length !== 0 ? (
        <List>
          {actors.map(({ id, src, name, character }) => (
            <ListItem key={id}>
              <img
                src={
                  src ? `https://image.tmdb.org/t/p/w500/${src}` : defaultImage
                }
                alt={name}
              />
              <ActorInfo>
                <Name>{name}</Name>
                <p>Character: {character}</p>
              </ActorInfo>
            </ListItem>
          ))}
        </List>
      ) : (
        <p>We don't have any additional information about this movie.</p>
      )}
    </Block>
  );
};

export default Cast;
