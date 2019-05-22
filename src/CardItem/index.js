import * as React from 'react';
import moment from 'moment';
import styles from './index.module.less'
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const summaryKeys = {
  timeTitle: 'period',
  subTitle1: 'sateName',
  subTitle2: 'sateName',
  linkTitle: 'count',
  linkSubTitle: 'image',
};
const imageKeys = {
  timeTitle: 'ProduceDate',
  subTitle1: 'SateName',
  subTitle2: 'SateName',
  linkTitle: 'count',
  linkSubTitle: 'info',
};

const sateName = {
  "BJ2": "0.8米",
  "GE1": "0.41米",
  "GF1": "2米",
  "GF2": "1米",
  "GJ1": "0.5米",
  "KM2": "",
  "KM3": "123",
  "PL0": "123",
  "TH1": "2.3米",
  "WV2": "0.5米",
  "WV3": "0.31米",
  "ZY3": "2.1米",
  "KS3": "123",
  "AD0": "123",
  "LC8": "15米",
  "S2B": "10米",
  "S2A": "10米"
}


class CardItem extends React.Component {
  static defaultProps = {
    draggable: true,
    timeSpanType: 'days',
    onClick: () => {},
    onDragStart: () => {},
    onDragEnd: () => {},
    shouldSelected: () => {},
    onItemDetailClick: () => {},
    onItemMouseOver: () => {},
    onItemMouseLeave: () => {},
  };

  static propTypes = {
    draggable: PropTypes.bool,
    onClick: PropTypes.func,
    render: PropTypes.func,
    shouldSelected: PropTypes.func,
    onItemDetailClick: PropTypes.func,
    onItemMouseOver: PropTypes.func,
    onItemMouseLeave: PropTypes.func,
    timeSpanType: PropTypes.string,
  };

  stopPropagation = (e) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  handleItemDetailClick = (e, item) => {
    this.stopPropagation(e);
    this.props.onItemDetailClick(item);
  };

  handleDragEnd = () => {
    const { onDragEnd } = this.props;
    onDragEnd();
  };

  handleDragChange = (event, item) => {
    const { onDragStart } = this.props;
    event.dataTransfer.setData('TileListItem', JSON.stringify(item));
    onDragStart();
  };

  getYearMonthDateIime = (item) => {
    const typeItem = this.props.type === 'summary' ? summaryKeys : imageKeys;
    const timeTitle = moment(item[typeItem.timeTitle]);
    const month = timeTitle.month() + 1;
    const date = timeTitle.date();
    const year = timeTitle.year();
    const time = timeTitle.format('HH:mm:ss');
    return [year, month, date, time];
  };

  renderDaysTitle = (item) => {
    const [year, month, date, time] = this.getYearMonthDateIime(item);
    return (
      <React.Fragment>
        <Typography inline color="textSecondary" variant="h5">
          {/* {`${year}年`}{`${month}月`}{`${date}日`}, */}
          {`${year}-`}
          {`${month}-`}
          {`${date}`},
        </Typography>
        <Typography inline variant="caption" color="textSecondary" gutterBottom>
          {time}
        </Typography>
      </React.Fragment>
    );
  };

  renderMonths = (item) => {
    const [year, month] = this.getYearMonthDateIime(item);
    return (
      <React.Fragment>
        <Typography inline color="textSecondary" variant="h5">
          {`${year}年`}
          {`${month}月`}
        </Typography>
      </React.Fragment>
    );
  };

  renderQuarters = (item) => {
    const [year, month] = this.getYearMonthDateIime(item);
    return (
      <React.Fragment>
        <Typography inline color="textSecondary" variant="h5">
          {/* {`${year}年`}{`${month}月`}{`${date}日`}, */}
          {`${year}-`}
          {`${month}`}
          {`至${year}-`}
          {`${+month + 2}`}
        </Typography>
      </React.Fragment>
    );
  };

  renderTitle = (item) => {
    const { timeSpanType } = this.props;
    switch (timeSpanType) {
      case 'days':
        return this.renderDaysTitle(item);
      case 'months':
        return this.renderMonths(item);
      case 'quarters':
        return this.renderQuarters(item);
      default:
        return null;
    }
  };

  renderContent = (item) => {
    const typeItem = this.props.type === 'summary' ? summaryKeys : imageKeys;
    const subTitle1 = item[typeItem.subTitle1];
    const subTitle2 = sateName[subTitle1];
    const linkTitle = item[typeItem.linkTitle];
    const { linkSubTitle } = typeItem;
    return <React.Fragment>
      <CardMedia
          className={styles.itemThumb}
          image="http://placehold.it/900x900/c2b2a5/000000?text=This+is+a+picture"
          title="Live from space album cover"
        />
        <CardContent className={styles.content}>
          <div>{this.renderTitle(item)}</div>
          <Typography variant="h6" color="textSecondary">
            {subTitle1}
          </Typography>
          <Typography variant="h6" color="textSecondary">
            {subTitle2}
          </Typography>
        </CardContent>
        <CardContent className={styles.itemLink} onClick={e => this.handleItemDetailClick(e, item)}>
          <Typography inline variant="caption" color="textSecondary">
            {linkTitle}
          </Typography>
          <Typography inline variant="caption" color="textSecondary">
            {linkSubTitle}
          </Typography>
        </CardContent>
    </React.Fragment>
  }

  render() {
    const { item } = this.props;
    const shouldSelected = this.props.shouldSelected(item);
    const showSelect = shouldSelected ? styles.selectedItem : '';
    const {  draggable } = this.props;
  
    return (
      <Card
        onMouseOver={() => {
          this.props.onItemMouseOver(item);
        }}
        onMouseLeave={() => {
          this.props.onItemMouseLeave(item);
        }}
        onFocus={() => {}}
        className={classNames(styles.listItem, showSelect)}
        draggable={draggable}
        onClick={() => {
          this.props.onClick(item);
        }}
        onDragStart={e => {
          this.handleDragChange(e, item);
        }}
        onDragEnd={() => {
          this.handleDragEnd();
        }}
      >
    {this.props.render ? this.props.render(item) : this.renderContent(item) }
      </Card>
    );
  }
}
export default CardItem;
