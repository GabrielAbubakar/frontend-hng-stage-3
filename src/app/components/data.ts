import Alena from '@/public/assets/alena-shekhovtcova-mBrgjVw1Huc-unsplash.jpg'
import Ashford from '@/public/assets/ashford-marx-rCsmMoIT2R8-unsplash.jpg'
import Brian from '@/public/assets/brian-lundquist-y210hu2L3wg-unsplash.jpg'
import Michael from '@/public/assets/michael-ali-Znv-p1mjxw4-unsplash.jpg'
import Neom from '@/public/assets/neom-odwrd9IVBuk-unsplash.jpg'
import Ali from '@/public/assets/muhammad-ali-q63HxRAD_SM-unsplash.jpg'
import Silas from '@/public/assets/silas-schneider-qGdAo59sdUo-unsplash.jpg'
import Vusal from '@/public/assets/vusal-ibadzade-KfVK69unmDU-unsplash.jpg'
import Kateryna from '@/public/assets/kateryna-hliznitsova-ybkz7lsemxQ-unsplash.jpg'
import Hiki from '@/public/assets/hiki-app-lyikE99qlwQ-unsplash.jpg'
// import Melong from '@/public/assets/bao-menglong-3anBu5tt0b0-unsplash.jpg'


export const imgData = [
    {
        id: 1,
        img: Alena,
        tags: ['nature', 'people']
    },
    {
        id: 2,
        img: Ashford,
        tags: ['nature', 'people']
    },
    {
        id: 3,
        img: Kateryna,
        tags: ['animals', 'photography']
    },
    {
        id: 4,
        img: Brian,
        tags: ['people', 'gang']
    },
    {
        id: 5,
        img: Vusal,
        tags: ['people']
    },
    {
        id: 6,
        img: Ali,
        tags: ['people', 'gang']
    },
    {
        id: 7,
        img: Neom,
        tags: ['nature', 'people', 'animals']
    },
    {
        id: 8,
        img: Michael,
        tags: ['nature', 'animals']
    },
    {
        id: 9,
        img: Hiki,
        tags: ['nature', 'people']
    },
]


export interface ItemType {
    id: number,
    img: any,
    tags: string[]
}