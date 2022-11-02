import { useState, useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components'

const Aroundyou = () => {
    const [country, setCountry] = useState('')
    const [loading, setLoading] = useState(true);


    return (
        <div>

        </div>;
    )
} 

export default Aroundyou;
