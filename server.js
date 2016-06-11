var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

app.get('/contactList', function (req,res) {
   console.log("GET request")

    person1 = {
        fName: 'Puneeth',
        lName: 'Somashekara',
        mobileNo: '(202) 779 5484',
        email: 'puneeth@abc.com',
        bday: '11/16/2012',
        address: '38 Heritage Lane Exton,PA'
    };

    person2 = {
        fName: 'Jason',
        lName: 'Lambert',
        mobileNo: '(312) 954 7963',
        email: 'jason@abc.com',
        bday: '11/16/1965',
        address: '38 Heritage Lane Exton,PA'
    };

    person3 = {
        fName: 'James',
        lName: 'Papademas',
        mobileNo: '(563) 589 5232',
        email: 'james@abc.com',
        bday: '11/16/2012',
        address: '38 Heritage Lane Exton,PA'
    };

    var contactList = [person1, person2, person3];
    res.json(contactList);
});

app.listen(3000);
console.log("Server running on port 3000");
