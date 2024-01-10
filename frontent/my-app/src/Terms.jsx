import React from 'react'
import { Link } from 'react-router-dom'

function Terms() {
  return (
    <div style={{backgroundColor:'lightgreen'}}>
        <nav style={{backgroundColor:'#128650'}}>

            <br /><br /><br />
        </nav>
      <div style={{padding:'50px'}}>
        <div >
         <h1 style={{fontWeight:'bold'}}>Terms & Conditions</h1><br />
        </div>
        <div style={{fontWeight:'bold',marginLeft:'20px'}}>
          <li>The customer must be competent to enter into a contract as per the Indian Contract Act, 1872.
           <li>The online booking system facility provided by VW website will facilitate the customer in faster booking of the car with the dealerships as mentioned on the website subject to terms and conditions mentioned here.</li>
          <li>A customer can book for more than 1 car and the booking process would be one car per booking.</li>
          <li>Post submission of details on the website, the customer will get preferred dealership details on the registered e-mail id. A customer representative from the preferred dealership will connect with the customer regarding availability of selected variant, payment options for making the payment via online booking, Acceptance of Payment towards Booking.</li>
          <li></li>For booking online, the customer is required to pay the specified booking amount as communicated by the preferred dealer. The payment of booking amount is to be made online by Credit Card/Debit Card, netbanking through NEFT/RTGS/IMPS, UPI payment and mobile wallet options payable in favour of the respective dealership.</li>
          <li>Acceptance of online booking payment is by the dealership through online payment only.</li>
            <li>VW is only a facilitator in the transaction and has suitably made the website available for online booking of car and transfer of amount from customer account to the dealership. In the event, the customer suffers any kind of loss or damage arising out of the payment transaction made by the customer through its website, VW shall not be responsible for the same and the customer will have recourse to claim damages only from the dealership, if any.</li>
            <li>The transactions, booking amount and all other commercial terms such as balance payment, delivery of car etc., shall be as per the bipartite contractual obligations agreed between the customer and the concerned dealership only.</li><br />

Please note that these terms and conditions are specific to Volkswagen India and may differ for other car manufacturers or regions.
        </div>
        </div>
        <Link to={'/'}><center><button  type="button" class="btn btn-light"><span style={{color:'#128650',fontWeight:'bold'}}>BACK</span></button></center></Link><br /><br />
        <footer style={{backgroundColor:'#128650'}}>
          <br /><br /><br /><br />
        </footer>
    </div>
  )
}

export default Terms