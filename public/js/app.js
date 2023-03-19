
fetch('https://puzzle.mead.io/puzzle').
    then((response) => {
        response.json().
            then((data) => {
                console.log(data)
            })
    });

const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const address_v = document.querySelector('#address')
const location_v = document.querySelector('#location')
const forecast_v = document.querySelector('#forecast')
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = search.value;
    fetch(`http://localhost:3000/weather?address=${location}`).
        then((response) => {
            response.json().
                then((data) => {
                    if (data.error) {
                        console.log(data.error);
                    } else {

                        location_v.textContent = data.location;
                        address_v.textContent = data.address;
                        forecast_v.textContent = data.forecast;
                        console.log(data.forecast);
                    }
                })
        });
    console.log(location);
})