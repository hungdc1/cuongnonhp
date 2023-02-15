import BaiViet from '~/pages/BaiViet';
import GioiThieu from '~/pages/GioiThieu';
import Home from '~/pages/Home';
import KiemTraVanDon from '~/pages/KiemTraVanDon';
import LienHe from '~/pages/LienHe';
import Login from '~/pages/Login';
import ProductDetail from '~/pages/ProductDetail';
import Signin from '~/pages/Signin';
import ThuVienDownload from '~/pages/ThuVienDownload';
import TuyenDung from '~/pages/TuyenDung';

import Cart from '~/pages/Cart';

import RefundPolicy from '~/pages/RefundPolicy';
import ShippingAndDeliveryPolicy from '~/pages/ShippingAndDeliveryPolicy';
import CustormerInfoPrivacyPolicy from '~/pages/CustormerInfoPrivacyPolicy';
import TermsAndFormsOfPayment from '~/pages/TermsAndFormsOfPayment';
import ProductWarrantyPolicy from '~/pages/ProductWarrantyPolicy';

import UniTrend from '~/pages/UniTrend';
import NhatMinhESC from '~/pages/NhatMinhESC';

// những router ko cần đăng nhập vẫn vào được
export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/productdetail', component: ProductDetail },

    { path: '/kiemtravandon', component: KiemTraVanDon },
    { path: '/tuyendung', component: TuyenDung },
    { path: '/gioithieu', component: GioiThieu },
    { path: '/baiviet', component: BaiViet },
    { path: '/thuviendownload', component: ThuVienDownload },
    { path: '/lienhe', component: LienHe },

    { path: '/signin', component: Signin },
    { path: '/login', component: Login },

    { path: '/giohang', component: Cart },

    { path: '/refundpolicy', component: RefundPolicy },
    { path: '/shippinganddeliverypolicy', component: ShippingAndDeliveryPolicy },
    { path: '/custormerinfoprivacypolicy', component: CustormerInfoPrivacyPolicy },
    { path: '/termsandformsofpayment', component: TermsAndFormsOfPayment },
    { path: '/productwarrantypolicy', component: ProductWarrantyPolicy },
    { path: '/nhatminhESC', component: NhatMinhESC },
    { path: '/unitrend', component: UniTrend },
];

// những router cần đăng nhập mới vào được
export const privateRoutes = [];
