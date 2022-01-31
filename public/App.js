
var nameNode = document.getElementById('Name');
var imageNode = document.getElementById('image');
var introNode = document.getElementById('Intro');
var gitNode = document.getElementById('Github');
var nameComponent = React.createElement(
    'h1',
    null,
    'Pooja Vaidya'
);
var imageComponent = React.createElement('img', { id: 'img-st', src: './Pooja.jpeg' });
var introComponent = React.createElement(
    'p',
    null,
    'I am a graduate student at San Diego State University.  Before coming to SDSU, I have worked couple of years with Dassault Systemes as RnD Engineer; and with Cybage Software as Software Engineer in India. I have worked on multiple projects during my tenure in the industry with specilization as Front End Engineer. I was fascinated by the scope of front end wed development in the industry and hence was eager to learn more and gain expertise in the field through this course.'
);
var gitComponent = React.createElement(
    'button',
    { id: 'btn' },
    React.createElement(
        'a',
        { target: '_blank', href: 'https://github.com/poojavaidya0802' },
        'VIEW MY GITHUB REPO'
    )
);
ReactDOM.render(nameComponent, nameNode);
ReactDOM.render(imageComponent, imageNode);
ReactDOM.render(introComponent, introNode);
ReactDOM.render(gitComponent, gitNode);