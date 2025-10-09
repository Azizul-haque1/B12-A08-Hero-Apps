import axios from "axios"
import { useEffect, useState } from "react"

const useApps = () => {
    const [appsData, setAppsData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get('../allAppData.json')
            .then(data => setAppsData(data.data))
            .catch(err => setError(err))
            .finally(() => setLoading(false))

    }, [])

    return { appsData, error, loading }

}


export default useApps;