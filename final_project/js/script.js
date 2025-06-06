
  function toggleText() {
    document.getElementById("hiddenText").style.display = "block";
  }  
  
  function askName() {
    //the variable below is for the web browser to populate the answer on the web page
    var nameReturn = document.getElementById('ask-name');
     //the name variable is for the prompet box to appear and the user can type their name
    var name=prompt('Please enter your name', 'Here');
    if (name== '' || name== 'HERE'){
        alert('Please try agian');
    } else {
        nameReturn.innerHTML = 'Hello ' + name + '! Nice to meet you!';
        nameReturn.style.fontSize= '30px';
    }
}

