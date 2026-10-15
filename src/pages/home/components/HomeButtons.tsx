import { BoxButton } from "@components";
import careerChefArt from "@assets/images/career-chef-art.png";
import bunny from "@assets/images/career-bunnny.png";
import worm from "@assets/images/career-worm.png";
import "@css/components/HomeButtons.css";

export function HomeButtons() {
  return (
    <div className="buttons-container">
      <div
        className="buttons-image"
        style={{ backgroundImage: `url(${careerChefArt})` }}
      />
      <div className="buttons-inner-grid">
        <div>
          <BoxButton className="box-button-1">Basic Questions</BoxButton>
        </div>
        <div
          className="image-boxes"
          style={{ backgroundImage: `url(${bunny})` }}
        />

        <div>
          <BoxButton className="box-button-2">Detailed Questions</BoxButton>
        </div>
        <div
          className="image-boxes"
          style={{ backgroundImage: `url(${worm})` }}
        />
      </div>
    </div>
  );
}
