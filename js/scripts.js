$(document).ready(function(){
  $("#theForm").submit(function(){
    event.preventDefault();
    var something = $("input#sentence").val();
    var something = something.replace(/[^a-z]/gi, '');
    //console.log(something);
    var array = something.split("");
    //var newArray = array.filter(item => item.trim() != '');
    //console.log(newArray);
//    var words = newArray.join('').toLowerCase();
    var wordsReversed = array.reverse().join('').toLowerCase();
    console.log(wordsReversed)
    if (something === wordsReversed) {
      alert("This is a palindrome")
    } else {
      alert("This is not a palindrome")
    }
  })
})
