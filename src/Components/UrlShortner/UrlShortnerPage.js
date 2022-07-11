import { NavBar } from "./NavBarComponent";
import { ShortnerInputComponent } from "./ShortnerInputComponent";
import { ShortnerTableComponent } from "./ShortnerTableComponent";
import "./urlShortner.css";

export function UrlShortnerPage() {
  return (
    <div>
      <NavBar />
      <ShortnerInputComponent />
      <ShortnerTableComponent />
    </div>
  );
}
