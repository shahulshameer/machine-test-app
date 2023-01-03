import { useEffect, useState } from 'react'
import './home.scss';
import { SlSocialLinkedin, SlSocialYoutube, SlSocialFacebook, SlSocialTwitter } from "react-icons/sl";
import {fetchCountriesData, removeCountriesData } from '../../redux/actions/countryActions';
import { useDispatch, useSelector } from 'react-redux';
import { BsList } from "react-icons/bs";

const Country = () => {
    const [activeItem, setActiveItem] = useState('all');
    const countries = useSelector((state) => state.countriesState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCountriesData(activeItem));

        return () => {
            dispatch(removeCountriesData());
        }
    }, [activeItem]);

    const handleClick = (type) => {
        setActiveItem(type)
    }

  return (
      <div className='home-wrapper'>
         <nav className='navbar'>
            <h4>
                Countries
            </h4>
            <div className='navbar-right'>
                <ul className='navbar-items'>
                    <li>
                        <span className={activeItem == 'all' ?  'active' : '' }  onClick={ () => handleClick('all')}>All</span>
                    </li>
                    <li>
                        <span className={activeItem == 'asia' ?  'active' : '' } onClick={ () => handleClick('asia')}>Asia</span>
                    </li>
                    <li>
                        <span className={activeItem == 'europe' ?  'active' : '' } onClick={ () => handleClick('europe')}>Europe</span>
                    </li>
                </ul>
                <BsList className='open-icon'/>
            </div>
        </nav>

         <div className='countries'>
            { 
                countries?.data?.map((item, index) => {
                    return (
                        <div className='country' key={index}>
                            <img src={item.flag} alt="country"/>
                            <div className='details'>
                                <h4>{item.name}</h4>
                                <span>{item.region}</span>
                            </div>
                        </div>
                    );
                })
            }
         </div>

         <div className='footer'>
            <div className='links'>
                <div className='link-items'>
                    <span>
                        <SlSocialFacebook className='item' />
                    </span>
                    <span>
                        <SlSocialTwitter  className='item' />
                    </span>
                    <span>
                        <SlSocialLinkedin className='item' />
                    </span>
                    <span>
                        <SlSocialYoutube className='item' />
                    </span>
                </div>
            </div>
            <div className='texts'>
                <p>Example@email.com</p>
                <p>Copyright © 2020 Name. All rights reserved.</p>
            </div>
         </div>
      </div>
  )
}

export default Country;