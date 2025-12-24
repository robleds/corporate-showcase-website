import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ContentSection() {
  const classes = useStyles();
  const [externalDataLoaded, setExternalDataLoaded] = React.useState(null);

  useEffect(()=>{

    fetch('https://marfrig-app-prod.s3.amazonaws.com/app_cliente/resources/html/politica-de-privacidade.html')
      .then((response) => response.text())
      .then(data => setExternalDataLoaded(data),
      (error) => {
        console.log('fetch error!', error);
      })
    ;

    return function cleanup() {
      console.log('Cleanup function fired');
    };
  },[]);

  return (
    <div className={classes.section} style={{backgroundColor:'#CCCCCC'}}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Políticas de Privacidade</h2>
          {!externalDataLoaded ? 
            <h5 className={classes.description}>Carregando...</h5>
          :
            <div dangerouslySetInnerHTML={ {__html: externalDataLoaded} } />
          }
        </GridItem>
      </GridContainer>
    </div>
  );
}
