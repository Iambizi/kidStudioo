import styles from '../../styles/scss/info/_info.module.scss';


interface Type{
    aboutUs: any;
}
export default function InfoBox({aboutUs}:Type){

    return(
    <>
        <div className={styles.infoContainer}>
            <p className={styles.aboutUs}>{aboutUs}</p>
        </div>
    </>
    )
}