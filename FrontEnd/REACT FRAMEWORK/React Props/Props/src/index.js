import React from "react";
import ReactDOM from "react-dom";

//card component
function Card(props) {
  console.log(props);
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.src} alt={props.alt} width="200px" height="200px" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Kenshi"
      src="https://www.mkmobile.info/uploads/character/18/thumbs_1024/image2020_Nov_16_20_09558.jpg"
      alt="handsome boii"
      tel="+123 456 789"
      email="kenshi@warrior.jp"
    />

    <Card
      name="Ohh Yeah!"
      src="https://thumbs.dreamstime.com/z/young-woman-celebrating-raising-fist-up-strength-gesture-oh-yeah-comic-balloon-text-woman-oh-yeah-text-115251038.jpg"
      alt="pretty girl"
      tel="+123 456 769"
      email="kenshinGF@warriorGF.jp"
    />
  </div>,
  document.getElementById("root")
);
