import "src/common/styles/css/global.css";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import LayoutApp from "./layoutApp";

export default function LayoutWeb({ children }: { children: React.ReactNode }) {
  return <LayoutApp>{children}</LayoutApp>;
}
