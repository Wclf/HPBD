const letterEl = document.getElementById("letter")
const letterEl2 = document.getElementById("letter2")

const optionsEl = document.getElementById("options")
const speed = 30
let sentenceID = 0
let sentenceID2 = 0



const sentences = [
    {
      sentence: "Happy Birthday, Maiiii!💖🎉 Today is a perfect time to remind you of how much you mean to me. Your presence fills my life with happiness and inspiration, and I cherish every moment we’ve shared. Thank you for being such a special part of my journey. May your day be as amazing as you are! 🥳🎂 ",
      postfix: "."
    },
  ];
  const sentences2 = [
    {
      sentence: "May your birthday be as exceptional and unforgettable as you are. Here’s to celebrating all the amazing things that make you unique, today and always. Sending you all my love and warmest wishes! 💖",
      postfix: "."
    },
  ];
  
const writeLetter = () => {
    if (sentenceID < sentences.length) {
      input = sentences[sentenceID];
      const sentence = input.sentence;
      const options = input.options;
      const postfix = input.postfix;
  
      typewriter(sentence, letterEl)
  
      setTimeout(() => {
        createButtons(options, postfix)
        window.scrollTo(0, document.body.scrollHeight);
      }, speed * sentence.length)
    }
  }
  
  const typewriter = (text, contentEl, cb = () => { }) => {
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        contentEl.innerHTML += text.charAt(i);
        window.scrollTo(0, document.body.scrollHeight);
        if (i === text.length - 1) { cb() }
      }, speed * i)
    }
  }

  const writeLetter2 = () => {
    if (sentenceID2 < sentences2.length) {
      input = sentences2[sentenceID2];
      const sentence = input.sentence;
      const options = input.options;
      const postfix = input.postfix;
  
      typewriter(sentence, letterEl2)
  
      setTimeout(() => {
        createButtons(options, postfix)
        window.scrollTo(0, document.body.scrollHeight);
      }, speed * sentence.length)
    }
  }
  
  const typewriter2 = (text, contentEl2, cb = () => { }) => {
    for (let i = 0; i < text.length; i++) {
      setTimeout(() => {
        contentEl2.innerHTML += text.charAt(i);
        window.scrollTo(0, document.body.scrollHeight);
        if (i === text.length - 1) { cb() }
      }, speed * i)
    }
  }
  
writeLetter()
writeLetter2()
