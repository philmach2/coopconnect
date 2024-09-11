import InfoBox from "./infoBox";

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Package Submission"
            backgroundColor="bg-stone-100"
            buttonInfo={{
              text: "Submit Board Package",
              link: "/notfound",
              backgroundColor: "bg-black",
            }}
          >
            Submit your prepared package to the board of 78 Tenants Corp to
            review and approve.
          </InfoBox>
          <InfoBox
            heading="For Shareholders"
            backgroundColor="bg-sky-100"
            buttonInfo={{
              text: "Shareholder Dashboard",
              link: "/dashboard",
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
