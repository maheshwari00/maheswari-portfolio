import React from "react";
import image from "../asset/dummy_image.png";

function Title(props) {
  // const name = "Maheswari Pokuri";
  //     const leadroll = "I am a freelance developer";
  const { name, leadroll } = props;
  return (
    <div className="container ">
      <div className="row text-center my-5 py-5">
        <div className="col-12 col-md-6">
          <img src={image} alt="my profile" />
        </div>
        <div className="col-12 col-md-6 pt-5">
          <div className="font-light-weight" style={{ fontSize: "500px" }}>
            <h1>
              Hi I am <span className="text-info"> {name}</span>
            </h1>
          </div>
          <h4>{leadroll}</h4>
        </div>
      </div>
    </div>
  );
}
export default Title;
