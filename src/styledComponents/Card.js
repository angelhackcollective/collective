import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { colors } from './index';

const FilterStyles = styled.div`
  display:flex;
  justify-content: space-between;
  width: 65%;
  filterTitle {
    font-size: 12px;
    color: blue;
  }
`;

const CardContainer = styled(Card)`
  minWidth: 275;
  margin: 30px;
  display: flex;
`;

const MyCardContent = styled(CardContent)`
  width: 918px;
  height: 162px;
  h4 {
    color: ${colors.logoRed};
    font-size: 16px;
    font-weight: bold;
    border-bottom: solid 2px ${colors.lightGrey};
    margin-bottom: 8px;
    padding-bottom: 8px;
  }
  p.side-effects-title {
    font-size: 13px;
    margin: 5px;
    margin-left: 0px;
    color: ${colors.midGrey}
  }
  span {
    color: black;
  }
  span.title_span {
    margin-right: 5px;
    border-right: 1px solid ${colors.midGrey};
    padding-right: 5px;
    color: ${colors.midGrey}
  }
}
`;

const FilterTitles = styled(Typography)`
  color: red;
`;

const GraphContent = styled.div`
  border: solid 1px green;
  .similar_bar{
    border: solid 1px red;
  }
  .all_bar {
    border: solid 1px black;
  }
`;
export { FilterStyles, CardContainer, MyCardContent, FilterTitles, GraphContent };

// .Line {
//   width: 918px;
//   height: 1px;
//   border: solid 2px #fafafa;
// }

// width: 918px;
// height: 162px;
// box-shadow: 0 1px 4px 0 var(--grey-500);
// border: solid 1px #f3f3f3;
// background-color: #ffffff;