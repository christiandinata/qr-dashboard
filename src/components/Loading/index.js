import React from 'react'
import { Container } from './LoadingElements'
import {InfinitySpin} from 'react-loader-spinner'

function Loading() {
  return (
    <Container>
        <InfinitySpin 
            width='200'
            color="red"
        />
    </Container>
  )
}

export default Loading
