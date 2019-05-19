
import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { SimilarSmall } from '../../styledComponents/Similar';
import { FilterStyles, MyCardContent, GraphContent } from '../../styledComponents/Card';

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

const MedicationCard = ({info, classes}) => {
      return (
        <Fragment>
          <MyCardContent>
            <h4>
              {info.name}
            </h4>
            <SimilarSmall />
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
        </Fragment>
      );
  }

export default withStyles(styles)(MedicationCard);
