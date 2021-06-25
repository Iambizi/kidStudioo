import { GetStaticProps} from 'next';
import Layout from '../../components/layout';
import Meta  from '../../components/common/meta';
import React, { useEffect } from "react";
import fs from 'fs'
import path from 'path'
import styles from '../../styles/scss/common/_footer.module.scss';
import ReelInfo from '../../components/reelContent/reelInfoSection';
import ReelStills from '../../components/reelContent/reelStills';
import { useRouter } from 'next/router';

interface Type{
    reelPageData: any;
}
export default function reels({reelPageData}: Type):JSX.Element{
    const router = useRouter();
    const pathName = router.pathname;
    const comparison = pathName === "/work/reel";

    console.log(reelPageData.stills);

    useEffect(()=>{

        const bg = document.body;
        
        if(pathName === "/work/reel"){
            bg.classList.add("needsScroll");
        }else if(comparison === false){
            bg.classList.remove("needsScroll");
        }

    },[path]);
    return(
        <>
            <Meta page={reelPageData.title} />
            <Layout specificStyles={`${styles.projectPages}`}>
                <ReelInfo reels={reelPageData} />
                <ReelStills reels={reelPageData} />
            </Layout>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context)=>{

    const { params } = context;
    
    const fileToRead = path.join(process.cwd(),'./backEndData/projects/reelPage.json');
    const data = JSON.parse(await fs.readFileSync(fileToRead).toString());
    
    // using page specific data return data according to the params (specific project being selected)
    // Once I start creating api endpoints this will no longer be necessary
    
    return {
        props: {
            reelPageData: data
        }
    }
}
