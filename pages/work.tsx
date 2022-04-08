import { GetStaticProps } from 'next';
import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Meta  from '../components/common/meta';
import ProjectList from '../components/workContent/projectList';
import { connectClient } from '../components/common/utils/createClient';
import styles from '../styles/scss/common/_footer.module.scss';
import { isMobile } from 'react-device-detect';

interface Type {
    workData: any;
    commonAssets: any;
}


const Work = ({ workData, commonAssets }:Type):JSX.Element =>{
    const [bgImg, setbgImg] = useState(false);

    useEffect(() => {
        const bg = document.body;
        // isMobile ? bg.classList.add("needsScroll") : bg.classList.remove("needsScroll");
        // bg.classList.remove("needsScroll");
        // bg.classList.add("needsScroll");
      }, []);

     return(
         <>
            <Meta page={"Work"} />
            <Layout commonAssets={commonAssets} bgImg={bgImg} setbgImg={setbgImg} specificStyles={styles.workPageFooter}>
                <ProjectList bgImg={bgImg} setbgImg={setbgImg} projectList={workData}  />
            </Layout>
         </>
     )
}

export default Work;

export const getStaticProps: GetStaticProps = async ()=>{
    
    const res = await connectClient.getEntries({ content_type: 'workPage' });
    const commonRes = await connectClient.getEntries({ content_type: 'commonAssets' });
    
    if (!res) {
        return {
            notFound: true
        };
    }
    return {
        props: {
            commonAssets: commonRes.items[0].fields,
            workData: res.items
        },
        revalidate: 300
    }
}