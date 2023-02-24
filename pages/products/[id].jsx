import { useRouter } from "next/router";

const Product = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log(router.query);
    return (
        <div>
            {id}
        </div>
    );
}

export default Product;