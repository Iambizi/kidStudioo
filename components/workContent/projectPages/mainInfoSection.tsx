import Image from 'next/image';
import styles from "../../../styles/scss/projectPages/_projectPages.module.scss";
interface Type{
    projects: any;
}
export default function mainInfoSection( {projects}: Type ):JSX.Element{

    return(
        <>
            <section className={styles.projectPageSection}>
                <h3 className={styles.projectTitle}>
                    {projects.title}
                </h3>
                <div className={styles.projectDetailsWrapper}>
                    <p className={styles.projectDetails}>
                        {projects.projectInfo}
                    </p>
                </div>
                <div className={styles.videoOverlay} style={{backgroundImage: `url(https://kidstudio.co${projects.videoCover})`}}>
                    <div className={styles.videoOverlay} style={{backgroundImage: `url(https://kidstudio.co/assets/images/play.png)`}}>
                        <Image
                        unoptimized
                        className={styles.videoCover}
                        src={ `https://kidstudio.co${projects.videoCover}` }
                        alt="Main video/image still"
                        width={256}
                        height={144}
                    />
                    {/* <img className={styles.videoCover}
                        src={ `https://kidstudio.co${projects.videoCover}` }
                        alt="Main video/image still" /> */}
                    </div> 
                </div>
                {/* <iframe className={styles.video} id="vimeo1aolzk8" src="http://player.vimeo.com/video/470421376?color=eef1f3" frameBorder="0" allowFullScreen></iframe> */}
            </section>
        </>
    )
}