import "src/common/styles/css/homeStyle.css";
import "swiper/css";
import "swiper/css/pagination";
import AllCategoryContainer from "./components/AllCategory/AllCategoryContainer";

export default function Category() {
  return (
    <>
      <title>Danh mục sản phẩm</title>
      <AllCategoryContainer />
    </>
  );
}
