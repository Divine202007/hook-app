import React from 'react';
import { useState } from 'react';
import './Style.css';
import ListeFilm from './ListeFilm';
import  {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddFilm from './AddFilm';


const movielist = [
  {
    id: 1,
    title: "Ma",
    description: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte",
    posterUrl: "https://www.youtube.com/embed/3---ghjeBHU",
    rating: 1
  },
  { id: 2,
    title: "Spider-Man",
    description: " Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.",
    posterUrl: "https://www.youtube.com/embed/6sRwk_lDo_U",
    rating: 3
  },
  { id: 3,
    title: "Dune",
    description: "On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du Lorem Ipsum sur un texte générique comme 'Du texte",
    posterUrl: "https://www.youtube.com/embed/GNjaMPeVkrE",
    rating: 4  
  },
  { id: 4,
    title: "The forever purge",
    description: "De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut, et une recherche pour 'Lorem Ipsum' vous conduira vers de nombreux sites qui n'en sont encore qu'à leur phase de construction. Plusieurs versions sont apparues avec le temps, parfois par accident, souvent intentionnellement (histoire d'y rajouter de petits clins d'oeil, voire des phrases embarassantes).",
    posterUrl: "https://www.youtube.com/embed/01a2EsUeEfs",
    rating: 2
  }
];
// const handleAdd = (film) => {
//   const newFilms = [...films];
//   newFilms.push(film)
//   setFilms(newFilms)
// };

function App() {


  const [films, setFilms] = useState(movielist);

  const addFilm = (film) => {
      if(!film.title || /^ \s*$/.test(film.title) ){
        return;
      } 
      const newFilms = [film, ...films];
      setFilms(newFilms);
      console.log(...newFilms);
  } 

  return (
    <div className="App">
      <Container>
          <AddFilm onSubmit = {addFilm} />
          <ListeFilm films={films} />
      </Container>
    </div>
  );
}

export default App;
