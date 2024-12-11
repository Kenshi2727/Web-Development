import React from "react";
import ReactDOM from "react-dom";

// ReactDOM.render(
//   <div>
//     <h1 className="heading" contentEditable="true" spellCheck="false">
//       My Favourite Foods
//     </h1>
//     <ul>
//       <li>Bacon</li>
//       <img
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjqyNQc-pwl8U8lNIZruzxgXfhP_o9vLBigA&s"
//         alt="Bacon"
//         width="100px"
//         height="100px"
//       />
//       <li>Jamon</li>
//       <img
//         src="https://i.ytimg.com/vi/VdTak05HwDs/maxresdefault.jpg"
//         alt="Jamon"
//         width="100px"
//         height="100px"
//       />
//       <li>Noodles</li>
//       <img
//         src="https://www.seriouseats.com/thmb/iD62ByO0qeACNjfCV5eZEqkBxhQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__01__20140120-beef-ramyun-homemade-recipe-15-014423f0ac734abc8c0d826e54857afe.jpg"
//         alt="Noodles"
//         width="100px"
//         height="100px"
//       />
//     </ul>
//   </div>,
//   document.getElementById("root")
// );

const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      Thanks Lorem Ispum for your Random Photos
    </h1>
    <img src={img + "?grayscale"} alt="random-tasveer" />
  </div>,
  document.getElementById("root")
);
