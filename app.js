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
	$h4Wand.text('Elder Wand');
	$container.append($h4Wand);

    const $ul = $('<ul>').attr('storage', 'trunk');

    const items = [
        'butter beer',
        'invisibility cloak',
        'magic map',
        'time turner',
        'lash',
        "Bertie Bott's Every FLavor[Jelly] Beans"

    ];

    items.forEach(item => {
        const $li = $('<li>').text(item);
        if (item === 'invisibility cloak' || item === 'magic map' || item === 'time turner') {
            $li.addClass('secret');
        }
        if (item === 'lash') {
            $li.addClass('pet-type');

        }
    });

    $container.append($ul);

    const $h5 = $('<h5>').text('Spring 2017');
    $container.append($h5);

    const $table = $('<table>');

    const $thead = $('<thead>');
    const $th1 = $('<th>').text('Day');
    const $th2 = $('<th>').text('Classes');

    $thead.append($th1, $th2);

    $table.append($thead);

    const days = ['MOnday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday'];

days.forEach(day => {
    const $tr = $('<tr>');
    const $tdDay = $('<td>').text(day);
    const $tdClasses = $('<td>').text('Herbology, Divination, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice')

    $tr.append($tdDay, $tdClasses);

    $table.append($tr);

    $container.append($table);
});

$h4Wand.remove();

$ul.find('li:contains("butter beer")').remove();

const $neWand = $('<h4>').text('Your New Wand').css('color', 'indigo')
$container.append($newWand);

const $pet = $container.find('.pet-type');
const $leash = $ul.find('li.pet-type').detach();
$pet.detach();

$container.append($pet);
$ul.append($leash);

const $h4Wand = $('#container h4:contains("Elder Wand")');
$h4Wand.remove();

$('ul[storage="trunk"] li:contains("Butter Beer")').remove();

const $newWand = $('<h4>').text('New Wand: Phoenix Feather Core').css('color', 'indigo');
    $('.pet-type').after($newWand);

    const $pet = $('.pet-type');
    const $leash = $('ul[storage="trunk"] li.pet-type').detach();
    $pet.detach();

    $('#container').append($pet);
    $('ul[storage="trunk"]').append($leash);

    $('.secret').hide('slow').delay(2000);

    setTimeout(() => {
        $('.secret').show('slow');
    }, 2000);
    
    $('.pet-type.leash').addClass('cabbage'); 

    $('.pet-type.leash').removeClass('cabbage');

    $('h5').text('Fall 2018');

    $('ul[storage="chest"]').prepend('<li>Butter beer</li>');

    $('ul[storage="trunk"]').attr('storage', 'chest');

    