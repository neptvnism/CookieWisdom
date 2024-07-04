document.addEventListener('DOMContentLoaded', function() {
  const adviceButton = document.getElementById('adviceButton');
  const adviceDisplay = document.getElementById('adviceDisplay');

  const adviceList = [
    "Never trust a dog to watch your food.",
    "If you can’t convince them, confuse them.",
    "Don’t buy a car you can’t push.",
    "Don’t let your mind wander – it’s too small to be let out on its own.",
    "A clear conscience is a sign of a bad memory.",
    "Always borrow money from a pessimist. They won’t expect it back.",
    "If at first you don’t succeed, skydiving is not for you.",
    "Before you criticize someone, walk a mile in their shoes. That way, you’re a mile away, and you have their shoes.",
    "Don’t sweat the petty things and don’t pet the sweaty things.",
    "Never put off until tomorrow what you can avoid doing altogether.",
    "Eat dessert first. Life is uncertain.",
    "Light travels faster than sound. This is why some people appear bright until you hear them speak.",
    "If you think nobody cares if you’re alive, try missing a couple of payments.",
    "How do you make holy water? Boil the hell out of it.",
    "A closed mouth gathers no feet.",
    "Do not take life too seriously. You will never get out of it alive.",
    "Be like a duck. Remain calm on the surface and paddle like crazy underneath.",
    "Never ask a barber if you need a haircut.",
    "Change is inevitable, except from a vending machine.",
    "If you’re not supposed to eat at night, why is there a light bulb in the refrigerator?",
    "Always remember that you are unique – just like everyone else.",
    "The early bird might get the worm, but the second mouse gets the cheese.",
    "When in doubt, mumble.",
    "Don’t worry if plan A fails, there are 25 more letters in the alphabet.",
    "Don’t take advice from anyone wearing a tie.",
    "A day without sunshine is like, you know, night.",
    "If you want your children to listen, try talking softly – to someone else.",
    "If at first you don’t succeed, try doing it the way your wife told you.",
    "If you tell the truth, you don’t have to remember anything.",
    "Don’t take life too seriously – nobody gets out alive anyway.",
    "Never miss a good chance to shut up.",
    "You never truly understand something until you can explain it to your grandmother.",
    "Good judgment comes from experience, and a lot of that comes from bad judgment.",
    "The sooner you fall behind, the more time you'll have to catch up.",
    "Always read stuff that will make you look good if you die in the middle of it.",
    "If you can’t be a good example, then you’ll just have to be a horrible warning.",
    "Experience is something you don’t get until just after you need it.",
    "Never, under any circumstances, take a sleeping pill and a laxative on the same night.",
    "You don’t have to be crazy to work here, but it helps.",
    "A conclusion is the place where you got tired of thinking.",
    "The problem with the gene pool is that there is no lifeguard.",
    "The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.",
    "Never hit a man with glasses. Hit him with something much heavier.",
    "It may look like I'm doing nothing, but in my head, I'm quite busy.",
    "You can’t have everything. Where would you put it?",
    "Always drink upstream from the herd.",
    "To steal ideas from one person is plagiarism; to steal from many is research.",
    "If everything seems to be going well, you have obviously overlooked something.",
    "Never do anything that you wouldn’t want to explain to the paramedics.",
    "It’s never too late to be what you want to be, unless you want to be younger. Then you’re screwed."
  ];

  adviceButton.addEventListener('click', function() {
    const randomAdvice = adviceList[Math.floor(Math.random() * adviceList.length)];
    adviceDisplay.textContent = randomAdvice;
    adviceDisplay.classList.add('active');
  });
});

function fetchAdvice() {
  // Placeholder for actual advice fetching logic
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("This is your random advice.");
    }, 1000);
  });
}
