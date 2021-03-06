window.addEventListener('DOMContentLoaded', () => {
    function req() {
        const request = new XMLHttpRequest()
        request.open('GET','http://localhost:3000/people')
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8')
        request.send()
        request.addEventListener('load', () => {
            if (request.status === 200) {
                let data = JSON.parse(request.response)
                console.log(data)

                data.forEach(it => {
                    let card = document.createElement('div');
                    card.classList.add('card');

                    let icon;

                    if (it.sex === "male") {
                        icon = 'icons/mars.png';
                    } else {
                        icon = 'icons/female.png';
                    }

                    card.innerHTML = `
                        <img src='${it.photo}' alt=''>
                        <div class='name'>${it.name} ${it.surname}</div>
                        <div class='sex'>
                            <img src=${icon} alt='male'>
                        </div>
                        <div class='age'>${it.age}</div>
                    `;
                    document.querySelector('.app').appendChild(card)
                })
            } else {
                console.error('Что-то пошло не так')
            }
        })
        this.remove() // удалили функцию после ее выполнения, т.е. кнопку
    }

    document.querySelector('button').addEventListener('click', req, {'once': true})
})

