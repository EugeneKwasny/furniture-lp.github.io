import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <header>
            <div>
                <img 
                src="./images/Logo.png" 
                srcset="./images/Logo.png 1x, ./images/Logo@2x.png 2x, ./images/Logo@3x.png 3x"
                alt="logo" />
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About US</a>
                    </li>
                    <li>
                        <a href="#">Products</a>
                    </li>
                    <li>
                        <a href="#">Faqs</a>
                    </li>
                    <li>
                        <a href="#">Contact US</a>
                    </li>
                </ul>
            </nav>
            <div>
                <a href="#">
                    <img id="icon-search" src="./images/search.svg" />
                </a>
                <a href="#">
                    <img id="icon-cart" src="./images/basket.svg" />
                </a>
                <a href="#">
                    <img id="icon-user" src="./images/person.svg" />
                </a>
            </div>
        </header>
        <section>
            <h1>Modern Furniture For Modern Living Style</h1>
            <p> In unfeeling existence objection immediate repulsive on he in. Imprudence comparison uncommonly me he difficulty diminution resolution. Likewise proposal differed scarcely dwelling as on raillery.</p>
            <p>September few dependent extremity own continued and ten prevailed attending. Early to weeks we could. Do commanded an shameless we disposing do. Indulgence ten remarkably nor are impression out. Power is lived means oh every in we quiet.</p>
            <a href="#">Request a Quote</a>
            <a href="#">Watch a video</a>
        </section>
        <section>
            <h2>SOME OF OUR TRUSTED CLIENTS</h2>
            <ul>
                <li>
                    <a href="#">
                        <img    
                        src="./images/content/google.png"        
                        srcset="./images/content/google.png 1x, 
                                ./images/content/google@2x.png @2x, 
                                ./images/content/google@3x.png @3x" 
                        alt="google-logo" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img    
                        src="./images/content/stripe.png" 
                        srcset="./images/content/stripe.png 1x, 
                                ./images/content/stripe@2x.png @2x, 
                                ./images/content/stripe@3x.png @3x" 
                        alt="stripe-logo" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img    
                        src="./images/content/deloitte.png" 
                        srcset="./images/content/deloitte.png 1x, 
                                ./images/content/deloitte@2x.png @2x, 
                                ./images/content/deloitte@3x.png @3x" 
                        alt="deloitte-logo" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img    
                        src="./images/content/accenture.png" 
                        srcset="./images/content/accenture.png 1x, 
                                ./images/content/accenture@2x.png @2x, 
                                ./images/content/accenture@3x.png @3x" 
                        alt="accenture-logo" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img    
                        src="./images/content/IBM.png" 
                        srcset="./images/content/IBM.png 1x, 
                                ./images/content/IBM@2x.png @2x, 
                                ./images/content/IBM@3x.png @3x" 
                        alt="IBM-logo" />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img    
                        src="./images/content/samsung.png" 
                        srcset="./images/content/samsung.png 1x, 
                                ./images/content/samsung@2x.png @2x, 
                                ./images/content/samsung@3x.png @3x" 
                        alt="samsung-logo" />
                    </a>
                </li>
            </ul>
        </section>
        <section>
            <section>
                <h2>Residential Furniture</h2>
                <p>Browse Collection</p>
                <img 
                src="./images/content/residential furniture.png" 
                srcset="./images/content/residential furniture.png 1x, 
                        ./images/content/residential furniture@2x.png 2x,
                        ./images/content/residential furniture@3x.png 3x"
                alt="residential furniture" />
            </section>
            <section>
                <h2>Hospitality Furniture</h2>
                <p>Browse Collection</p>
                <img 
                src="./images/content/hospitality furniture.png" 
                srcset="./images/content/hospitality furniture.png 1x, 
                        ./images/content/hospitality furniture@2x.png 2x,
                        ./images/content/hospitality furniture@3x.png 3x"
                alt="hospitality furniture" />
            </section>
        </section>
        <section>
            <div>
                <h2>Products</h2>
                <ul>
                    <li>
                        <a href="#">Best Selling</a>
                    </li>
                    <li>
                        <a href="#">Most popular</a>
                    </li>
                </ul>
                <div>
                    <a href="#">See All <img src="./images/product-section-arrow.svg" /></a>
                </div>
            </div>
            <div>
                <ul>
                    <li>
                        <a href="#">All</a>
                    </li>
                    <li>
                        <a href="#">Bed</a>
                    </li>
                    <li>
                        <a href="#">Sofa</a>
                    </li>
                    <li>
                        <a href="#">Chair</a>
                    </li>
                    <li>
                        <a href="#">Light</a>
                    </li>
                </ul>
                <div>
                    <a href="#">Add to cart <img src="./images/basket-white.svg" /></a>
                    <h2>Ramen Stool</h2>
                    <div>
                        $65.00 
                        <span>$95.00</span>
                        <a href="#">
                            <img src="./images/content/Product Image 01.jpg"
                                srcset="./images/content/Product Image 01.jpg 1x,
                                        ./images/content/Product Image 01@2x.jpg 2x,
                                        ./images/content/Product Image 01@3x.jpg 3x"
                                alt="Product Image 01" />
                        </a>
                    </div>
                </div>
                <div>
                    <a href="#">Add to cart <img src="./images/basket-white.svg" /></a>
                    <h2>Ramen Stool</h2>
                    <div>
                        $65.00 
                        <span>$95.00</span>
                        <a href="#">

                                <img src="./images/content/Product Image 02.jpg"
                                srcset="./images/content/Product Image 02.jpg 1x,
                                        ./images/content/Product Image 02@2x.jpg 2x,
                                        ./images/content/Product Image 02@3x.jpg 3x"
                                alt="Product Image 02" />
                        </a>
                    </div>
                </div>
                <div>
                    <a href="#">Add to cart <img src="./images/basket-white.svg" /></a>
                    <h2>Ramen Stool</h2>
                    <div>
                        $65.00 
                        <span>$95.00</span>
                        <a href="#">

                                <img src="./images/content/Product Image 03.jpg"
                                srcset="./images/content/Product Image 03.jpg 1x,
                                        ./images/content/Product Image 03@2x.jpg 2x,
                                        ./images/content/Product Image 03@3x.jpg 3x"
                                alt="Product Image 02" />
                        </a>
                    </div>
                </div>
                <div>
                    <a href="#">Add to cart <img src="./images/basket-white.svg" /></a>
                    <h2>Ramen Stool</h2>
                    <div>
                        $65.00 
                        <span>$95.00</span>
                        <a href="#">

                                <img src="./images/content/Product Image 04.jpg"
                                srcset="./images/content/Product Image 04.jpg 1x,
                                        ./images/content/Product Image 04@2x.jpg 2x,
                                        ./images/content/Product Image 04@3x.jpg 3x"
                                alt="Product Image 02" />
                        </a>
                    </div>
                </div>
                <div>
                    <a href="#">Add to cart <img src="./images/basket-white.svg" /></a>
                    <h2>Ramen Stool</h2>
                    <div>
                        $65.00 
                        <span>$95.00</span>
                        <a href="#">

                                <img src="./images/content/Product Image 05.jpg"
                                srcset="./images/content/Product Image 05.jpg 1x,
                                        ./images/content/Product Image 05@2x.jpg 2x,
                                        ./images/content/Product Image 05@3x.jpg 3x"
                                alt="Product Image 02" />
                        </a>
                    </div>
                </div>
                <div>
                    <a href="#">Add to cart <img src="./images/basket-white.svg" /></a>
                    <h2>Ramen Stool</h2>
                    <div>
                        $65.00 
                        <span>$95.00</span>
                        <a href="#">
                            <img src="./images/content/Product Image 06.jpg"
                            srcset="./images/content/Product Image 06.jpg 1x,
                                    ./images/content/Product Image 06@2x.jpg 2x,
                                    ./images/content/Product Image 06@3x.jpg 3x"
                            alt="Product Image 06" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div>
                <img src="./images/content/testimonials.png" 
                    srcset="./images/content/testimonials.png 1x, 
                            ./images/content/testimonials@2x.png 2x, 
                            ./images/content/testimonials@3x.png 3x"
                    alt="testimonials" />
                <ul>
                    <li>
                        <a href="#">
                            <img src="./images/content/testimonials-1.png" 
                            srcset="./images/content/testimonials-1.png 1x, 
                                    ./images/content/testimonials-1@2x.png 2x, 
                                    ./images/content/testimonials-1@3x.png 3x"
                            alt="testimonials-1" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./images/content/testimonials-2.png" 
                            srcset="./images/content/testimonials-2.png 1x, 
                                    ./images/content/testimonials-2@2x.png 2x, 
                                    ./images/content/testimonials-2@3x.png 3x"
                            alt="testimonials-2" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./images/content/testimonials-3.png" 
                            srcset="./images/content/testimonials-3.png 1x, 
                                    ./images/content/testimonials-3@2x.png 2x, 
                                    ./images/content/testimonials-3@3x.png 3x"
                            alt="testimonials-3" />
                        </a>
                    </li>
                </ul>
            </div>
            <div>
                <h2>Let’s see what our customer’s say</h2>
                <p>Dwelling and speedily ignorant any steepest. Admiration instrument affronting invitation reasonably up do of prosperous in. Shy saw declared age debating ecstatic man. Call in so want pure rank am dear were. Remarkably to continuing in surrounded diminution on.</p>
                <div>Mike Taylor</div>
                <div>20 January 2020</div>
                <div><img src="./images/StarRating.svg" /></div>
                <ul>
                    <li>
                        <a id="left-arrow" href="#"><img src="./images/left-arrow.svg" /></a>
                    </li>
                    <li>
                        <a id="left-arrow" href="#"><img src="./images/right-arrow.svg" /></a>
                    </li>
                </ul>
            </div>
        </section>
        <section>
            <div>Mistrium Interiror</div>
            <h2>Signup to receive updates about new products</h2>
            <div>
                <input type="email" placeholder="Your business email..." />
                <input type="submit" value="Get started" />
            </div>
            <div>
                <img src="./images/content/play-video.png" srcset="./images/content/play-video.png 1x, ./images/content/play-video@2x.png 2x, ./images/content/play-video@3x.png3x" alt="play-video"/>
                <span>Watch video intro</span>
            </div>
            <img src="./images/content/newsletter.jpg" srcset="./images/content/newsletter.jpg 1x, ./images/content/newsletter@2x.jpg 2x, ./images/content/newsletter@3x.jpg 3x" alt="newsletter"/>
        </section>
        <footer>
            <div>
                <img src="./images/footer-logo.png" srcset="./images/footer-logo.png 1x, ./images/footer-logo@2x.png 2x, ./images/footer-logo@3x.png 3x" alt="footer-logo" />
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Product</a>
                    </li>
                    <li>
                        <a href="#">Service</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul>
                    <li>
                        <a href="#">
                            <img src="./images/facebook.svg" alt="facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./images/instagram.svg" alt="instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./images/youtube.svg" alt="youtube" />
                        </a>
                    </li>
                </ul>
            </nav>
            <div>Copyright &copy; 2021. Furniture LP</div>
        </footer>
    </div>
  );
}

export default App;