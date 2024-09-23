export const tombol = (element) => {
    let sentences = [
        "Hello",
        "Hai",
        "💀"
      ];
    
      var index = 0;
    
    element.click(function(){
        index = (index + 1) % sentences.length;
        $('#heading').text(sentences[index]);
      });
}

