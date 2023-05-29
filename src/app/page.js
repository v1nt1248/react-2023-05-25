/* eslint-disable react/no-children-prop */
import React from "react";

export default function Home() {
  // const element = React.createElement("div", {
  //   children: [
  //     React.createElement("h3", { children: "Hello" }),
  //     React.createElement("span", { children: "Students" }),
  //   ],
  // });

  const element = (
    <div>
      <h3>Hello</h3>
      <span>Students</span>
    </div>
  );

  console.log(element);

  return element;
}
