import React from 'react'
import ContactForm from '../forms/ContactForm'
import Breadcrumb from '../partials/Breadcrumb'
import GoogleMaps from '../partials/GoogleMaps'

const Contact = () => {
  return (
    <>
      <Breadcrumb currentPage="Contacts"/>
      <GoogleMaps />
      <ContactForm />
    </>
  )
}

export default Contact