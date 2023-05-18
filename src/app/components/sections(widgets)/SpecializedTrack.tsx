'use client'
import Wrapper from "@/app/components/shared/Wrapper";
import QuarterBox1 from "../shared/QuarterBox1";
// images
import web3img from "@/Assets/images/metaverse.webp"
import AiImg from "@/Assets/images/AI.webp"
import CloudImg from "@/Assets/images/Cloud.webp"
import Image from "next/image";
import { useState } from "react";

const ProgramsData = [
  {
    slug:"wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
      image:web3img,
      quarters: [
      {
        
        header: "Quarter IV",
        description:"W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: 4,
      },
      {
        header: "Quarter V",
        description:"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experience",
        number: 5,
      },
    ],
  },
  {
    slug:"ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:"The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
      image:AiImg,
      quarters: [
      {
        header: "Quarter IV",
        description:"AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: 4,
      },
      {
        header: "Quarter V",
        description:"AI-361: Deep Learning and MLOps",
        number: 5,
      },
    ],
  },
  {
    slug:"cnc",
    header: "Cloud-Native Computing Specialization",
    description:"The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
      image:CloudImg,
      quarters: [
      {
        header: "Quarter IV",
        description:"CN-351: Certified Kubernetes Application Developer (CKAD)",
        number: 4
      },
      {
        header: "Quarter V",
        description:"CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
        number: 5
      },
    ],
  }

];

const SpecializedTrack = () => {

  const [selectedItem, setSelectedItem]= useState("wmd")
const selectedItemData = ProgramsData.find((items)=> items.slug === selectedItem)
  return (
    <section>
      <Wrapper>
        {/* header */}

        <div>
          <h2 className="text-5xl font-bold whitespace-pre-line">
            Specialized Tracks:
          </h2>
          <p className="mt-3 text-xl text-stale-600 max-w-screen-sm">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:
          </p>
        </div>
        <div className="mt-10 flex ">
          {/* content left */}
          <div className="flex-1 basis-4/12 shadow-xl rounded-xl border border-stale-200 py-8 px-8">
            <h4 className="text-primary text-lg- font-medium">
              Specialized Program
            </h4>
            <h3 className="text-2xl font-bold">
              Web 3.0 (Blockchain) and Metaverse Specialization
            </h3>
            <p className="text-stale-600 text-lg mt-2">
              This Web 3.0 and Metaverse specialization focuses on developing
              full-stack Web 3.0 and Metaverse experiences for the next
              generation of the internet by specializing in building worlds that
              merge the best of cutting-edge decentralized distributed
              blockchains with 3D metaverse client experiences.
            </p>
            <button className="text-primary text-lg mt-4 underline flex gap-x-2 items-end">
              Learn More
              <svg
                className="mb-1.5"
                width="10"
                height="13"
                viewBox="0 0 8 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg" >
                <path
                  d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                  stroke="#00616C"
                  strokeWidth="2"/>
              </svg>
            </button>
            <div className="flex gap-4 mt-8">
              <div>
                <QuarterBox1 description="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
                  header="Quarter IV"
                  number={4}
                  haveBorder={false}
                />
              </div>
              <div>
                <QuarterBox1  description="W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
                  header="Quarter V"
                  number={5}
                  haveBorder={false}
                />
              </div>
            </div>
          </div>

          {/* content right */}
          <div className=" basis-4/12 space-y-6 flex-1 px-4 py-6 bg-slate-100 ">
            {
              ProgramsData.map((items, i)=>(
            <div onClick={()=> setSelectedItem(items.slug)} key={items.slug} className="flex gap-x-4 cursor-pointer items-center">
              <div className="h-24 w-36 flex-shrink-0">
                  {/* <div className="w-20 h-16 rounded bg-red-300"></div>  */}
                <Image src={items.image} alt={items.header} className="h-24 space-x-10 object-cover rounded-md"/>
              </div>
              <div>
                <h4 className="text-primary font-medium">
                  Specialized Program
                </h4>
                <h3 className="text-xl font-semibold">
                 {items.header}
                </h3>
              </div>
            </div>

              ))
            }
            {/* underline
            <div></div> */}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTrack;
