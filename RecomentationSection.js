import React from "react";
import { v4 as uuid } from "uuid";
import RecomendationCard from "./RecomendationCard";

function RecomentationSection() {
  const recommendations = [
    {
      id: 1,
      name: "Random guy 1",
      company: "ABC company",
      designation: "CEO",
      message: "she is a good engineer and have excellent skill",
    },
    {
      id: 2,
      name: "Random guy 2",
      company: "ABC company",
      designation: "Director",
      message: "she is a hardworking person",
    },
    {
      id: 3,
      name: "Random guy 3",
      company: "ABC company",
      designation: "Manager",
      message: "she is an excellent developer",
    },
    {
      id: 4,
      name: "Random guy 4",
      company: "ABC company",
      designation: "SDE",
      message: "She done work quikly",
    },
  ];
  return (
    <div className="container-fluid my-5">
      <div className="row text-center py-5 d-flex flex-nowrap overflow-auto scrollbar">
        {recommendations.map(recommendation => (
          <RecomendationCard key={uuid()} recommendation={recommendation} />
        ))}
      </div>
    </div>
  );
}
export default RecomentationSection;
