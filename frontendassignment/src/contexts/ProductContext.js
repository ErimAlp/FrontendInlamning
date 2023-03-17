import { createContext, useContext, useState } from "react";

const ProductContext = createContext()

export const useProductContext = () => {
    return useContext(ProductContext)
}

export const ProductProvider = ({ children }) => {
    const [apiUrl] = useState("https://kyh-net22.azurewebsites.net/api/products")

    const [featured, setFeatured] = useState([])
    const [latest, setLatest] = useState([])
    const [popular, setPopular] = useState([])

    const getFeaturedAsync = async () => {
        const res = await fetch(`${apiUrl}/featured`)
        setFeatured(await res.json())
    }
    const getLatestAsync = async () => {
        const res = await fetch(`${apiUrl}/new`)
        setLatest(await res.json())
    }
    const getPopularAsync = async () => {
        const res = await fetch(`${apiUrl}/popular`)
        setPopular(await res.json())
    }

    return <ProductContext.Provider value={{ featured, latest, popular, getFeaturedAsync, getLatestAsync, getPopularAsync }}>
        {children}
    </ProductContext.Provider>
}