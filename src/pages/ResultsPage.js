
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FilterStyles } from '../styledComponents/Card';

const items = [ { name: 'Allesse', 
type: 'Extended Cycle', 
efforts: 'Medium', 
symptoms:  
 [ 'nausea', 
   'changes to eyesight for those using contact lenses', 
   'mood changes', 
   'mood changes', 
   'changes to eyesight for those using contact lenses', 
   'breast tenderness', 
   'nausea' ] }, 
{ name: 'Aranelle', 
type: 'Combo', 
efforts: 'Low', 
symptoms:  
 [ 'nausea', 
   'nausea', 
   'Change in corneal curvature (steepening)', 
   'intermenstrual spotting', 
   'changes to eyesight for those using contact lenses', 
   'Melasma (dark pigmentation on the face) which may persist', 
   'Reduced tolerance to carbohydrates (insulin resistance)' ] }, 
{ name: 'Aranelle', 
type: 'Combo', 
efforts: 'High', 
symptoms:  
 [ 'intermenstrual spotting', 
   'headaches and migraine', 
   'decreased libido', 
   'Reduced tolerance to carbohydrates (insulin resistance)', 
   'Change in corneal curvature (steepening)', 
   'intermenstrual spotting', 
   'missed periods' ] }, 
{ name: 'Aranelle', 
type: 'Oral', 
efforts: 'High', 
symptoms:  
 [ 'missed periods', 
   'weight gain', 
   'decreased libido', 
   'headaches and migraine', 
   'changes to eyesight for those using contact lenses', 
   'Melasma (dark pigmentation on the face) which may persist', 
   'Vaginal candidiasis' ] }, 
{ name: 'Caziant', 
type: 'Oral', 
efforts: 'Medium', 
symptoms:  
 [ 'changes to eyesight for those using contact lenses', 
   'Mental depression', 
   'Reduced tolerance to carbohydrates (insulin resistance)', 
   'headaches and migraine', 
   'Vaginal candidiasis', 
   'weight gain', 
   'Abdominal cramps and bloating' ] }];

  
  const styles = {
    card: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  };
  
  function SimpleCard (props) {
    const { classes } = props;
    return items.map(info => {
      return (
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              {info.name}
            </Typography>
            <FilterStyles>
            <Typography className={classes.pos} color="textSecondary">
              Type 
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Pill Type
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Effort
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              Efficacy
            </Typography>
            </FilterStyles>
            Commonly reported side effects:
            <Typography component="p">
              {
                info.symptoms.map((s, i) => {
                  return `${s}, `;
                }
            )}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      );
    })
  }
  
  SimpleCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SimpleCard);


// <Card>
// <Card.Content header='About Amy' />
// <Card.Content description={description} />
// <Card.Content extra>
//   <Icon name='user' />
//   4 Friends
// </Card.Content>
// </Card>
// )