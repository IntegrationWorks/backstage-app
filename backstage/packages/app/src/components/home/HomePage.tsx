// import React from 'react';
// import { Grid, Typography, Box, Button, Card, CardContent, makeStyles } from '@material-ui/core';
// import GitHubIcon from '@material-ui/icons/GitHub';
// import CloudIcon from '@material-ui/icons/Cloud';
// import FontDownloadIcon from '@material-ui/icons/FontDownload';
// import BuildIcon from '@material-ui/icons/Build';
// import ListIcon from '@material-ui/icons/List';
// import MenuBookIcon from '@material-ui/icons/MenuBook';
// import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
// import CreateIcon from '@material-ui/icons/Create';
// import ExtensionIcon from '@material-ui/icons/Extension';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     textAlign: 'center',
//     height: '100vh',
//     //marginTop: theme.spacing(8),
//   },
//   greeting: {
//     backgroundColor: '#FD7B23',
//     color: theme.palette.primary.contrastText,
//     padding: theme.spacing(2),
//     //borderRadius: theme.shape.borderRadius,
//     textAlign: 'center',
//     marginBottom: theme.spacing(4),
//   },
//   welcomeBlock: {
//     width: '100%',
//     height: '11%',
//     padding: theme.spacing(2),
//     marginBottom: theme.spacing(4),
//     borderRadius: 0
//   },
//   button: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: theme.spacing(2),
//     width: '200px',
//     height: '150px',
//     color: '#FFFFFF'
//   },
//   toolbox: {
//     padding: theme.spacing(2),
//   },
//   iconButton: {
//     margin: theme.spacing(1),
//     fontSize: '2rem',
//   },
//   h2: {
//     color: '#FFFFFF',
//     fontWeight: 600,
//     marginBottom: theme.spacing(4),
//   },
//   description: {
//     fontSize: '1.2rem',
//     marginBottom: theme.spacing(6),
//     color: '#FFFFFF',
//   },
//   buttonContainer: {
//     marginTop: theme.spacing(4),
//   },
//   buttonGrid: {
//     display: 'flex',
//     justifyContent: 'center',
//     margin: theme.spacing(2),
//   },
//   icon: {
//     fontSize: '3rem',
//     marginBottom: theme.spacing(1),
//     color: '#FFFFFF',
//     width: '500px',
//     height: '250px',
//   },
// }));
// const HalfBoxLayout = () => {
//   return (
//     <Box
//       sx={{
//         height: '50vh', // Full viewport height
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',

//       }}
//     >
//       {/* Top half box */}
//       < Box
//         // alignItems="center"
//         // flexDirection="column"
//         // justifyContent='center'
//         sx={{
//           flex: 1,
//           color: 'lightblue',
//           width: '50%',
//           display: 'flex',

//           alignItems: 'center'
//           // Example color
//         }}
//       >
//         <Typography variant="body1" paragraph>
//           Backstage is a tool used for efficient repository creation through high quality, standardized templates.
//           Creating a repository using a template in Backstage is a streamlined process
//           that simplifies the setup of new projects. <br /><br />

//           To create a repo, navigate to the "Create" section in the Backstage
//           portal. Then select the appropriate pre-configured template that fits your project needs. <br /><br />

//           You will then be prompted to fill out a form with specific details like the project name,
//           repository location, and any necessary configuration options. <br /><br />

//           Once the form is submitted, Backstage automatically generates the new repository by cloning
//           the selected template and you're ready to go.
//         </Typography>
//       </Box >

//       {/* Lower half split into two */}
//       < Box
//         sx={{
//           flex: 2,
//           display: 'flex',
//           width: "66%",


//         }}
//       >
//         <Box
//           sx={{
//             flex: 1,
//             bgcolor: 'lightgreen',
//             display: 'flex',
//             flexDirection: 'row',
//             alignItems: 'center',// Example color
//           }}
//         >
//           {/* Bottom Left */}
//           <Box sx={{
//             flex: 1,
//             display: 'flex',

//             bgcolor: 'purple',
//             alignItems: 'center',
//             flexDirection: 'column',
//             justifyContent: 'center'

//           }}>
//             <Box>
//               helo

//             </Box>
//             <Box>
//               hi
//             </Box>

//           </Box>

//           <Box
//             sx={{
//               flex: 1,
//               display: 'flex',

//               bgcolor: 'lightblue',
//               alignItems: 'center',
//               flexDirection: 'column',
//               justifyContent: 'center'

//             }}
//           >
//             <Box>
//               helo

//             </Box>
//             <Box>
//               hi
//             </Box>


//           </Box>
//           <Box
//             sx={{
//               flex: 1,
//               display: 'flex',

//               bgcolor: 'purple',
//               alignItems: 'center',
//               flexDirection: 'column',
//               justifyContent: 'center'
//             }}
//           >
//             <Box>
//               helo

//             </Box>
//             <Box>
//               hi
//             </Box>



//           </Box>
//         </Box>
//         <Box
//           sx={{


//             border: "1px blue",
//             flex: 1,
//             bgcolor: 'lightcoral', // Example color
//           }}
//         >
//           Bottom Right
//         </Box>
//       </Box >
//     </Box >
//   );
// };

// export const HomePage = () => {
//   const classes = useStyles();

//   return (
//     <Box className={classes.root}>

//       <Card className={classes.welcomeBlock}>
//         <CardContent>
//           <Typography variant="h2" gutterBottom>Welcome to Backstage!</Typography>
//         </CardContent>
//       </Card>

//       {/* <Grid container spacing={4} className={classes.buttonGrid}>
//         <Typography variant="h5" gutterBottom>How To</Typography>

//         <Typography variant="body1" paragraph>
//           Backstage is a tool used for efficient repository creation through high quality, standardized templates.
//           Creating a repository using a template in Backstage is a streamlined process
//           that simplifies the setup of new projects.
//         </Typography>

//         <Typography variant="body1" paragraph>
//           To create a repo, navigate to the "Create" section in the Backstage
//           portal. Then select the appropriate pre-configured template that fits your project needs.
//         </Typography>

//         <Typography variant="body1" paragraph>
//           You will then be prompted to fill out a form with specific details like the project name,
//           repository location, and any necessary configuration options.
//         </Typography>

//         <Typography variant="body1" paragraph>
//           Once the form is submitted, Backstage automatically generates the new repository by cloning
//           the selected template and you're ready to go.
//         </Typography>
//       </Grid>
//       <Grid container spacing={4} className={classes.buttonGrid}>
//           <Grid item>
//             <Button
//               className={classes.button}
//               variant="contained"
//               color="primary"
//               href="/catalog"
//             >
//               <MenuBookIcon className={classes.icon} />
//               Catalog
//             </Button>
//           </Grid>
//           <Grid item>
//             <Button
//               className={classes.button}
//               variant="contained"
//               color="primary"
//               href="/api-docs"
//             >
//               <ExtensionIcon className={classes.icon} />
//                APIs
//             </Button>
//           </Grid>
//           <Grid item>
//             <Button
//               className={classes.button}
//               variant="contained"
//               color="primary"
//               href="/docs"
//             >
//               <LibraryBooksIcon className={classes.icon} />
//                Documentation
//             </Button>
//           </Grid>
//           <Grid item>
//             <Button
//               className={classes.button}
//               variant="contained"
//               color="primary"
//               href="/create"
//             >
//               <CreateIcon className={classes.icon} />
//                Create
//             </Button>
//           </Grid>
//         </Grid>
//       <Grid container spacing={4} className={classes.buttonGrid}>
//         <Card className={classes.toolbox}>
//           <CardContent>
//             <Typography variant="h5" gutterBottom>Developer Toolbox</Typography>
//             <Grid container justify="center">
//               <Grid item>
//                 <Button href="https://github.com/IntegrationWorks" className={classes.iconButton}>
//                   <GitHubIcon fontSize="large" />
//                   <Typography> GitHub</Typography>
//                 </Button>
//               </Grid>
//               <Grid item>
//                 <Button href="https://aws.amazon.com/" className={classes.iconButton}>
//                   <CloudIcon fontSize="large" />
//                   <Typography> AWS</Typography>
//                 </Button>
//               </Grid>
//               <Grid item>
//                 <Button href="https://portal.azure.com/" className={classes.iconButton}>
//                   <FontDownloadIcon fontSize="large" />
//                   <Typography> Azure</Typography>
//                 </Button>
//               </Grid>
//             </Grid>
//           </CardContent>
//         </Card>
//         <Grid item>
//           <Card className={classes.toolbox}>
//             <CardContent>
//               <Typography variant="h5" gutterBottom>Template Sources</Typography>
//               <Grid container justify="center">
//                 <Grid item>
//                   <Button href="https://github.com/IntegrationWorks/backstage-templates" className={classes.iconButton}>
//                     <BuildIcon fontSize="large" />
//                     <Typography> Backstage</Typography>
//                   </Button>
//                 </Grid>
//                 <Grid item>
//                   <Button href="https://github.com/IntegrationWorks/github-actions-templates" className={classes.iconButton}>
//                     <ListIcon fontSize="large" />
//                     <Typography> GitHub Actions</Typography>
//                   </Button>
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid> */}
//       <HalfBoxLayout />
//     </Box>
//   );
// };

import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  TextField,
  Box,
  Link,
  ThemeProvider,
  createTheme,
  CssBaseline
} from '@mui/material';
import {
  Book as BookIcon,
  Code as CodeIcon,
  ViewQuilt as ViewQuiltIcon,
  Cloud as CloudIcon,
  GitHub as GitHubIcon,
  Bolt as BoltIcon
} from '@mui/icons-material';

import { lightTheme, darkTheme } from '../../theme/myTheme'
import { ListItemSecondaryAction } from '@material-ui/core';
import { UnifiedThemeProvider } from '@backstage/theme';

// Create a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#FD7B23',
      light: '#FECBA7',
      dark: '#b75c1a',
    },
    secondary: {
      main: '#E7E9E9',
      light: '#E7E9E9',
      dark: '#D8DAD8',
    },
    background: {
      default: '#E7E9E9',
    },
  },
});

export const HomePage = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>


        <Box component="main" sx={{ flexGrow: 1 }}>
          <Box sx={{ bgcolor: 'primary.light', py: 8 }}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="primary.dark"
                gutterBottom
              >
                Welcome to Fusion5 Developer Portal
              </Typography>
              <Typography variant="h5" align="center" color="primary.dark" paragraph>
                Explore our catalog, templates and tools to kickstart or manage your application development.
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <TextField
                      variant="outlined"
                      placeholder="Search documentation..."
                      InputProps={{
                        endAdornment: (
                          <Button variant="contained" color="primary">
                            Search
                          </Button>
                        ),
                      }}
                      fullWidth
                    />
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Box>

          <Box sx={{ bgcolor: 'secondary.dark', py: 8 }}>
            <Container maxWidth="md">
              <Grid container spacing={4}>
                {[
                  { icon: <BookIcon />, title: 'Documentation', description: 'Comprehensive guides and tutorials to get you started.' },
                  { icon: <CodeIcon />, title: 'Getting Started', description: 'A comprehensive guide to creating your first template.' },
                  { icon: <ViewQuiltIcon />, title: 'SDKs & Tools', description: 'Libraries and tools to accelerate your development.' },
                ].map((item, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <Card sx={{
                      backgroundColor: 'secondary.light'
                    }}>
                      < CardContent >
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                          {React.cloneElement(item.icon, { fontSize: 'large', sx: { color: '#FD7B23' } })}
                        </Box>
                        <Typography gutterBottom variant="h5" component="h2" align="center" color="primary.dark">
                          {item.title}
                        </Typography>
                        <Typography align="center" color="primary.dark">
                          {item.description}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                          <Link href="#" color="primary">
                            Learn More
                          </Link>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>

          <Box sx={{ bgcolor: 'secondary.dark', py: 8 }}>
            <Container maxWidth="md">
              <Typography
                component="h2"
                variant="h3"
                align="center"
                color="primary.dark"
                gutterBottom
              >
                Quick Links
              </Typography>
              <Typography variant="h6" align="center" color="primary.dark" paragraph>
                Seamlessly integrate our services with popular cloud platforms and version control systems.
              </Typography>
              <Grid container spacing={4} justifyContent="center">
                {[
                  { icon: <CloudIcon />, title: 'Azure Integration', description: 'Deploy and manage with Microsoft Azure.' },
                  { icon: <CloudIcon />, title: 'AWS Integration', description: 'Leverage Amazon Web Services for scaling.' },
                  { icon: <GitHubIcon />, title: 'GitHub Integration', description: 'Streamline your development workflow.' },
                ].map((integration, index) => (
                  <Grid item key={index} xs={12} sm={6} md={4}>
                    <Card sx={{
                      backgroundColor: 'secondary.light'
                    }}>
                      < CardContent >
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                          {React.cloneElement(integration.icon, { fontSize: 'large' })}
                        </Box>
                        <Typography gutterBottom variant="h5" component="h2" align="center" color="text.light">
                          {integration.title}
                        </Typography>
                        <Typography align="center" color="text.secondary">
                          {integration.description}
                        </Typography>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                          <Link href="#" color="primary">
                            Learn More
                          </Link>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </Box>
      </Box >
    </ThemeProvider >
  )
}

