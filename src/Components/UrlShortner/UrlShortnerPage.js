import { NavBar } from "./NavBarComponent";
import { ShortnerInputComponent } from "./ShortnerInputComponent";
import "./urlShortner.css";

export function UrlShortnerPage() {
  return (
    <div>
      <NavBar />
      <ShortnerInputComponent />
    </div>
  );
}
