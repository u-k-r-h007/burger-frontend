import React from 'react'
import {Country,State} from 'country-state-city'

const Shipping = () => {
  return (
   <section className="shipping">
<main>
<h1>Shipping Details</h1>
<form action="">
    <div>
        <label htmlFor="">H.No.</label>
        <input type="text" placeholder="Enter House No." />
    </div>
    <div>
        <label htmlFor="">City</label>
        <input type="text" placeholder="Enter City" />
    </div>
    <div>
        <label htmlFor="">Country</label>
        <select name="" id="">
            <option value="">Country</option>
           {
            Country && Country.getAllCountries().map(i=>
                ( <option value={i.isoCode} key={i.isoCode}>{i.name}</option>)
           
            )
           }
        </select>
    </div>
    <div>
        <label htmlFor="">State</label>
        <select name="" id="">
            <option value="">Select State</option>
            {
                State && State.getStatesOfCountry("IN").map(i=>
                   ( <option value={i.isoCode} key={i.isoCodce}>{i.name}</option>)
                )
            }
        </select>
    </div>
    <div>
        <label htmlFor="">Pincode</label>
        <input type="text" placeholder="Enter Pincode" />
    </div>
    <div>
        <label htmlFor="">Mobile</label>
        <input type="tel" placeholder="Enter Phone No." />
    </div>

    <button type="submit">Confirm Order</button>
</form>
</main>
   </section>
  )
}

export default Shipping
