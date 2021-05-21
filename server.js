const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send(
        [{
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '서동건',
            'birthday': '960702',
            'gender': '남자',
            'job': '개발자',
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '박동건',
            'birthday': '920702',
            'gender': '남자',
            'job': '백수',
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '김동건',
            'birthday': '940702',
            'gender': '남자',
            'job': '공무원',
        }]
    )
});

app.listen(port, () => console.log(`Listening on port ${port}`))