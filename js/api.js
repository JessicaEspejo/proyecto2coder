
    document.getElementById('apiBTN').addEventListener('click', cargarRES);

    function cargarRES(event) {
        event.preventDefault()
        console.log('llegue hasta qui----');
        fetch('https://api.apilayer.com/exchangerates_data/live?base=USD&symbols=EUR,GBP', {
            method: 'GET',
            headers: {
                'apikey': 'ED2YkwC4fj2AIfOo19W2f4cE6p2vhcZx'
            },
        })
            .then(function (response) {
                console.log('response =', response);
                return response.json();
            })
            .then(function (data) {
                console.log('data = ', data.quotes.USDCOP.end_rate);

                let html = `
                <h1> Dólar Compra / Venta:  </h1>
                 <h2 class="subtitle"> 
                    ${data}  
                </h2>
                <br></br>
                <h6> ¿Necesitas saber otras cotizaciones?<a href="https://www.dolarsi.com/"  target="_blank" class="subtitle"> 
                     Hace click acá.
                </a></h6>  
                `

                document.getElementById('Resulta').innerHTML = html;
            })
            .catch(function (err) {
               console.log('error de api',err);
            });

    }

