import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TourMgt from "../../pages/TourMgt";
import PostMgt from '../../pages/PostMgt'
import { useNavigate } from 'react-router-dom'
import userManager from '../../utilities/identityOidc'
import SigninOidc from "../SigninOidc";
import Layout from "antd/es/layout/layout";

const Main = () => {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<TourMgt />} />
                <Route path="/tours" element={<TourMgt />} />
                <Route path="/posts" element={<PostMgt />} />
            </Routes>
        </Layout>
    )
}

export default Main;