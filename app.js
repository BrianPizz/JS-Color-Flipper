const colors = ['aliceblue','antiquewhite','Aqua','Auqamarine',
'blueviolet','brown','cadetblue','chartreuse','cornflowerblue','chocolate',
'crimson','cyan','darkblue','darkcyan','darkgoldenrod','green', 'red',
'darkgray','darkgreen','darkkhaki','darkmagenta','darkolivegreen','darkorange','darkorchid',
'darkred','darksalmon','darkseagreen','darkslateblue','darkslategrey','darkturquoise',
'darkviolet','deeppink','deepskyblue', 'dodgerblue','firebrick','forestgreen',
'fuchsia','gold','greenyellow','ghostwhite','grey','ivory','khaki',
'indigo','lavender','lavenderblush','indianred','lightblue','lemonchiffron',
'lightcyan','lightseagreen','lightgray','lightskyblue','lightsalmon',
'linen','magenta','maroon','lime','mediumspringgreen','mediumpurple','mediumturquoise',
'midnightblue','mintcream','mistyrose','moccasin','navajowhite','navy','olive',
'orangered','olivedrab','oldlace','orchid','palegreen','paleturquoise','palevioletred','papayawhip',
'peachpuff','peru','red', 'rosybrown','royalblue','plum','powderblue','salmon','sandybrown',
'saddlebrown','seagreen','seashell','sienna','silver','skyblue','slateblue','slategrey','snow',
'springgreen','steelblue','tan','teal','thistle','tomato', 'turquoise','violet','wheat','white','black',

'orange', 'purple', 'yellowgreen', 'pink','blue',];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {

const randomNumber = getRandomNumber();
console.log(randomNumber);

document.body.style.backgroundColor = colors[randomNumber];
color.textContent = colors[randomNumber]; 
});

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}