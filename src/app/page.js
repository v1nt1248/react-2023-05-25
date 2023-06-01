/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import React from "react";
import { restaurants } from "@/mocks";
import { Menu } from "@/components/Menu/Menu";

export default function Home() {
  const { name, menu, reviews } = restaurants[0];

  return (
    <div>
      {/* Отрисовываем рестораны здесь */}
      <h2>{name}</h2>
      <Menu menu={menu} />
      {/* Reviews */}
      <h3>Reviews</h3>
      <ul>
        {reviews.map(({ text }) => (
          <li>{text}</li>
        ))}
      </ul>
    </div>
  );
}
