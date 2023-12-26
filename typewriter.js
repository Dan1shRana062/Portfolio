
function typeWriter(initialText, id, speed) {
  let i = 0;

  return new Promise(resolve => {
    function typeWriterHelper() {
      if (i <= initialText.length) {
        const textToShow = initialText.substring(0, i);
        document.getElementById(id).innerText = textToShow;
        i++;
        if (i <= initialText.length) {
          if (initialText.charAt(i - 1) === ' ') {
            setTimeout(typeWriterHelper, speed);
          } else {
            setTimeout(typeWriterHelper, speed);
          }
        } else {
          resolve(true);
        }
      }
    }

     typeWriterHelper();
  });
}


typeWriter("Hi,", "greetingText", 100).then(

  () => typeWriter("Danish Here.", "nameText", 100).then(() => typeWriter("Just A CS Student. My Goal? To Dive Into The Tech World Headfirst,learn heaps,and be part of creating cool and innovative stuff.", "para", 50).then(() => typeWriter("Highlights", "navigationText", 100).then(() => {
    document.getElementById("navigationIcon").style.display = "inline"}).then(()=> {
  })))
)
