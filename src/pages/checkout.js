import React from 'react';
import { PaystackButton } from 'react-paystack';
import { useState } from 'react';
import styles from './checkout.module.css';
import bannerImg from 'assets/images/banner-bg2.jpg';

function checkout() {
    const publicKey = "pk_test_3eafb180dc48d849a9c80d3e7d732ef92d7eedde"
    const amount = 1000000
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
  

    const componentProps = {
        email,
        amount,
        metadata: {
          name,
          phone,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
          alert("Thanks for doing business with us! We hope to see you back soon!"),
        onClose: () => alert("Wait! You need memories. Don't go!"),
      }



    return (
<div className={styles.App}>
  <div className={styles.container}>
    <div className={styles.item}>
      <div className={styles.overlayEffect}></div>
      <img
        className={styles.itemImage}
        src= {bannerImg}
        alt="banner Image"
      />
      <div className={styles.itemDetails}>
        <p className={styles.itemDetailsTitle}>Starter Service</p>
        <p className={styles.itemDetailsAmount}>NGN{amount / 100}</p>
      </div>
    </div>
    <div className={styles.checkout}>
      <div className={styles.checkoutForm}>
        <div className={styles.checkoutField}>
          <label>Name</label>
          <input
          type='text'
          id='name'
          value={name}
          onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className={styles.checkoutField}>
          <label>Email</label>
          <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className={styles.checkoutField}>
          <label>Phone</label>
          <input
            type='tel'
            id='phone'
            value={phone}
            onChange = {(e) => setPhone( e.target.value)}
          />
        </div>
        <PaystackButton className={styles.paystackButton} {...componentProps}/>
      </div>
    </div>
  </div>
</div>

    )
}

export default checkout
