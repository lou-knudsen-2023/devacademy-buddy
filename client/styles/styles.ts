import styled from '@emotion/styled'
import { StyledProps } from '../../models/Users'
import {
  Card,
  CardContent,
  Container,
  Typography,
  Box,
} from '../styles/imports'
import { appTheme } from './theme'
import { CardMedia, Theme } from '@mui/material'
import { container } from 'webpack'
// import interface

//REUSEABLE
export const StyledBox = styled(Box)<StyledProps>(() => ({
  margin: '10px',
  padding: '10px',
}))

export const StyledContentBox = styled(Box)<StyledProps>(() => ({
  maxWidth: 550,
  position: 'relative',
}))

//REUSEABLE CARDS
export const StyledContainer = styled(Container)<StyledProps>(() => ({
  display: 'flex',
  justifyContent: 'center',
}))

export const StyledCard = styled(Card)<StyledProps>(() => ({
  maxWidth: 350,
  minHeight: 350,
  margin: 10,
  padding: 10,
  position: 'relative',
}))

export const StyledLargerCard = styled(Card)<StyledProps>(() => ({
  width: '80%',
  height: 'auto',
  margin: 10,
  padding: 50,
  position: 'relative',
}))

export const StyledCardMedia = styled(CardMedia)<StyledProps>(() => ({
  height: '100%',
  width: '100%',
}))

export const StyledCardContent = styled(CardContent)<StyledProps>(() => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  marginTop: 'auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}))

export const StyledCardLabel = styled(Typography)<StyledProps>(() => ({
  color: 'black',
  padding: 10,
  // textAlign: (props) => props.align || 'left',
}))

//HOME TYPOGRAPHY
export const StyledHeroTitle = styled(Container)<StyledProps>(() => ({
  color: 'text.primary',
}))

//TESTIMONIALS
export const StyledTestCard = styled(Container)<StyledProps>(() => ({
  backgroundColor: '#FFF8DC',
  // color: appTheme.palette.primary.main,
  mx: '50px',
  my: '50px',
}))

export const StyledTestLabel = styled(Typography)<StyledProps>(() => ({
  color: appTheme.palette.secondary.main,
}))

export const StyledTestContent = styled(Typography)<StyledProps>(() => ({
  color: appTheme.palette.secondary.main,
  padding: 10,
  fontStyle: 'italic',
}))

export const StyledFormElements = styled(Box)<StyledProps>(() => ({
  // margin: '5px',
  padding: '10px',
}))

// export const Styled  = styled(XXX)(() => ({}))
