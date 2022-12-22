import React from 'react'
import "./places.css"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getPlaces } from '../../redux/actions/actions'
import { Place } from './place/Place'

const Places = () => {
  const places = useSelector((state) => state.places)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPlaces())
  }, [])
  return (
    <div>
      {
        places?.map(((place)=>{
          return (
            <Place
            key={place.id}
            id={place.id}
            name={place.name}
            username={place.username}
            />
          )
        }))
      }
    </div>
  )
}

export default Places
