import Wrapper from "@/app/components/shared/Wrapper";
import Button from "@/app/components/shared/Button";
// import QuarterBox from "@/app/components/shared/QuarterBox";
import QuarterBox1 from "@/app/components/shared/QuarterBox1";

const CoreTrackData = [
  {
    QuarterNo: "Quarter I",
    decription: "CS-101: Object-Oriented Programming using TypeScript",
    number: 1,
  },
  {
    QuarterNo: "Quarter II",
    decription:
      "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number: 2,
  },
  {
    QuarterNo: "Quarter III",
    decription:
      "$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number: 3,
  },
];

const CoreTrack = () => {
  const header = "Core Courses \n (Common in All Specializations):";
  return (
    <section className="mt-16  lg:mt-28">
      <Wrapper>
        <div className="max-w-screen-md">
          <h4 className="text-teal-700 font-semibold sm:text-2xl mt-4">
            Program of Studies
          </h4>
          <h2 className=" text-5xl font-bold whitespace-pre-line">{header}</h2>
          <p className="mt-3 text-xl text-slate-600">
            Every participant of the program will start by completing the
            following three core courses: 
          </p>
          <div className="mt-4">
            <Button text="Learn More" />
          </div>
        </div>

        {/* boxes */}
        <div className="my-20 flex flex-col md:flex-row gap-x-8 gap-y-6">
        {
            CoreTrackData.map((items, i) => (
              <QuarterBox1 
              key={items.number}
              description={items.decription} 
              header={items.QuarterNo} 
              number={i+1}/>
              
               ))
            } 
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTrack;
