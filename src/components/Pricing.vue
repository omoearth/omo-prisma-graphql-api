<template>
    <section class="section is-medium">
      <div class="container has-text-centered">         
        <p class="title has-text-blue is-size-1 is-size-3-mobile">
          THE SERVICE
        </p>
        <p class="subtitle is-4 is-size-5-mobile">
          and our estimated pricing during the campagin for our future mobility flatrates
        </p>
      </div>
      <br>
      <br>
      <div class="container">
       <div class="columns pricing-table is-multiline">
        
        <div v-for="product in products" class="pricing-plan column is-3">
            <figure class="image is-3by2">
            <img src="@/assets/products/3_scooter.png" alt="scooter">
          </figure>
          <div class="plan-header">{{product.name}}</div>
          <div class="plan-price"><span class="plan-price-amount"><span class="plan-price-currency">€</span>{{product.price}}</span>/day</div>
          <div v-for="feature in product.features" class="plan-items">
            <div class="plan-item">{{feature.name}}</div>
          </div>
          <div class="plan-footer">
            <button :class="'button is-fullwidth '  + product.css">{{product.button}}</button>
          </div>
        </div>
        

      </div> 
    </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            products: [
                {
                    name: 'Share Flat',
                    price: '0',
                    button: 'START NOW',
                    css: 'is-success',
                    features: [
                        { name: 'Rideshare'},
                        { name: '-'},
                        { name: '-'},
                    ]
                },
                {
                    name: 'eMini Flat',
                    price: '1',
                    estimated: '2020 Q1',
                    button: 'EST. 2020 Q1',
                    features: [
                        { name: 'Rideshare'},
                        { name: 'eMiniScooters'},
                        { name: '-'},
                    ]
                },
                {
                    name: 'ePedelec Flat',
                    price: '2',
                    button: 'EST. 2020 Q2',
                    features: [
                        { name: 'Rideshare'},
                        { name: 'eMiniScooters'},
                        { name: 'ePedelecs' },
                    ]
                },
                {
                    name: 'eScooter Flat',
                    price: '3',
                    button: 'EST. 2020 Q3',
                    features: [
                        { name: 'Rideshare'},
                        { name: 'eMiniScooters'},
                        { name: 'ePedelecs' },
                        { name: 'eScooter' },
                    ]
                },
                {
                    name: 'eScooter Flat',
                    price: '4',
                    button: 'EST. 2020 Q4',
                    features: [
                        { name: 'Rideshare'},
                        { name: 'eMiniScooters'},
                        { name: 'ePedelecs' },
                        { name: 'eScooter' },
                        { name: 'eMiniCars' },
                    ]
                },
                {
                    name: 'eScooter Flat',
                    price: '5',
                    button: 'EST. 2021 Q1',
                    features: [
                        { name: 'Rideshare'},
                        { name: 'eMiniScooters'},
                        { name: 'ePedelecs' },
                        { name: 'eScooter' },
                        { name: 'eMiniCars' },
                        { name: 'eCars' },
                    ]
                },
            ]
        }
    }
}

</script>