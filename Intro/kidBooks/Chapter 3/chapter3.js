// let dinosaurs = [
//     "T-Rex",
//     "Velociraptor",
//     "Stegosaurus", 
//     "Triceratops",
//     "Brachiosaurus",
//     "Pteranodon",
//     "Apatosaurus", 
//     "Diplodocus",
//     "Compsognathus"
//    ];
//    alert(dinosaurs[0]);
//    dinosaurs[0] = "Tyrannosaurus Rex";
//    alert(dinosaurs[0]);

// let dinosaurs = [];
// dinosaurs[0] = "T-Rex";
// dinosaurs[1] = "Velociraptor";
// dinosaurs[2] = "Stegosaurus";
// dinosaurs[3] = "Triceratops";
// dinosaurs[4] = "Brachiosaurus";
// dinosaurs[5] = "Pteranodon";
// dinosaurs[6] = "Apatosaurus";
// dinosaurs[7] = "Diplodocus";
// dinosaurs[8] = "Compsognathus";
// console.log(dinosaurs);

// let dinosaursAndNumbers = [3, "dinosaurs", ["triceratops", 
//  "stegosaurus", 3627.5], 10];
//  console.log(dinosaursAndNumbers[2]);
//  console.log(dinosaursAndNumbers[2][0]);
//  console.log(dinosaursAndNumbers[2][2]);
// console.log(dinosaursAndNumbers[3]);
// console.log(dinosaursAndNumbers[2][1]);

// var maniacs = ["Yakko", "Wakko", "Dot" ];
// // console.log(maniacs[0]);
// // let len = maniacs.length;
// // console.log("length of maniacs is " + len)
// console.log(maniacs[maniacs.length-1]);

// let animals = [];
// animals.push("Cat");
// animals.push("Dog");
// animals.push("Llama");
// console.log(animals);
// animals.unshift("Monkey");
// console.log(animals);
// animals.unshift("Polar Bear");
// console.log(animals);
// let lastAnimal = animals.pop();
// console.log(animals);
// console.log("last animal was " + lastAnimal);
// let firstAnimal = animals.shift();
// console.log(animals);
// console.log("first animal was:" + firstAnimal);

// let furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
// let scalyAnimals = ["Boa Constrictor", "Godzilla"];
// let furryAndScalyAnimals = furryAnimals.concat(scalyAnimals);
// console.log(furryAndScalyAnimals);
// console.log(furryAnimals);
// console.log(scalyAnimals);

// let featherdAnimals = ["Macaw","Dodo"];
// let furryScalyAndFeatheredAnimals = scalyAnimals.concat(furryAnimals,featherdAnimals);
// console.log(furryScalyAndFeatheredAnimals);

// let colors = ["red" , "blue", "green"];
// console.log(colors.indexOf("blue"));
// console.log(colors.indexOf("green"));
// console.log(colors.indexOf("purple"));

// let insects = ["Bee", "Ant", "Bee", "Bee", "Ant"];
// let firstIndex = insects.indexOf("Bee");
// console.log("First index is " + firstIndex);
// let secondIndex = insects.indexOf("Bee",firstIndex + 1);
// console.log("second index is: " + secondIndex);
// console.log("last index of Bee is: " + insects.lastIndexOf("Bee"));

// let boringAnimals =["Monkey", "Cat", "Fish", "Lizard"];
// console.log(boringAnimals);
// console.log(boringAnimals.join(" "));

//console.log(Math.random() * 10);
//console.log(Math.floor(Math.random()*69));

// let randomWords = ["Toyota Supra mk4","BMW M4","Audi R8", "Nissan Skyline GTR"];
// let randomIndex = Math.floor(Math.random() * 4);
// console.log("This is a " + randomWords[randomIndex]);
// alert("This is a " + randomWords[randomIndex]);

// let phrases = ["I ate my spacebar", "Yes, you should definitely do that", "I'm not sure that's a great idea ", "Maybe not today? ", "Computer says no."];
// let randomPhrases = Math.floor(Math.random() * 5);
// console.log(phrases[randomPhrases]);

// let randomPcParts = [" GPU.", " CPU."," RAM.", " Motherboard."," PSU."];
// let randomColors = [" blue", " red"," green", " black", " white"];
// let randomSize = ["big", "small"];
// let randomPrice = ["cheap for 100", "cheap for 1000", "Expensive for 10000", "Expensive for 100000"];

// let size = randomSize[Math.floor(Math.random() * 2)];
// let color = randomColors[Math.floor(Math.random() * 5)];
// let part = randomPcParts[Math.floor(Math.random() * 5)];
// let price = randomPrice[Math.floor(Math.random()) * 4];

// let choice = ["I should buy a " , size , color , part , price];
// console.log(choice.join(" "));

// console.log([3,2,1].join(" is bigger than "));

