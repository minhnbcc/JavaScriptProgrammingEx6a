/*
    JavaScript Programming Ex 6
    Arrays
*/

let cars =["Wrangler","Forester","Defender","Land Crusier"];
let makes = new Array('Jeep','Subaru','Land Rover','Toyota');

let add ="y";

let myNumbers =[];

while (add=="y"){
    let number =prompt('Add a number to the array');

    if(number !=''&& !isNaN(number)){
        myNumbers.push(number);
    }

    add = prompt('Continue to add numbers to my array?','y')
}

// <!-- <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <meta http-equiv="X-UA-Compatible" content="ie=edge" />
//     <title>Document</title>
//     <script src="app.js"></script>
//   </head>
//   <body>
//     <ul>
//       <script>
//         for (let i = 0; i < cars.length; i++) {
//           document.writeln(<li>${cars[i]}</li>);
//         }
//       </script>
//     </ul>

//     <h2>Makes Array</h2>
//     <ul>
//       <script>
//         makes.forEach(make => {
//           document.writeln(<li>${make}</li>);
//         });
//       </script>
//     </ul>
//     <script>                                                                            
//       if (myNumbers.length > 0) {
//         //write them out
//         document.writeln("<ul>");
//         myNumbers.forEach(n => {
//           document.writeln(<li>${n}</li>);
//         });
//         document.writeln("</ul>");
//         //remove the first element i the array
//         myNumbers.shift();
//         document.writeln("<ul>");
//         myNumbers.forEach(n => {
//           document.writeln(<li>${n}</li>);
//         });
//         document.writeln("</ul>");
//         // add the first element in the array
//         myNumbers.unshift(0, 1);
//         document.writeln("<ul>");
//         myNumbers.forEach(n => {
//           document.writeln(<li>${n}</li>);
//         });
//         document.writeln("</ul>");
//       } else {
//         document.writeln("<p>No numbers in the array.</p>");
//       }
//     </script>
//   </body>
// </html> -->

