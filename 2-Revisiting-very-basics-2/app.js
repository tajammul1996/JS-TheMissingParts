console.log('-----------Day2-----------')


const name = 'Tajammul'
const age = 23
const job = 'SE'
const city = 'Bengaluru'

//Without template strings
html = '<ul><li>Name: ' + name + '</li><li>Age: '+ age +'</li></ul>'

document.body.innerHTML = html


// With template strings

htm = `

    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${job}</li>
        <li>City: ${city}</li>
    </ul>

`

document.body.innerHTML = htm;