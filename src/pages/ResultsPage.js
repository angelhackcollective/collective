
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { FilterStyles, CardContainer, MyCardContent, FilterTitles, GraphContent } from '../styledComponents/Card';
import { green } from '@material-ui/core/colors';

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
    title: {
      color: '#979797',
      borderRight: "solid 1px #fafafa",
      paddingRight: "5px"
    },
    answer: {
      color: 'black',
      width: "70%",
    },
  };
  
  function SimpleCard (props) {
    const { classes } = props;
    return items.map(info => {
      return (
        <CardContainer>
          <MyCardContent>
            <h4>
              {info.name}
            </h4>
            <FilterStyles>
            <Typography classes={{
              root: classes.title}}>
              <span className="title_span">TYPE</span> <span>"insert"</span>
            </Typography>
            <Typography classes={{
              root: classes.title}}>
              <span className="title_span">PILL TYPE</span> <span>{info.type}</span>
            </Typography>
            <Typography classes={{
              root: classes.title}}>
              <span className="title_span">EFFORT</span><span>{info.efforts}</span>
            </Typography>
            <Typography classes={{
              root: classes.title}}>
              <span className="title_span">EFFICACY</span> <span>"insert"</span>
            </Typography>
            </FilterStyles>
            <p className="side-effects-title">COMMONLY REPORTED SIDE-EFFECTS: </p>
              <Typography classes={{
                root: classes.answer}}>
              {
                info.symptoms.map((s, i) => {
                  return `${s}, `;
                }
            )}
            </Typography>
          </MyCardContent>
          <GraphContent>
            similar
            <div className="similar_bar"></div>
            all
            <div className="all_bar"></div>
          </GraphContent>
        </CardContainer>
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