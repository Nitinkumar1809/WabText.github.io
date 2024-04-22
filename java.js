

<div className="container">
<h3>YOUR WOLD</h3>
<p>{text.split(" ").length} WOLDS, {text.length} chercterss{" "}</p>
<p>{0.008 * text.split(" ").length} minutes</p>
<h3>preview</h3>
<p>{text}</p>
</div>


const handleupclick = () => {
  // console.log("uppaercase on cliced " + text);
  let newtext = text.toUpperCase();
  settext(newtext); //("you have click on hu gay handle on clicks ")
};

const handleloclick = () => {
  // console.log("uppaercase on cliced ");
  let newtext = text.toLowerCase();
  settext(newtext); //("you have click on hu gay handle on clicks ")
};
const handleclear = () => {
  let newtext = "";
  settext(newtext);
};

const handleRemove = () => {
  let newtext = text.split(/[ ]+/);
  settext(newtext.join(" "));
};

const handleCopy = () => {
  var text = document.getElementById("mybox");
  navigator.clipboard.writeText(text.value);
  // console.log("my copy");
  // text.Select();
  // text.setselectionRange(0.9999);
};

// const handlePASTE = (event) => {

// }

const handleonchage = (event) => {
  console.log("on changrs");
  settext(event.target.value);
};

