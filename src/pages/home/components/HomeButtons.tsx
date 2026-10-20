import { BoxButton } from "@components";
import careerChefArt from "@assets/images/career-chef-art.png";
import bunny from "@assets/images/career-bunnny.png";
import worm from "@assets/images/career-worm.png";
import "@css/components/HomeButtons.css";
import { useGeneralStore } from "@utils/zustand/general-store";

export function HomeButtons() {
  const setCurrentPage = useGeneralStore((state) => state.setCurrentPage);

  const boxes = [
    <BoxButton onClick={() => setCurrentPage("basic")} className="box-button-1">
      Basic Questions
    </BoxButton>,
    <div
      className="image-boxes"
      style={{ backgroundImage: `url(${bunny})` }}
    />,
    <BoxButton
      className="box-button-2"
      onClick={() => setCurrentPage("detailed")}
    >
      Detailed Questions
    </BoxButton>,
    <div className="image-boxes" style={{ backgroundImage: `url(${worm})` }} />,
  ];

  return (
    <div className="buttons-container">
      <div
        className="buttons-image"
        style={{ backgroundImage: `url(${careerChefArt})` }}
      />
      <div className="buttons-inner-grid">{boxes.map((box) => box)}</div>
    </div>
  );
}
