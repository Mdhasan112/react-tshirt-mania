import { useEffect, useState } from "react"

const useTShirt =() => {
    const [tshirts, setTShirts] = useState([]);
    
    useEffect(() => {
        fetch('tshirts.json')
        .then(res => res.json())
        .then(data => setTShirts(data))
    }, [])
    return [tshirts, setTShirts];
}
export default useTShirt;