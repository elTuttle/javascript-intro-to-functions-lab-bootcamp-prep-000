function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log(string.toUpperCase())
}

function logWhisper(string){
  console.log(string.toLowerCase())
}

function sayHiToGrandma(string){
  var uppercase = "YES INDEED!"

  uppercase.toUpperCase() === uppercase // true

  var lowercase = 'hello!'

  lowercase.toLowerCase() === lowercase // true

  var mixedCase = 'Hi there!'

  mixedCase.toLowerCase() === mixedCase // false

  mixedCase.toUpperCase() === mixedCase // false

  if (uppercase){
    return "I love you, too."
  } else if (lowercase){
    return "I can\'t hear you!"
  } else if (mixedCase){
    return "I love you, too."
  }
}
