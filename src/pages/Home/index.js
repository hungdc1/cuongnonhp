// import LinhKienDienTu from '~/components/Api';
import Banner from '~/layouts/components/Banner';
import FeaturedProducts from '~/layouts/components/FeaturedProducts';
import Product from '~/layouts/components/Product';
import TitleProduct from '~/layouts/components/TitleProduct';

function Home() {
    return (
        <div>
            {/* {LinhKienDienTu.map((prod, index) => {
                return (
                    <div>
                        <p key={index}>{prod.title}</p>
                        <p key={index}>
                            {prod.data.map((proditem, index) => {
                                return (
                                    <div>
                                        <p key={index}>{proditem.title}</p>
                                        <p key={index}>
                                            {proditem.data.map((proditem1, index) => {
                                                return (
                                                    <div>
                                                        <p key={index}>{proditem1.title}</p>
                                                        <p key={index}>{proditem1.code}</p>
                                                        <p key={index}>{proditem1.origin}</p>
                                                        <p key={index}>{proditem1.updated_at}</p>
                                                    </div>
                                                );
                                            })}
                                        </p>
                                    </div>
                                );
                            })}
                        </p>
                    </div>
                );
            })} */}
            <FeaturedProducts />
            <Banner />
            <TitleProduct />
            <Product />
            <TitleProduct />
            <Product />
            <TitleProduct />
            <Product />
            <TitleProduct />
            <Product />
        </div>
    );
}

export default Home;
