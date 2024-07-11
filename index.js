function scuberGreetingForFeet(feet){
  // Write your code here!
  if (feet <= 400) 
    return "This one is on me!";
  else if (feet <= 2000 && feet >=400)
    return "That will be twenty bucks.";
  else if (feet >= 2000 && feet <=2500)
    return "I will gladly take your thirty bucks.";
  else(feet >=2500)
    return "No can do.";
}

function ternaryCheckCity(NYC){

   return NYC === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(Tip){
 // Write your code here!
 switch(Tip){
 case 'generous':
  return 'Thank you so much.';
  case 'not as generous':
  return  'Thank you.';

 default :
 return 'Bye.';
 }}