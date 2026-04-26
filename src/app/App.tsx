import { Router, Route, useRouter } from "./router/Router";
import { HomePage } from "./pages/HomePage";
import { ProductListingPage } from "./pages/ProductListingPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { CartPage } from "./pages/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrderSuccessPage } from "./pages/OrderSuccessPage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { ProfileOverviewPage } from "./pages/ProfileOverviewPage";
import { ProfilePersonalInfoPage } from "./pages/ProfilePersonalInfoPage";
import { ProfileAddressPage } from "./pages/ProfileAddressPage";
import { ProfileSecurityPage } from "./pages/ProfileSecurityPage";
import { SellerDashboardPage } from "./pages/SellerDashboardPage";
import { SellerProductsPage } from "./pages/SellerProductsPage";
import { SellerStorePage } from "./pages/SellerStorePage";
import { BuyerLayout } from "./layouts/BuyerLayout";
import { ProfileLayout } from "./layouts/ProfileLayout";
import { SellerLayout } from "./layouts/SellerLayout";

function AppRoutes() {
  const { currentPath } = useRouter();

  if (currentPath === "/dang-nhap") {
    return <LoginPage />;
  }

  if (currentPath === "/dang-ky") {
    return <RegisterPage />;
  }

  if (currentPath.startsWith("/nguoi-ban")) {
    return (
      <SellerLayout>
        {currentPath === "/nguoi-ban" && <SellerDashboardPage />}
        {currentPath === "/nguoi-ban/san-pham" && <SellerProductsPage />}
        {currentPath.startsWith("/nguoi-ban/cua-hang/") && <SellerStorePage />}
      </SellerLayout>
    );
  }

  return (
    <BuyerLayout>
      {currentPath === "/" && <HomePage />}
      {currentPath === "/san-pham" && <ProductListingPage />}
      {currentPath.startsWith("/san-pham/") && currentPath !== "/san-pham" && (
        <ProductDetailPage />
      )}
      {currentPath === "/gio-hang" && <CartPage />}
      {currentPath === "/thanh-toan" && <CheckoutPage />}
      {currentPath === "/don-hang-thanh-cong" && <OrderSuccessPage />}
      {currentPath.startsWith("/tai-khoan") && (
        <ProfileLayout>
          {currentPath === "/tai-khoan" && <ProfileOverviewPage />}
          {currentPath === "/tai-khoan/thong-tin" && <ProfilePersonalInfoPage />}
          {currentPath === "/tai-khoan/dia-chi" && <ProfileAddressPage />}
          {currentPath === "/tai-khoan/bao-mat" && <ProfileSecurityPage />}
        </ProfileLayout>
      )}
    </BuyerLayout>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}