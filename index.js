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
  var uppercase = "HELLO!"
  var lowercase = "hello"
  var mixedCase = "I love you, Grandma."
  if (uppercase){
    return "YES INDEED!"
  } else if (lowercase){
    return "I can't hear you!"
  } else if (mixedCase){
    return "I love you, too."
  }
}
