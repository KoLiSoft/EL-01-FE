import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import EWallet from "./components/ewallet";
import ForgotPassword from "./components/ForgotPassword";
import Filter from "./components/filter";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ProfileStdInfo from "./components/ProfileStdInfo";
import TopUp from "./components/topup";
import Withdraw from "./components/withdraw";
import About from "./pages/about";
import Course from "./pages/course";
import Home from "./pages/home";
import Login from "./pages/login";
import ProfileStd from "./pages/profilestd";
import ProfileTc from "./pages/profiletc";
import Registerstd from "./pages/register-std";
import Service from "./pages/service";
import TutorResults from "./pages/TutorResults";
import TeacherTeam from "./pages/teacherteam";
import Transactions from "./pages/transactions";

function App() {
        return (
                <>
                        <BrowserRouter>
                                <Navbar />
                                <Routes>
                                        <Route element={<Home />} path="/" />
                                        <Route element={<About />} path="/about" />
                                        <Route element={<ForgotPassword />} path="/forgot-password" />
                                        <Route element={<Login />} path="/login" />
                                        <Route element={<Registerstd />} path="/register-std" />
                                        <Route element={<TeacherTeam />} path="/teacher-team" />
                                        <Route element={<Filter />} path="/filter" />
                                        <Route element={<Course />} path="/course" />
                                        <Route element={<ProfileStd />} path="/profile-std" />
                                        <Route element={<ProfileTc />} path="/profile-tc" />
                                        <Route element={<Transactions />} path="/transactions" />
                                        <Route element={<TopUp />} path="/topup" />
                                        <Route element={<Withdraw />} path="/withdraw" />
                                        <Route element={<EWallet />} path="/ewallet" />
                                        <Route element={<TutorResults />} path="/tutorResult" />
                                        <Route element={<ProfileStdInfo />} path="/profilestdinfo" />
                                        <Route element={<Service />} path="/service" />
                                        <Route element={<ProfileStd />} path="/profile-std">
                                                {/* Trang thông tin cá nhân */}
                                                <Route element={<ProfileStdInfo />} index />

                                                {/* Cụm Ví (giao dịch) dưới /profile-std/wallet */}
                                                <Route path="wallet">
                                                        <Route element={<Transactions />} index />
                                                        <Route element={<TopUp />} path="topup" />
                                                        <Route element={<Withdraw />} path="withdraw" />
                                                        <Route element={<EWallet />} path="ewallet" />
                                                </Route>
                                        </Route>

                                        {/* Redirect từ các route cũ (để không mất SEO/link cũ) */}
                                        <Route
                                                element={<Navigate replace to="/profile-std/wallet" />}
                                                path="/transactions"
                                        />
                                        <Route
                                                element={<Navigate replace to="/profile-std/wallet/topup" />}
                                                path="/topup"
                                        />
                                        <Route
                                                element={<Navigate replace to="/profile-std/wallet/withdraw" />}
                                                path="/withdraw"
                                        />
                                        <Route
                                                element={<Navigate replace to="/profile-std/wallet/ewallet" />}
                                                path="/ewallet"
                                        />

                                        {/* Fallback */}
                                        <Route element={<Navigate replace to="/" />} path="*" />
                                </Routes>
                                <Footer />
                        </BrowserRouter>
                </>
        );
}

export default App;
