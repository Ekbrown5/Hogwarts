//if (typeof jQuery == 'undefined'){
//    console.log('oops! I still have to link my jQuery properly!');
//} else {console.log('I did it! I linked jQuery and this js file!')};
$(() => {
	// put jQuery in here


const $container = $('#containter');
console.log($container);

const $h1 = $('<h1>');
console.log($h1);

$h1.text('Hogwarts');

$container.append($h1);
});

const $h2 = $('<h2>');
$h2.text('Eric');
$container.append($h2);

const $h3 = $('<h3>');
	$h3.text('Ravenclaw');
	$container.append($h3);

    const $h4Pet = $('<h4>').addClass('cat');
	$h4Pet.text('Cat\ Alo');
	$container.append($h4Pet);

    const $h4Wand = $('<h4>');
	$h4Wand.text('elder wand');
	$container.append($h4Wand);