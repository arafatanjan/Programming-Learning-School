import React from 'react';

const Product = () => {
    const [programs, setPrograms] = useState([]);
    useEffect(() => {
        fetch('program.JSON')
            .then(res => res.json())
            .then(data => console.log(data.slice(0, 4)));
    }, [])
    return (
        <div>

        </div>
    );
};

export default Product;