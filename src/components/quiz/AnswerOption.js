import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { fonts, colors } from '../utils/_var'

const Wrapper = styled.div`
  li {
    list-style-type: none;
    input {
      position: absolute;
      opacity: 0;
      z-index: -1;
      & + label::before {
        border-radius: 18px;
      }
      &:checked + label {
        padding-left: 2rem;
        color: #fff;
      }
      &:checked + label::before {
        top: 0;
        width: 100%;
        height: 100%;
        background: ${colors.$colorGold};
      }
    }
    label {
      position: relative;
      padding-left: 3rem;
      line-height: 2.3rem;
      cursor: pointer;
      font-family: ${fonts.$mainFont};
      color: ${colors.$colorGold};
      &::before {
        content: '';
        position: absolute;
        top: 5px;
        left: 1rem;
        display: block;
        width: 25px;
        height: 25px;
        border: 2px solid ${colors.$colorGold};
        border-radius: 4px;
        z-index: -1;
      }
      &,
      &::before {
        transition: 0.5s all ease;
      }
    }
  }
`

//////////////////////////////////////////////////////
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import VolumeUp from '@material-ui/icons/VolumeUp';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

export default function InputSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState(5);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 1) {
      setValue(1);
    } else if (value > 10) {
      setValue(10);
    }
  };

  return (
    <div className={classes.root}>
      <Typography id="input-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <VolumeUp />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 1,
              min: 1,
              max: 10,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

//////////////////////////////////////////////////////////////////


/*const AnswerOption = props => {
  return (
    <Wrapper>
      <li>
        <input
          checked={props.answerType === props.answer}
          id={props.answerType}
          value={props.answerType}
          name={props.answerType}
          disabled={props.answer}
          onChange={props.onAnswerSelected}
          type="radio"
        />
        <label className="radioCustomLabel" htmlFor={props.answerType}>
          {props.answerContent}
        </label>
      </li>
    </Wrapper>
  )
} */

InputSlider.PropTypes = {
//AnswerOption.PropTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
}

export default AnswerOption
