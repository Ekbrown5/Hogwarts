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
