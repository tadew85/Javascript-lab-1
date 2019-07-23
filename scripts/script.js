const name = "Tim Dew";
const age = 33;
const birthday = "September 6th";
let detroitGC = true;
let lifeEvents = [
  "I was born in Trenton, MI.",
  "I went to Roosevelt High School.",
  "I went to the Bahamas in 2012.",
  "I'm a student in Front-End at Grand Circus."
];
{
  if (!!detroitGC) {
    console.log(
      "My name is " +
        name +
        " and I am a student at Grand Circus in Detroit, MI. I am currently " +
        age +
        " years old and my birthday is " +
        birthday +
        "."
    );
  } else {
    console.log(
      "My name is " +
        name +
        " and I am a student at Grand Circus in Grand Rapids, MI. I am currently " +
        age +
        " years old and my birthday is " +
        birthday +
        "."
    );
  }
  for (i = 0; i < lifeEvents.length; i++) {
    console.log(`
         ${lifeEvents[0]}
         ${lifeEvents[1]}
         ${lifeEvents[2]}
         ${lifeEvents[3]}
        `);
  }
}
let randomNumber = Math.floor(Math.random() * 10);
let counter = 0;

while (randomNumber <= 9) {
  randomNumber++;

  if (randomNumber !== 5) {
    console.log(`
    ${randomNumber} !== 5`);
    randomNumber = Math.floor(Math.random() * 11);
    counter++;
  } else {
    randomNumber === 5;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}
