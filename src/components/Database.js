import React from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import { useGlobalContext } from '../context'
import image from '../logo.svg'

export default function Database() {
  const { items, loading } = useGlobalContext()
  if (loading) {
    return <Loading/>
  }
  if (items.length < 1) {
    return (
      <h2 className='section-title'>
        no item matched your search criteria
      </h2>
    )
  }
  return (
    <section className='section'>
      <h2 className='section-title'>Items</h2>
      <div className='cocktails-center'>
      {/*   last six items  (.slice(items.length-6, items.length))    */}
        {items.map((item) => {
const {  name, id, info, glass } = item;
          return (
        <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          details
        </Link>
      </div>
    </article>)
        })}
      </div>
    </section>
  )
}
