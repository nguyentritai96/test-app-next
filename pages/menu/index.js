import Head from 'next/head'

import basic from '../../assets/themes/basic/general.module.css'
import custom from '../../assets/themes/custom/general.module.css'

const listStyles = {
  basic,
  custom
}

const Layout = () => {
  const theme = "custom"; // basic || custom

  const styles = listStyles[theme]

  return (
    <>
      <div className={styles['wrapper']}>
        <div>You are in {theme} theme</div>
        <div className={styles['left-content']} onClick={() => alert("Click on left")}>
          <span>Left Content (Click me)</span>
        </div>
        <div className={styles['right-content']}>Right Content</div>
      </div>
      <ul>
        <li>Chỉnh sửa hình dạng, màu sắc div bằng css</li>
        <li>Chỉnh sửa vị trí div bằng css</li>
        <li>Chỉnh sửa text div bằng css</li>
        <li>Action, side effect sẽ được xử lí trong component</li>
        <li>
          Thêm mới theme bằng cách add một thư mục chứa các file css được quy
          định sẵn vào assets/theme
        </li>
      </ul>
    </>
  );
};

export default Layout;
