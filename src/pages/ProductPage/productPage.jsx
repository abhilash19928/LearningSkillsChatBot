import ProductCard from "../../components/ProductCard/productCard";


export default function ProductsPage() {
    const products = [
        {
            id: 1,
            img: "/src/assets/p1.jpg",
            title: "Wireless Headphones",
            price: 2999,
            rating: 4,
        },
        {
            id: 2,
            img: "/src/assets/p2.jpg",
            title: "Smart Watch Series X",
            price: 4499,
            rating: 5,
        },
        {
            id: 3,
            img: "/src/assets/p3.jpg",
            title: "Bluetooth Speaker",
            price: 1999,
            rating: 4,
        },
        {
            id: 4,
            img: "/src/assets/p4.jpg",
            title: "Gaming Mouse RGB",
            price: 1299,
            rating: 3,
        },
    ];

    return (
        <div className="container py-4">
            <h3 className="fw-bold mb-3">Products</h3>

            <div className="row g-4">
                {products.map((p, index) => (
                    <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <ProductCard
                            productItem={p}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}