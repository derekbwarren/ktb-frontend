import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  Link, Typography,
} from '@material-ui/core'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import VisibilitySensor from 'react-visibility-sensor'

// styles
const Container = styled.div`
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
`
const CirclesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`
const Circle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
`
const StyledCircularProgressbar = styled(CircularProgressbar)`
  &&& {
    padding: 12px;
    margin-bottom: 0;
    padding-bottom: 4px;
    font-weight: bold;
  }
`

const Bold = styled.div`
  font-weight: bold;
`

const NetPromoterScore = ({ nps, ...props }) => {
  const {
    detractors, passives, promoters, respondents,
  } = nps
  return (
    <Container {...props}>
      <div>
        Rating is calculated using the
        {' '}
        <Bold><Link href="https://www.netpromoter.com/know/" target="_blank" rel="noopener noreferrer">Net Promoter Score (NPS)</Link></Bold>
        {' '}
        framework. NPS uses the answer to a key question, using a 0-10 scale:
        How likely is it that you would recommend this manager to a friend or colleague?
      </div>
      <CirclesContainer>
        <Circle>
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? promoters : 0
              return (
                <StyledCircularProgressbar
                  value={percentage}
                  minValue={0}
                  maxValue={respondents > 0 ? respondents : 1}
                  text={`${promoters}`}
                  styles={buildStyles({
                    pathColor: 'green',
                    backgroundColor: 'green',
                    textColor: 'green',
                    textSize: '28px',
                  })}
                />
              )
            }}
          </VisibilitySensor>
          <Typography variant="caption">Promoters</Typography>
        </Circle>
        <Circle>
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? passives : 0
              return (
                <StyledCircularProgressbar
                  value={percentage}
                  minValue={0}
                  maxValue={respondents > 0 ? respondents : 1}
                  text={`${passives}`}
                  styles={buildStyles({
                    pathColor: 'orange',
                    backgroundColor: 'orange',
                    textColor: 'orange',
                    textSize: '28px',
                  })}
                />
              )
            }}
          </VisibilitySensor>
          <Typography variant="caption">Passives</Typography>
        </Circle>
        <Circle>
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? detractors : 0
              return (
                <StyledCircularProgressbar
                  value={percentage}
                  minValue={0}
                  maxValue={respondents > 0 ? respondents : 1}
                  text={`${detractors}`}
                  styles={buildStyles({
                    pathColor: 'red',
                    backgroundColor: 'red',
                    textColor: 'red',
                    textSize: '28px',
                  })}
                />
              )
            }}
          </VisibilitySensor>
          <Typography variant="caption">Detractors</Typography>
        </Circle>
      </CirclesContainer>
    </Container>
  )
}

NetPromoterScore.propTypes = {
  nps: PropTypes.shape({
    detractors: PropTypes.number,
    nps: PropTypes.number,
    passives: PropTypes.number,
    promoters: PropTypes.number,
    raters: PropTypes.array,
    respondents: PropTypes.number,
  }).isRequired,
}

export default NetPromoterScore
