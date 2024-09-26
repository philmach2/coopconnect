import InfoBox from "./InfoBox";

const InfoBoxes2 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InfoBox
        heading="For Package Submission"
        backgroundColor="bg-white bg-opacity-80"
        textColor="text-black"
        buttonInfo={{
          text: "Submit Application",
          link: "/notfound",
          backgroundColor: "bg-stone-700",
        }}
      >
        Submit your completed application package for board review and
        consideration.
      </InfoBox>
      <InfoBox
        heading="For Shareholders"
        backgroundColor="bg-white bg-opacity-80"
        textColor="text-black"
        buttonInfo={{
          text: "Shareholder Dashboard",
          link: "/dashboard",
          backgroundColor: "bg-sky-500",
        }}
      >
        Access shareholder portal for important documents and board
        communications.
      </InfoBox>
    </div>
  );
};

export default InfoBoxes2;
