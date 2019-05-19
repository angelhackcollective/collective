
import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { SimilarSmall } from '../../styledComponents/Similar';
import { FilterStyles, MyCardContent, GraphContent } from '../../styledComponents/Card';
import { Wrapper, SummaryRow, Percent } from './styles';


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
  console.log(info)
      return (
        <Wrapper>
          <div className="headerRow">
            <div className="subRow">
              <h4>
                {info.name}
              </h4>
              <p className="small">100 reports, 20 similar</p>
            </div>
            <SimilarSmall />
          </div>
          <div style={{display: 'flex'}}>
            <div style={{flex: '1'}}>
              <MyCardContent>
                <FilterStyles>
                  <Typography classes={{
                    root: classes.title}}>
                    <span className="title_span">TYPE</span> <span>{info.type}</span>
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
                    <span className="title_span">EFFICACY</span> <span>{info.efficacy}</span>
                  </Typography>
                </FilterStyles>
                <p className="side-effects-title">COMMONLY REPORTED SIDE-EFFECTS: </p>
                  <Typography classes={{
                    root: classes.answer}}>
                  {info.commonlyReported && info.commonlyReported.map((s, i) => {
                      return `${s}, `;
                    }
                )}
                </Typography>
              </MyCardContent>
            </div>
          <SummaryRow>
          <div className="graph">
            <h2 className="section-title">REPORTED 5+ NEG. SIDE EFFECTS</h2>
            <Percent percent="20%">
              <p>20% of Women similar to you</p>
              <div className="line">
                <div className="bg">&nbsp;</div>
              </div>
            </Percent>
            <Percent percent="66%">
              <p>66% from All Women</p>
              <div className="line">
                <div className="bg">&nbsp;</div>
              </div>
            </Percent>
          </div>
        </SummaryRow>
          </div>
        </Wrapper>
      );
  }

export default withStyles(styles)(MedicationCard);
