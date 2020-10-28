import React, { useEffect, useState } from 'react';
import {useHistory} from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import Product from './Product';
import './Search.css';
import axios from 'axios';

export default () => {
  const [{q}, dispatch] = useStateValue();
  const [data, setData] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetch = async () => {
      await axios.get("https://raw.githubusercontent.com/DanielCortild/Amazon_Products_API/master/results.json?token=AE57TKJVOD6YJKOUIJN47R27UMMU4")
          .then(res => setData(res.data))
    }
    fetch();
    console.log(data);

    let q2 = history?.location?.search?.split("=").pop()
    if(q2)  dispatch({type: 'SEARCH', q: q2});
  }, [])

  return (
    <div className="search">
      {
        data?.filter(({title}) => String(title).toLowerCase().includes(String(q).toLowerCase()))
              .map(({id, title, price, image}) => (
          <Product key={id} id={id} title={title} price={price} rating={5} image={image} />
        ))
      }
    </div>
  )
}
