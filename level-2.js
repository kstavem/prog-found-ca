// question 1
for (var counter = 15; counter < 26; counter++) {
    if (counter % 2 === 0) {
        console.log(counter);
    };
};

// question 2
var innerFunction = function() {
    console.log("I am a function");
};

function outerFunction(myArg) {
    myArg();
};

outerFunction(innerFunction);