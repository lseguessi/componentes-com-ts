import { Button } from "../components/Button";
import { GenreResponseProps } from "../interfaces/GenreResponseProps";
interface SideBarProps {
  genres: any;
  handleClickButton: (id: number) => void;
  selectedGenreId: Number;
}

export function SideBar(props: SideBarProps) {
  // Complete aqui
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {props.genres.map((genre: GenreResponseProps) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => props.handleClickButton(genre.id)}
            selected={props.selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
