// Write a pattern which identify if a string is a valid JavaScript variable

// is_valid_variable('first_name') # True
// is_valid_variable('first-name') # False
// is_valid_variable('1first_name') # False
// is_valid_variable('firstname') # True
function isValidVariable(variable) {
    const pattern = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/;
    const reservedKeywords = [
        'break', 'case', 'catch', 'class', 'const', 'continue', 'debugger', 'default', 'delete', 'do',
        'else', 'enum', 'eval', 'export', 'extends', 'false', 'finally', 'for', 'function', 'if', 'import',
        'in', 'instanceof', 'let', 'new', 'null', 'return', 'super', 'switch', 'this', 'throw', 'true',
        'try', 'typeof', 'var', 'void', 'while', 'with', 'yield'
    ];
    return pattern.test(variable) && !reservedKeywords.includes(variable);
}

// Test cases
console.log(isValidVariable('first_name')); // True
console.log(isValidVariable('first-name')); // False
console.log(isValidVariable('1first_name')); // False
console.log(isValidVariable('firstname'));   // True
console.log(isValidVariable('class'));       // False (Reserved keyword)
