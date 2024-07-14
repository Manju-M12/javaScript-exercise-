// Getting a string for a player’s name

var getPlayerName;

getPlayerName = function (playerName) {
    return playerName;
};

console.log(getPlayerName("Kandra"));
var getPlayerName;

getPlayerName = function (playerName, withBorder = false, withPrefixSuffix = false, borderChar = '|', prefix = '====', suffix = '====') {
    if (withBorder) {
        return `${borderChar}\n${borderChar} ${playerName}\n${borderChar}`;
    } else if (withPrefixSuffix) {
        return `${prefix} ${playerName} ${suffix}`;
    } else {
        return playerName;
    }
};

// Examples of using the function with different features

console.log(getPlayerName("Kiki", false, true));                  
console.log(getPlayerName("Mahesha", false, true));               
console.log(getPlayerName("Jahver", true, false));             

console.log(getPlayerName("Jahver", true, false, '*'));           

console.log(getPlayerName("Jahver", false, false, '*', '***', '***')); 



/* Further Adventures
 *
 * 1) Update the getPlayerName function
 *    so it adds a prefix and suffix
 *    made up of the = character.
 *    The length of the prefix and suffix
 *    should be 4.
 *
 *    getPlayerName("Kiki") should return
 *    ==== Kiki ====
 *
 *    getPlayerName("Mahesha") should return
 *    ==== Mahesha ====
 *
 * 2) Update the getPlayerName function
 *    so it includes a border on the left
 *    when displaying the name.
 *
 *    getPlayerName("Jahver") should return
 *    
 *    |
 *    | Jahver
 *    |
 *
 * Note: to add a new-line character to a
 * string, use the escape sequence '\n'
 *
 * var msg = "\na\nb\n";
 * console.log(msg) would display:
 * "
 * a
 * b
 * "
 *
 */