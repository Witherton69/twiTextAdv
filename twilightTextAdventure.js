// Text Adventure Game
const start = `HAPPY BIRTHDAY Y/N SWAN! It's time to start your 18th birthday celebration!`;
const enter = "What happens next? Press 1 or 2 to decide.";

const gameOver = "Sorry GAME OVER!";

const q1 = `You are woken up by your father singing a Happy Birthday song. You sit up, still drowsy and a sweet aroma fills the room. You look at him to see him holding a cake. A few candles are placed around the edges and a big candle that reads 18 is in the middle. the candles are lit. You let out a sleepy laugh as you fix your hair. How sweet of him. He places the cake in front of you. Steady hands as he puts it in in your lap. Letting you take it and hold it a bit above the blanket.
1. Blow out the candles and celebrate your birthday at home
OR
2. Blow out the candles and tell him you still plan to go to school today.
${enter}`;

const gameOver1 = `You blow out the candle and place the cake down. You smile and ask to spend your birthday with him. He is more then happy to. You two spend the day together playing board games and going shopping at Fork's local strip mall. He offers to take you out of town to shop but you decline. However, that wasn't very "shy totally and irrevically in love with your boyfriend Edward" main character of you, so I must have you chose different. You and your father die in a car crash on your way back. ${gameOver}`;

const q2 = `Your father smiles. He knew you would want to go see your boyfriend at school today. he gives you a present a teases you about your hair turning grey. You frantically jump up and check the mirror. He was simply teasing after all. You roll your eyes and place the present on your nightstand. After breif conversation, you send your  dad and the cake back to the kitchen and get ready for school. On your way out, you are unsure of what to eat for breakfast.
1. $@%# it! It's your birthday! You grab a slice of cake.
OR
2. You go with a piece of toast and some jam to start the day off.
${enter}`;

const gameOver2 = `You grab the bread and pop a piece in the toaster. However, that wasn't very "I'm not like other girls." main character of you, so your house catches on fire and you and your father die. ${gameOver}`;

const q3 = `You eat the slice of cake and head out. The ride to school was smooth. Eric and Mike are there to great you along with Taylor, Jessica, and Angela. All have small boxes wrapped in festive paper. Mike shouting a big "HAPPY BIRTHDAY!" as you get out of yur truck. You spend the first 30 minuets of school unwrapping present in the parking lot and laughing with your friends. The day of school goes by fast and after Lunch, your boyfriend's sister and her boyfriend approch you. They say after school you are going to come over and celebrate your birthday with them. She's already picked out your outfit since she knows you won't.
1. Agree to the plans, despite how force-full they fill.
OR
2. Tell her you already have plans to spend it with your dad.
${enter}`;

const gameOver3 = `You tell her that you already have plans, but the moment you finish what you are saying, she giggles and you feel like agreeing to her plans. You glare at Jasper. Dang him and his vampire powers ot maniupulate emotions ${gameOver}`;

const q4 = `When you agree with her, she jumps up and down excitingly. She gives you a quick hug and runs off. You finish your school day off with goodbye hugs from everyone and you go back home. Your dad is at the kitchen table waiting for you. You smile and give him a big hug. You tell him your plans to go visit your boyfriends family because they have planned a party. He nods and hugs you once more. You go upstairs and put all your school stuff away. You look in your closet.
1. Pick out your own birthday outfit. It's YOUR birthday after-all.
OR
2. Wear what you have on over to the Cullen's and wear whatever Alice picked out for you.
${enter}`;

const gameOver4 = `You decide to pick out your own outfit. Feeling happy in your choice of dark green sweater and khaki pants, you head off. However, when you get there, you are meet with a very upset Alice. She ask why you didn't want to wear the dress she picked out for you and in her blind furry, her vampire-ness gets the better of her and she kills you. How will she explain this to Poor ol emo Edward. ${gameOver}`;

const q5 = `You decide to trust Alice with your birthday outfit. Once you arrive to the Cullen's house, she quickly ushers you away to a room to change. Once you look your best in the pretty blue dress, you go down stairs to see a beautiful birthday party set up. A exspensive cake is places atop a table and big gifts are places around. ALice hugs you and hands you a small present. She insist you op-en her gift first. You agree and unwrap it. But oh no! You cut your finger on the paper and a drop of blood drops onto the carpet. This sends Jasper into a vampire craze and he tries to kill you. Lucklly, your shoe for brains boyfriend throws you tp teh side, sending you crashing into a glass vase. You have to leave the party early to have the your boyfriend's dad, the town doctor, stitch you up. You offer to help clean everything up.
1. He lets you stay and clean up.
OR
2. He goes on a long monologue on how vampire kind is codemed to hell and then sends you home.
${enter}`;

const gameOver5 = `He thanks you for your hospitality and you both go back downstairs to help clean up the party but to his and your own demise, the family of vampires are now hungry for your blood and you die. Birthday person turned birthday dinner. ${gameOver}`;

const win = `After a long monologue, he sends you home. Once you arrive there, your father rushes to you and asked what happened. You say you tripped while dancing and landed on a glass vase. The wounds weren't too bad. Just a few cuts. He nods and complements your dress. You go upstairs and get changed into a more comfortable set up. You then see out your window. Poor emo Edward it waiting outside for you. You rush outside and greet him. He then tells you he no longer wishes to be together, and breaks up with you. After a brief moment, he dashes away in the woods. You try to follow but your father stops you. You and your father spend the rest of the day together. After the day is done, you sink into a horrid depression.`;

alert(start);

let userInput = prompt(q1);

if (userInput == 2){
  userInput = prompt(q2);

  if (userInput == 1){
    userInput = prompt(q3);

    if (userInput == 1){
      userInput = prompt(q4);

      if (userInput == 2){
        userInput = prompt(q5);

        if (userInput == 2){
          alert(win);
        } else {
          alert(gameOver5);
        }

      } else {
        alert(gameOver4);
      }

    } else {
      alert(gameOver3);
    }

  } else {
    alert(gameOver2);
  }

} else {
  alert(gameOver1);
}