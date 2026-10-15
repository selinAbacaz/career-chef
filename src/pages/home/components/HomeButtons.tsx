import { BoxButton } from "@components";
import careerChefArt from "@assets/images/career-chef-art.png";
import bunny from "@assets/images/career-bunnny.png";
import worm from "@assets/images/career-worm.png";
import "@css/components/HomeButtons.css";

const boxes = [
  <BoxButton className="box-button-1">Basic Questions</BoxButton>,
  <div className="image-boxes" style={{ backgroundImage: `url(${bunny})` }} />,
  <BoxButton className="box-button-2">Detailed Questions</BoxButton>,
  <div className="image-boxes" style={{ backgroundImage: `url(${worm})` }} />,
];

export function HomeButtons() {
  return (
    <div className="buttons-container">
      <div
        className="buttons-image"
        style={{ backgroundImage: `url(${careerChefArt})` }}
      />
      <div className="buttons-inner-grid">
        {boxes.map((box) => (
          <div className="boxes">{box}</div>
        ))}
      </div>
    </div>
  );
}
