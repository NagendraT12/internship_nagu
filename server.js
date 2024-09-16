let express = require('express');
let app = express();
let cors = require('cors');

app.use(cors());

app.listen(2000);

let arr = [
  {
    name: "manoj",
    date: "2nd Jan 2021",
    content:
      "Touch typing is a typing method where typists place their hands on the home row.",
    },
    {
        name: 'nagendra',
        date: "3rd sept",
        content:
        "AF EDISDDK:",
    }
];

app.get('/', (req, res) => {
    res.send(arr);
});