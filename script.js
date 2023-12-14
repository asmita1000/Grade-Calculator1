// Grade Calculator

//Button click listener

document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Input
  let scripting1 = +document.getElementById("1").value;
  let programming1 = +document.getElementById("2").value;
  let programming2 = +document.getElementById("3").value;
  let scripting2 = +document.getElementById("4").value;
  let projectA = +document.getElementById("5").value;
  // Process
  let finalCs10Grade =
    (scripting1 + programming1 + programming2 + scripting2 + projectA) / 5;

  console.log(finalCs10Grade);

  // Output
  document.getElementById("output").innerHTML = Math.round(finalCs10Grade);
}
