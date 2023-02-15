import classNames from 'classnames/bind';
import FooterMenu from '~/components/FooterMenu';

import styles from './FooterList.module.scss';

const cx = classNames.bind(styles);

const MENU_LISTS = [
    {
        title: 'Linh kiện điện tử',
        data: [
            'Điện trở',
            'Chiết áp - Biến trở',
            'Tụ điện',
            'Cuộn cảm',
            'Diode - Chỉnh lưu cầu',
            'Thạch anh - Oscilator',
            'Opto - Cách ly quang',
            'Triac - Diac - Thyristor',
            'Trans - FETs - IGBT',
        ],
    },
    {
        title: 'PHỤ KIỆN ĐIỆN TỬ',
        data: [
            'Công tắc - Switch',
            'Nút nhấn',
            'Relay - Rơ le',
            'Cầu chì',
            'Nam châm - Công tắc từ',
            'Loa - Còi - Mic',
            'Tản nhiệt các loại',
        ],
    },
    {
        title: 'KẾT NỐI',
        data: [
            'Cầu đấu - Terminal',
            'Jump - Header',
            'Jack - cổng kết nối',
            'Dây nguồn - Dây tín hiệu',
            'Cáp FFC - FPC',
            'Cọc - Vít - Kẹp',
            'Đế IC - PCB chuyển đổi',
            'USB - Thẻ nhớ',
        ],
    },
    {
        title: 'VĐK - IC CHỨC NĂNG',
        data: ['Vi điều khiển', 'IC chức năng', 'IC nguồn', 'IC - Module tích hợp', 'Kho linh kiện tháo máy'],
    },

    {
        title: 'LED - LCD - ĐÈN BÁO',
        data: ['LED', 'LED 7 thanh', 'LED siêu sáng', 'LCD - Graphic - TFT - HMI', 'Đèn báo nguồn'],
    },

    {
        title: 'TỰ LÀM MẠCH',
        data: ['Vật tư làm mạch', 'DIY - Mạch tự lắp', 'Robot - động cơ - Mô hình', 'Mica tấm'],
    },
    {
        title: 'THIẾT BỊ - PHỤ TRỢ',
        data: ['Tool - Dụng cụ - Thiết bị', 'Gen - Băng dính - Keo - Silicon', 'Chai - Lọ - Hộp'],
    },
    {
        title: 'ĐIỆN TỬ ỨNG DỤNG',
        data: ['Linh kiện ứng dụng', 'Động cơ - Quạt', 'Điều khiển các loại', 'Smart home'],
    },
    {
        title: 'MODULE - CẢM BIẾN',
        data: ['Module', 'KIT phát triển', 'Cảm biến', 'Mạch nạp'],
    },
    {
        title: 'PIN - NGUỒN',
        data: ['PIN - Phụ kiện PIN', 'Nguồn - Adapter'],
    },
];

function FooterList() {
    return (
        <div className={cx('container')}>
            <div className={cx('content')}>
                <h2 className={cx('title')}>Danh mục</h2>
                <div className={cx('menu')}>
                    <div className={cx('list')}>
                        <FooterMenu items={MENU_LISTS} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterList;
