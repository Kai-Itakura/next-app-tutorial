import styles from '@/styles/Home.module.css'
import Link from 'next/link';

const ProductsList = () => {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>商品一覧</h1>
                <ul>
                    <li>
                        <Link href='/products/smartphone'>
                            スマートフォン
                        </Link>
                    </li>
                    <li>
                        <Link href='/products/pc'>
                            パソコン
                        </Link>
                    </li>
                    <li>
                        <Link href='/products/headphone'>
                            ヘッドホン
                        </Link>
                    </li>
                </ul>
            </main>
        </div>
    )
}

export default ProductsList;