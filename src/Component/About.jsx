
function About() {
  return (
    <div className="container-fluid bg-light min-vh-100 py-5">
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <h2 className="text-primary">About Our Shopping Cart App</h2>
          <p className="lead">
            Welcome to our shopping cart application, your one-stop solution for a seamless online shopping experience. We aim to provide an intuitive and user-friendly interface for all your shopping needs.
          </p>
          <p>
            Our platform ensures a smooth checkout process, secure payments, and a vast selection of products. Whether youre browsing for the latest trends or daily essentials, our app is designed to make shopping easy and enjoyable.
          </p>
        </div>
        <div className="col-md-6 text-center">
          <img 
            src="https://www.identixweb.com/wp-content/uploads/2020/08/How-to-offer-the-best-shopping-cart-experience-in-your-Shopify-store.png" 
            alt="Shopping Illustration" 
            className="img-fluid rounded shadow-sm"
          />
        </div>
      </div>
      <div className="row mt-5 text-center">
        <div className="col">
          <h4 className="text-secondary">Why Choose Us?</h4>
          <ul className="list-unstyled mt-3">
            <li className="mb-2">✔ Easy-to-use interface</li>
            <li className="mb-2">✔ Secure and fast checkout</li>
            <li className="mb-2">✔ Wide range of products</li>
            <li className="mb-2">✔ 24/7 customer support</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  )
}

export default About