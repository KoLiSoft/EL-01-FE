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
                                        <Route path="/" element={<Home />} />
                                        <Route path="/about" element={<About />} />
                                        <Route path="/forgot-password" element={<ForgotPassword />} />
                                        <Route path="/login" element={<Login />} />
                                        <Route path="/register-std" element={<Registerstd />} />
                                        <Route path="/teacher-team" element={<TeacherTeam />} />
                                        <Route path="/filter" element={<Filter />} />
                                        <Route path="/course" element={<Course />} />
                                        <Route path="/profile-std" element={<ProfileStd />} />
                                        <Route path="/profile-tc" element={<ProfileTc />} />
                                        <Route path="/transactions" element={<Transactions />} />
                                        <Route path="/topup" element={<TopUp />} />
                                        <Route path="/withdraw" element={<Withdraw />} />
                                        <Route path="/ewallet" element={<EWallet />} />
                                        <Route path="/tutorResult" element={<TutorResults />} />
                                        <Route path="/profilestdinfo" element={<ProfileStdInfo />} />
                                        <Route path="/service" element={<Service />} />
                                        <Route path="/profile-std" element={<ProfileStd />}>
                                                {/* Trang thông tin cá nhân */}
                                                <Route index element={<ProfileStdInfo />} />

                                                {/* Cụm Ví (giao dịch) dưới /profile-std/wallet */}
                                                <Route path="wallet">
                                                        <Route index element={<Transactions />} />
                                                        <Route path="topup" element={<TopUp />} />
                                                        <Route path="withdraw" element={<Withdraw />} />
                                                        <Route path="ewallet" element={<EWallet />} />
                                                </Route>
                                        </Route>

                                        {/* Redirect từ các route cũ (để không mất SEO/link cũ) */}
                                        <Route
                                                path="/transactions"
                                                element={<Navigate to="/profile-std/wallet" replace />}
                                        />
                                        <Route
                                                path="/topup"
                                                element={<Navigate to="/profile-std/wallet/topup" replace />}
                                        />
                                        <Route
                                                path="/withdraw"
                                                element={<Navigate to="/profile-std/wallet/withdraw" replace />}
                                        />
                                        <Route
                                                path="/ewallet"
                                                element={<Navigate to="/profile-std/wallet/ewallet" replace />}
                                        />

                                        {/* Fallback */}
                                        <Route path="*" element={<Navigate to="/" replace />} />
                                </Routes>
                                <Footer />
                        </BrowserRouter>
                </>
        );
}

export default App;
