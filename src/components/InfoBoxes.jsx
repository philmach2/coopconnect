import InfoBox from "./InfoBox";

const InfoBoxes = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InfoBox
        heading="Communication & Organization"
        backgroundColor="bg-white bg-opacity-80"
        textColor="text-black"
        buttonInfo={{
          text: "Stay Connected",
          link: "/notfound",
          backgroundColor: "bg-stone-700",
        }}
      >
        Streamline operations with intuitive messaging and document sharing.
      </InfoBox>
      <InfoBox
        heading="Secure Payments"
        backgroundColor="bg-white bg-opacity-80"
        textColor="text-black"
        buttonInfo={{
          text: "Simplify Finances",
          link: "/dashboard",
          backgroundColor: "bg-sky-500",
        }}
      >
        Process fees and assessments easily through our secure portal.
      </InfoBox>
      <InfoBox
        heading="Document Management"
        backgroundColor="bg-white bg-opacity-80"
        textColor="text-black"
        buttonInfo={{
          text: "Organize Easily",
          link: "/notfound",
          backgroundColor: "bg-stone-700",
        }}
      >
        Centralize, access, and share co-op documents securely.
      </InfoBox>
      <InfoBox
        heading="Board Member Tools"
        backgroundColor="bg-white bg-opacity-80"
        textColor="text-black"
        buttonInfo={{
          text: "Empower Your Board",
          link: "/dashboard",
          backgroundColor: "bg-sky-500",
        }}
      >
        Enhance decision-making and governance with specialized tools.
      </InfoBox>
    </div>
  );
};

export default InfoBoxes;
