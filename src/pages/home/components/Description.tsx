import "@css/components/Description.css";

export function Description() {
  return (
    <div className="description-container">
      <header className="description-heading">
        ✦ Results made reliable with AI ✦
      </header>
      <div className="more-info-container">
        <div className="info-box">
          <h1 className="info-header">More Information on Basic✦Questions</h1>
          <p className="info-text">
            The assessment works with advanced artificial intelligence to
            analyze your personality traits, interests, and values to provide
            personalized recommendations specifically for the user. The basic
            quiz consists of 10 shorter questions with a variety of multiple
            choice, slider, and short answer to provide a quick and easy
            experience to determine your results.
          </p>
        </div>

        <div className="info-box">
          <h1 className="info-header">
            More Information on Detailed✦Questions
          </h1>
          <p className="info-text">
            The assessment works with advanced artificial intelligence to
            analyze your personality traits, interests, and values to provide
            personalized recommendations specifically for the user. The detailed
            quiz consists of 10 longer and more detailed open-ended questions
            that will then be analyzed by AI to provide the more accurate
            results.
            <span className="info-tip">
              <br></br>
              Tip: Detailed Questions gives more accurate results !
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
