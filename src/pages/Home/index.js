import Banner from '~/layouts/components/Banner';
import FeaturedProducts from '~/layouts/components/FeaturedProducts';
import Product from '~/layouts/components/Product';

function Home() {
    return (
        <div>
            <FeaturedProducts />
            <Banner />
            <Product />
        </div>
    );
}

export default Home;
