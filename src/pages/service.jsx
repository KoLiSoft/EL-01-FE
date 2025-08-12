import { useEffect, useMemo, useState } from "react";
import Filter from "../components/filter";
import TutorResults from "./TutorResults";
import "../style/service.css";

export default function Service() {
        const [_filters, _setFilters] = useState({});
        const [results, _setResults] = useState([]); // TODO: data thật từ API

        // Ví dụ fetch API khi filters đổi (cắm API Node/Mongo của bạn vào đây)
        useEffect(() => {
                // const qs = new URLSearchParams(filters).toString();
                // fetch(`/api/tutors?${qs}`).then(r => r.json()).then(setResults);
        }, []);

        // Nếu chưa có API, để undefined → TutorResults dùng SAMPLE demo
        const items = useMemo(() => (results.length ? results : undefined), [results]);

        return (
                <div className="listing-layout">
                        {/* LEFT: bộ lọc của bạn */}
                        <div className="filter-pane">
                                <Filter />
                        </div>

                        {/* RIGHT: danh sách gia sư */}
                        <TutorResults items={items} inLayout />
                </div>
        );
}
