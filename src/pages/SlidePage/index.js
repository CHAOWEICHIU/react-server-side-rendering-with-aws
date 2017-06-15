import React from 'react'
import styled from 'styled-components'
import Slider from '../../components/Slider'
const img1800x1000Urls = [
  'https://d1f5je0f1yvok5.cloudfront.net/photo/9/g/I/9gI_QaOfoKN6fLbHL38Sew_o.jpg?v294',
  'https://d1f5je0f1yvok5.cloudfront.net/photo/6/4/7/64755sy93IP,zheZUvOA4w_o.jpg?v294',
  'https://d1f5je0f1yvok5.cloudfront.net/photo/n/F/B/nFBd9nSEsjXsNyWZPBV8WQ_o.jpg?v294',
  'https://d1f5je0f1yvok5.cloudfront.net/photo/r/,/p/r,pf7vFllQPNrPBpFRFqsw_o.jpg?v294',
]
const SlidePage = () => (<div>
  <Slider imgs={img1800x1000Urls}/>
</div>)

export default SlidePage
