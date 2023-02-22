import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { fetchReservationsFromServer, removeReservations } from '../redux/reservations/reservations';
import { fetchModelsAsync } from '../redux/models/models';
import '../styles/my_reservations.css';

const MyReservations = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.current_user.user);
  useEffect(() => {
    dispatch(fetchReservationsFromServer(user.id));
    dispatch(fetchModelsAsync());
  }, [dispatch, user.id]);

  const reservations = useSelector((state) => state.reservations.reservations);
  const bikes = useSelector((state) => state.models);
  const handleDelete = (id) => {
    dispatch(removeReservations({ id, user_id: user.id }));
  };

  return (
    <div className="res-container">
      <div className="title"><h1 className="res-title">Reservaciones</h1></div>

      {reservations.length !== 0 ? reservations.map((reservation) => {
        const bike = bikes.find((bike) => bike.id === reservation.bike_id);
        return (
          <div className="card" key={reservation.id}>
            <div className="bike-info">
              <h2>
                Ciudad:
                <span>{' '}</span>
                {reservation.location}
              </h2>
              {bike
                ? (
                  <h2>
                    Modelo de Radio:
                    <span>{' '}</span>
                    {bike.model}
                  </h2>
                )
                : <p /> }
              <h2>
                Fecha de inicio:
                <span>{' '}</span>
                {moment(reservation.start_date).utc().format('YYYY-MM-DD')}
              </h2>
              <h2>
                Fecha de termino:
                <span>{' '}</span>
                {moment(reservation.end_date).utc().format('YYYY-MM-DD')}
              </h2>
            </div>
            <div className="bike-cont">
              {bike
                ? (
                  <img
                    src={bike.photo}
                    alt="model"
                    className="bike-photo"
                  />
                )
                : <p /> }
            </div>
            <div className="delete-reservation">
              <button className="delete-btn" type="button" onClick={() => handleDelete(reservation.id)}>Eliminar Reservación</button>
            </div>
          </div>
        );
      })
        : <h2 className="no-reservations">No reservations</h2>}
    </div>
  );
};

export default MyReservations;
