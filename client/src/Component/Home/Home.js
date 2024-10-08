import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const Header = () => {
        const navigate = useNavigate();
        const handleLogout = () => {
            localStorage.removeItem('user');
            navigate('/');
        }
        return (
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '0 0 10px 10px' }}>
                <h1>My Application</h1>
                <button onClick={handleLogout} style={{ borderRadius: '50%', padding: '0.5rem' }}>Logout</button>
            </header>
        )
    }
    const Body = () => {
        const [fetchdumydata, setFetchData] = useState([]);

        useEffect(() => {
            const fetchData = async () => {
                try {
                    console.log("Fetching product data...");
                    const response = await axios.get("https://fakestoreapi.com/products/");
                    setFetchData(response.data); // Set the full data array
                    console.log(response.data);

                } catch (error) {
                    console.error("Error fetching products", error);
                }
            };

            fetchData();
        }, []);

        return (
            <div>
                {fetchdumydata.length === 0 ? (
                    <div>
                        <h1>No record data is present</h1>
                    </div>
                ) : (
                    <div style={{ display: "flex", flexWrap: "wrap", }}>
                        {fetchdumydata.map((product) => (
                            <div key={product.id} style={styles.card}>
                                <img src={product.image} alt={product.title} style={styles.image} />
                                <div style={styles.cardContent}>
                                    <h2>{product.title}</h2>
                                    <p>{product.description}</p>
                                    <p>Category: {product.category}</p>
                                    <p>Price: ${product.price}</p>
                                    <p>Rating: {product.rating.rate} (based on {product.rating.count} reviews)</p>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        )
    }
    const Foooter = () => {
        return (
            <div>
                <h2>Foooter</h2>
            </div>
        )
    }
    return (
        <div>
            <Header />
            <div style={{ paddingLeft: "120px", paddingRight: "120px" }} >
                <Body />

            </div>
            <Foooter />
        </div>
    )
}
// Inline styles for the card
const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        width: '300px',
        margin: '20px',
        padding: '16px',
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        height: '50%'

    },
    image: {
        width: '100%',
        height: '200px',
        objectFit: 'cover',
    },
    cardContent: {
        padding: '16px',
    },
};

export default Home