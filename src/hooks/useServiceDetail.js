import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useServiceDetail = () => {
    const [service, setService] = useState({});
    const {serviceId} = useParams();

    useEffect(()=>{
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    }, [serviceId])
    return [service, setService]
};

export default useServiceDetail;