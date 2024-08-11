import Sidebar from "../sidebar/Sidebar";

export default function AboutUs() {
    return (
        <div className="AboutUs">
            <Sidebar />
            <div>
                <h5 className="main_heading">About Us</h5>
                <article className="care">
                    <h5>Catering to your requirements, handling your needs with care</h5>
                    <p>
                        Our store is more than just another average online retailer. We sell not only top quality
                        products, but give our customers a positive online shopping experience. Forget about struggling
                        to do everything at once: taking care of the family, running your business, walking your dog,
                        cleaning the house, doing the shopping, etc. Purchase the goods you need every day or just like
                        in a few clicks or taps, depending on the device you use to access the Internet. We work to make
                        your life more enjoyable.
                    </p>
                    <ul>
                        <li>
                            <p className="performance">14500</p>
                            <p className="branch">Products available</p>
                        </li>
                        <li>
                            <p className="performance">81%</p>
                            <p className="branch">Clients come back</p>
                        </li>
                        <li>
                            <p className="performance">10 mlns</p>
                            <p className="branch">Site members</p>
                        </li>
                    </ul>
                </article>
                <article className="events">
                    <h2>Store Events</h2>
                    <ul>
                        <li>
                            <img src="/images/mt-953_about_icon01.jpg" />
                            <p className="title">For convenience of choice</p>
                            <p className="content">
                                We think about the convenience of your choice. Our products are supplied with star
                                rating that should help hesitant buyers to take a decision. What’s more, you can search
                                our site if you know exactly what you are looking for or use a bunch of different
                                filters that will considerably save your time and efforts.
                            </p>
                        </li>
                        <li>
                            <img src="/images/mt-953_about_icon02.jpg" />
                            <p className="title">Delivery to all regions</p>
                            <p className="content">
                                We deliver our goods worldwide. No matter where you live, your order will be shipped in
                                time and delivered right to your door or to any other location you have stated. The
                                packages are handled with utmost care, so the ordered products will be handed to you
                                safe and sound, just like you expect them to be.
                            </p>
                        </li>
                        <li>
                            <img src="/images/mt-953_about_icon03.jpg" />
                            <p className="title">The highest quality of products</p>
                            <p className="content">
                                We guarantee the highest quality of the products we sell. Several decades of successful
                                operation and millions of happy customers let us feel certain about that. Besides, all
                                items we sell pass thorough quality control, so no characteristics mismatch can escape
                                the eye of our professionals.
                            </p>
                        </li>
                    </ul>
                </article>
                <article className="team">
                    <h2>OUR TEAM</h2>
                    <ul>
                        <li>
                            <img src="/images/mt-953_about_img01.jpg" />
                            <p className="staff">Robert Johnson</p>
                            <p className="content">
                                Senior salesman with 15 years of experience. He knows everything about the products he
                                offers.
                            </p>
                        </li>
                        <li>
                            <img src="/images/mt-953_about_img02.jpg" />
                            <p className="staff">Jessica Priston</p>
                            <p className="content">
                                Mega positive shop assistant always ready to help you make the right choice and charm
                                you with a smile.
                            </p>
                        </li>
                        <li>
                            <img src="/images/mt-953_about_img03.jpg" />
                            <p className="staff">Sam Kromstain</p>
                            <p className="content">
                                Wholesale manager. Contact him if you want to buy a batch of the products offered at our
                                store.
                            </p>
                        </li>
                        <li>
                            <img src="/images/mt-953_about_img04.jpg" />
                            <p className="staff">Edna Barton</p>
                            <p className="content">
                                Quality control manager. Her mission is to check the products we ship and settle quality
                                issues if any.
                            </p>
                        </li>
                    </ul>
                </article>
            </div>
        </div>
    );
}
