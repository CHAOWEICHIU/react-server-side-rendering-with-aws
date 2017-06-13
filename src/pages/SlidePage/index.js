import React from 'react'
import styled from 'styled-components'
import Slider from '../../components/Slider'
const img1800x1000Urls = [
  'https://www.happykeys.com/uploads/new_images/thumbs/1065_2_ca3.jpg',
  'https://www.azamaraclubcruises.com/sites/default/files/heros/shanghai-china.jpg',
  'https://madebysidecar.com/assets/products/thumbs/web-grid-img-1.jpg'
]
const SlidePage = () => (<Slider imgs={img1800x1000Urls}/>)

export default SlidePage
