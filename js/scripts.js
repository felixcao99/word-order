$(document).ready(function() {
  // let sentence =[];
  let words = [];
  
  let count = [];
  let singleWord = [];

  $("#formOne").submit(function(event) {
    event.preventDefault();

    const sentence = $("input#word").val().trim();
    words = sentence.split(" ");
    words.forEach(element => {
      let l = singleWord.indexOf(element);
      if(l >= 0) {
        count[l]++;
      }else{
        singleWord.push(element);
        count.push(1);
      }
    });

    let n = count[0];
    let w = singleWord[0];
    let newSingleWord =[];
    let newCount = [];
    newSingleWord.push(w);
    newCount.push(n);

    for(let i=1; i < count.length; i++) {
      if(count[i] < n) {
        newSingleWord.push(singleWord[i]);
        newCount.push(count[i]);
      }else{
        n = count[i];
        newSingleWord.unshift(singleWord[i]);
        newCount.unshift(count[i]);
      }
    }

    $("#formOne").hide();
    $("#story").show();
    $("p#s1").text(sentence);

    for(let i=0; i < newSingleWord.length; i++) {
      $("ul#s2").append("<li>" + newSingleWord[i] + " " + newCount[i].toString() +"</li>");
    }  
    
  });
});