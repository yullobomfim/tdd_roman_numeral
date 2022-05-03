var values = [
    {
        arabic: 1000,
        roman: 'M',
    },
    {
        arabic: 900,
        roman: 'CM',
    },

    {
        arabic: 500,
        roman: 'D',
    },
    {
        arabic: 400,
        roman: 'CD',
    },

    {
        arabic: 100,
        roman: 'C',
    },
    {
        arabic: 90,
        roman: 'XC',
    },
    
    {
        arabic: 50,
        roman: 'L',
    },
    {
        arabic: 40,
        roman: 'XL',
    },
    {
        arabic: 10,
        roman: 'X',
    },
    {
        arabic: 9,
        roman: 'IX',
    },

    {
        arabic: 5,
        roman: 'V',
    },
    {
        arabic: 4,
        roman: 'IV',
    },
    {
        arabic: 1,
        roman: 'I',
    },
];

function romanizer(num) {
    var remaining = num;
    var result = '';
    if(num>=5000){
        return 'Sorry, Romans couldn\t count this high! ';
    }
    if(num<=0){
        return 'Sorry, Romans didn\t use numbers lower than 1';
    }
        values.forEach(function (value) {
        while (remaining >= value.arabic) {
            result += value.roman;
            remaining -= value.arabic;
        }
    });
    return result;
}

if(typeof module != 'undefined'){
    module.exports = romanizer;
}