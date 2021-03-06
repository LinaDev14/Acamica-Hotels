import React from 'react';
import moment from 'moment';
import styles from './ActiveFilters.module.css';

function ActiveFilters(props) {
    const {
        prices,
        size,
        country,
        checkIn,
        checkOut,
        filtersActives,
        checkPrice,
        headerPriceMsg,
        defaultValues
    } = props;

    let format = "dddd D MMMM YYYY";
    let startDate = "";
    let endDate = "";
    if (checkIn && checkOut && checkOut >= checkIn) {
        startDate = moment(checkIn).format(format);
        endDate = moment(checkOut).format(format);
  }

    let price = checkPrice(prices, headerPriceMsg);

  /* Sets the default text to display for the size filter */
    let hotelSize = size;
    if (hotelSize === defaultValues.SIZES) {
    hotelSize = "de cualquier tamaño";
  }

  let hotelCountry = country;
  if (hotelCountry === defaultValues.COUNTRIES) {
    hotelCountry = "todos los países";
  }

  return (
    <p className={styles.header__text} >
      {filtersActives && (
        <span>
          Hoteles {price} <br /> {hotelSize} <br /> en {hotelCountry} <br />
        </span>
      )}
      {startDate && (
        <span>
          {" "}
          
          Desde el <b>{startDate}</b> <br></br>hasta el <b>{endDate}</b>
        </span>
      )}
    </p>
  );
}


export default ActiveFilters;


