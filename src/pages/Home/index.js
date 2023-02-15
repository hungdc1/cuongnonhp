import FeaturedProducts from '~/layouts/components/FeaturedProducts';
import Banner from '~/layouts/components/Banner';
import Product from '~/layouts/components/Product';
import TitleProduct from '~/layouts/components/TitleProduct';

function Home() {
    return (
        <div>
            <FeaturedProducts />
            <Banner />
            <TitleProduct />
            <Product />
        </div>
    );
}

export default Home;
