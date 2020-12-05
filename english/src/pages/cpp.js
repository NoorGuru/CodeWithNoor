import React from 'react'
import Layout from '../components/layout'
import SEO from "../components/seo"

const CppPage = () => (
    <Layout>
        <SEO title="C++ Course" />
        <div>
            <h1>C++ Lectures</h1>
            <iframe title="C++ PlayList" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLaOfjyVFnPmXYSeCeSuitSai8FuM-IacQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </Layout>
)

export default CppPage