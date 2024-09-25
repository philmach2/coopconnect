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
              text: "Submit Application",
              link: "/notfound",
              backgroundColor: "bg-black",
            }}
          >
            Submit your completed application package for board review.
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
            Access your exclusive shareholder portal for important documents and
            board communications.
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
