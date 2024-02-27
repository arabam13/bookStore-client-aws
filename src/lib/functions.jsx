import React from "react";
import "../components/Books/BookItem/BookItem.module.css";

export function displayStars(rating) {
  const stars = [];
  for (let i = 0; i < 5; i += 1) {
    if (i < Math.round(rating)) {
      stars.push(<i className="fa-solid fa-star full" key={`full-${i}`}></i>);
    } else {
      stars.push(
        <i className="fa-regular fa-star empty" key={`empty-${i}`}></i>
      );
    }
  }
  return stars;
}
export function generateStarsInputs(rating, register, readOnly = false) {
  // console.log({ readOnly });
  // console.log({ rating });
  const stars = [];
  for (let i = 1; i < 6; i += 1) {
    if (rating > 0 && i <= Math.round(rating)) {
      stars.push(
        readOnly ? (
          <i className="fa-solid fa-star full" key={`full-${i}`}></i>
        ) : (
          <label key={`full-${i}`} htmlFor={`rating${i}`}>
            <i className="fa-solid fa-star full"></i>
            <input
              type="radio"
              value={i}
              id={`rating${i}`}
              {...register("rating")}
              readOnly={readOnly}
            />
          </label>
        )
      );
    } else {
      stars.push(
        readOnly ? (
          <i className="fa-regular fa-star empty" key={`empty-${i}`}></i>
        ) : (
          <label key={`full-${i}`} htmlFor={`rating${i}`}>
            <i className="fa-regular fa-star empty"></i>
            <input
              type="radio"
              value={i}
              id={`rating${i}`}
              {...register("rating")}
            />
          </label>
        )
      );
    }
  }
  return stars;
}
