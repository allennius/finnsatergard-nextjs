import Image from 'next/image'

import styles from './kossa.module.css'
import mushroom from '../../../pictures/mushroom.jpg'
import { relative } from 'path'

export default function Kossa() {

    return (
        <>
            <div className={styles.kossaContentContainer}>
                <div className={styles.kossaContent}>
                    <div className={styles.photoSquare}>
                        <Image 
                            src={mushroom.src}
                            width={200}
                            height={200}
                            style={{objectFit:'cover'}}
                            alt="avatar" 
                        />
                    </div>
                    <div className={styles.textBox}>
                    <h1>KLASSISK GRILLKORV 640G</h1>
                    <h3>ART NR: 606067</h3>
                    <p>Härligt smakrika grillkorvar med 
tunt skinn som passar perfekt på grillen på sommaren eller i 
stekpannan till hösten. Våra korvar innehåller bara svenskt kött från 
våra gårdar.</p>

                    </div>
                </div>
                <div className={styles.kossaContent}>
                    <div className={styles.photoSquare}>
                        <Image 
                            src={mushroom.src}
                            width={200}
                            height={200}
                            style={{objectFit:'cover'}}
                            alt="avatar" 
                        />
                    </div>
                    <div className={styles.textBox}>
                    <h1>KLASSISK GRILLKORV 640G</h1>
                    <h3>ART NR: 606067</h3>
                    <p>Härligt smakrika grillkorvar med 
tunt skinn som passar perfekt på grillen på sommaren eller i 
stekpannan till hösten. Våra korvar innehåller bara svenskt kött från 
våra gårdar.</p>
                    </div>
                </div>
                <div className={styles.kossaContent}>
                    {/* <div className={styles.photoSquare}>
                    </div> */}
                    <div className={styles.textBox}>
                    <h1>KLASSISK GRILLKORV 640G</h1>
                    <h3>ART NR: 606067</h3>
                    <p>Härligt smakrika grillkorvar med 
tunt skinn som passar perfekt på grillen på sommaren eller i 
stekpannan till hösten. Våra korvar innehåller bara svenskt kött från 
våra gårdar.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
