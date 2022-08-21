import { Box, Typography, Fade, Link } from '@mui/material'

function LandingContent() {
  return (
    <Fade appear in timeout={2500}>
    </Fade>
  )
}

export function Landing() {
  return (
    <Box
      width="100vw"
      height="400vh"
      sx={{
        '&::after, &::before': {
          boxSizing: 'border-box',
        },
        '&::after': {
          content: "''",
          width: '100vw',
          height: '400vh',
          display: 'flex',
          position: 'fixed',
          backgroundSize: 'cover',
          backgroundImage: 'url("/banner-large.jpeg")',
          minHeight: '100%',
          minWidth: '100%',
          zIndex: -1,
          left: 0,
          top: 0,
        },
      }}
    >
      <LandingContent />
    </Box>
  )
}
