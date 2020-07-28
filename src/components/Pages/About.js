import React from "react";
import { right } from "@popperjs/core";

export default function About() {
  return (
    <>
      <div className="row">
        <h1 class="home-heading"       
        style={{
          marginBottom: 40,
          textAlign: 'center'
        }}>
          About Me
          <br />
        </h1>
      </div>
      <div className="row">
        <div className="col-md-4 profileimg">
          <img
            src={require(`../../images/profilepic.jpg`)}
            alt="ankit"
            style={{ width: "100%", height: "80%", marginTop:20}}
          />
        </div>
        <div
          className="col-md-8"
          style={{
            textAlign: "left"
          }}
        >
          <h2 class="home-heading">
            Hello, I'm Ankit Mudvari,
            <br />
          </h2>
          <h3 class="home-heading2">
            <strong>a full stack web developer.</strong>
            <br />
          </h3>

          <h4 class="home-subheading">
            I was born and raised in a small but beautiful coutry{" "}
            <strong>Nepal</strong>
            <br />
            and I am currently working for an Atlanta based Automotive Parts
            Company&nbsp;
            as an IT Engineer.
            <br />
            Being dad of two wonderful and hyperactive kids, most of my
            <br />
            time is spent with them. On my spare time, I love exploring new
            technology&nbsp;
            especially leaning towards Web development & design, Automation,
            Machine Learning and some AI.
          </h4>
        </div>
      </div>
    </>
  );
}
