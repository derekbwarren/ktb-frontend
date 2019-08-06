import React from 'react'
import styled from 'styled-components'
import { Link } from '@material-ui/core'

// styles
const Container = styled.div`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
`

const Bold = styled.div`
  font-weight: bold;
`

// const Link = styled.a`
//   text-decoration: none;
// `

const NetPromoterScore = ({ ...props }) => (
  <Container {...props}>
    Rating is calculated using the
    {' '}
    <Bold><Link href="https://www.netpromoter.com/know/" target="_blank" rel="noopener noreferrer">Net Promoter Score (NPS)</Link></Bold>
    {' '}
    framework. NPS uses the answer to a key question, using a 0-10 scale:
    How likely is it that you would recommend this manager to a friend or colleague?
    {/* <br />
    <br />
    <Bold>%Promoters - %Detractors = NPS</Bold> */}
  </Container>
)

export default NetPromoterScore
