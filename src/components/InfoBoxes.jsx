import InfoBox from "./infoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Package Submission"
            backgroundColor="bg-neutral-100"
            buttonInfo={{
              text: "Submit Board Package",
              link: "/properties",
              backgroundColor: "bg-neutral-500",
            }}
          >
            Submit your prepared documents to the 78 Charles Cooperative Board
            for review.
          </InfoBox>
          <InfoBox
            heading="For Shareholders"
            backgroundColor="bg-sky-100"
            buttonInfo={{
              text: "Shareholder Dashboard",
              link: "/properties/add",
              backgroundColor: "bg-sky-500",
            }}
          >
            Go to Shareholder's Dashboard to access building documents and read
            messages from the board.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
