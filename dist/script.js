let submission = document.getElementsByTagName("button")[0];
submission.addEventListener("click", myLineUp);

function myLineUp() {
    let status = document.querySelector('input[name="status"]:checked');
    let date = document.querySelector("select").value;
    let lineUp = document.querySelectorAll('input[name="players"]:checked');

    console.log(status);
    console.log(date);
    console.log(lineUp);
    document.writeln("<p>Your " + status + " lineup for " + date + " is: " + lineup + "!</p>");
}
