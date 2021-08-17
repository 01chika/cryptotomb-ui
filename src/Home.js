
const Home = () => {

    return ( 
        <section className="home">
            <div class="hero-section">
                <div class="hero-1">
                    <h1 class="hero-title">
                        Immortalize your Identity on the Ethereum Blockchain forever<span className="dot">.</span>
                    </h1>
                    <p class="hero-paragraph">
                        lorem ipsum Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, veniam unde? Nostrum sint ipsum aspernatur doloremque perferendis suscipit laborum optio delectus ab repudiandae alias natus expedita quod, ut quos quo.
                    </p>
                    <div className="claim-a-plot">Claim a Plot</div>

                </div>
                <div class="hero-illustration">
                    <img src={"/eth-logo-black.png"} alt="ddd"/>
                </div>
            </div>
        </section>
     );
}
 
export default Home;