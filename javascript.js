let examples = ['42+🎱+25✖️2', '42', '100✖️💯', '8✖️🎱', '🔟*10', '1 plus 1', '1%0'];
document.getElementById("res1").innerHTML = examples[0] + '<br>' + stringToEmoji(eval(emojiToNormalString(examples[0]))) + '<br><br>';
document.getElementById("res2").innerHTML = examples[1] + '<br>' + stringToEmoji(eval(emojiToNormalString(examples[1]))) + '<br><br>';
document.getElementById("res3").innerHTML = examples[2] + '<br>' + stringToEmoji(eval(emojiToNormalString(examples[2]))) + '<br><br>';
document.getElementById("res4").innerHTML = examples[3] + '<br>' + stringToEmoji(eval(emojiToNormalString(examples[3]))) + '<br><br>';
document.getElementById("res5").innerHTML = examples[4] + '<br>' + stringToEmoji(eval(emojiToNormalString(examples[4]))) + '<br><br>';
document.getElementById("res6").innerHTML = examples[5] + '<br>' + stringToEmoji(eval(emojiToNormalString(examples[5]))) + '<br><br>';
document.getElementById("res7").innerHTML = examples[6] + '<br>' + stringToEmoji(eval(emojiToNormalString(examples[6]))) + '<br><br>';

function letsCalc() {
    let myStr = document.getElementById("calcIn").value;
    let res = eval(emojiToNormalString(myStr));
    document.getElementById("result").innerHTML = stringToEmoji(res) + '\n';
    console.log(res);

}

function emojiToNormalString(eStr) {
    // NUMBERS
    let emojiNumbers = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟', '💯', '🎱'];

    eStr = eStr.replace(emojiNumbers[0], '0');
    eStr = eStr.replace(emojiNumbers[1], '1');
    eStr = eStr.replace(emojiNumbers[2], '2');
    eStr = eStr.replace(emojiNumbers[3], '3');
    eStr = eStr.replace(emojiNumbers[4], '4');
    eStr = eStr.replace(emojiNumbers[5], '5');
    eStr = eStr.replace(emojiNumbers[6], '6');
    eStr = eStr.replace(emojiNumbers[7], '7');
    eStr = eStr.replace(emojiNumbers[8], '8');
    eStr = eStr.replace(emojiNumbers[9], '9');
    eStr = eStr.replace(emojiNumbers[10], '10');
    eStr = eStr.replace(emojiNumbers[11], '100');
    eStr = eStr.replace(emojiNumbers[12], '8');

    // ADDITIONS
    let additions = ['➕', 'plus'];
    eStr = eStr.replace(additions[0], '+');
    eStr = eStr.replace(additions[1], '+');

    // SUBTRACTION
    let subtraction = ['➖', 'minus'];
    eStr = eStr.replace(subtraction[0], '-');
    eStr = eStr.replace(subtraction[1], '-');

    // MULTIPLICATION
    let multiplication = ['✖️', 'times', 'x'];
    eStr = eStr.replace(multiplication[0], '*');
    eStr = eStr.replace(multiplication[1], '*');
    eStr = eStr.replace(multiplication[3], '*');

    // DIVISION
    let divison = ['➗', 'divided by'];
    eStr = eStr.replace(divison[0], '/');
    eStr = eStr.replace(divison[1], '/');

    let sStr = eStr;

    return sStr;
}

function stringToEmoji(sStr) {
    if (!isNaN(sStr)) {

        let emojiNumbers = ['0️⃣', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟', '💯'];
        sStr = sStr.toString().replace('100', emojiNumbers[11]);
        sStr = sStr.toString().replace('1', emojiNumbers[1]);
        sStr = sStr.toString().replace('2', emojiNumbers[2]);
        sStr = sStr.toString().replace('3', emojiNumbers[3]);
        sStr = sStr.toString().replace('4', emojiNumbers[4]);
        sStr = sStr.toString().replace('5', emojiNumbers[5]);
        sStr = sStr.toString().replace('6', emojiNumbers[6]);
        sStr = sStr.toString().replace('7', emojiNumbers[7]);
        sStr = sStr.toString().replace('8', emojiNumbers[8]);
        sStr = sStr.toString().replace('9', emojiNumbers[9]);
        sStr = sStr.toString().replace('10', emojiNumbers[10]);
    } else {
        sStr = '🤷';
    }

    let eStr = sStr;

    return eStr;
}