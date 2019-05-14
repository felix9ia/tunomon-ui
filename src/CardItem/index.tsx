import * as React from 'react';
import moment from 'moment';
import styles from './index.module.less'
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
interface SateName {
  BJ2: string,
  GE1: string,
  GF1: string,
  GF2: string,
  GJ1: string,
  KM2: string,
  KM3: string,
  PL0: string,
  TH1: string,
  WV2: string,
  WV3: string,
  ZY3: string,
  KS3: string,
  AD0: string,
  LC8: string,
  S2B: string,
  S2A: string,
  [key: string]: string
}

const sateName: SateName = {
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

interface SummaryKeys {
  timeTitle:  string,
  subTitle1:  string,
  subTitle2:  string,
  linkTitle:  string,
  linkSubTitle: string,
}

interface ImageKeys {
  timeTitle:  string,
  subTitle1:  string,
  subTitle2:  string,
  linkTitle:  string,
  linkSubTitle: string,
}

const summaryKeys: SummaryKeys = {
  timeTitle: 'period',
  subTitle1: 'sateName',
  subTitle2: 'sateName',
  linkTitle: 'count',
  linkSubTitle: 'image',
};
const imageKeys: ImageKeys = {
  timeTitle: 'ProduceDate',
  subTitle1: 'SateName',
  subTitle2: 'SateName',
  linkTitle: 'count',
  linkSubTitle: 'info',
};
export interface CardItemProps {
  draggable: boolean,
  timeSpanType: string,
  type: string,
  source: Array<any>,
  item: {
    [key: string]: string
  },
  selectedRowKeys: Array<any>,
  onItemDetailClick: (item: any) => {},
  onDragStart: () => {},
  onDragEnd: () => {},
  onItemMouseOver: (item: any) => {},
  onItemMouseLeave: (item: any) => {},
  onClick: (item: any) => {},
  shouldSelected: (item: any) => boolean
}

class CardItem extends React.Component<CardItemProps, any> {
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
    shouldSelected: PropTypes.func,
    onItemDetailClick: PropTypes.func,
    onItemMouseOver: PropTypes.func,
    onItemMouseLeave: PropTypes.func,
    timeSpanType: PropTypes.string,
  };

  stopPropagation = (e: any) => {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
  };

  handleItemDetailClick = (e: any, item: any) => {
    this.stopPropagation(e);
    this.props.onItemDetailClick(item);
  };

  handleDragEnd = () => {
    const { onDragEnd } = this.props;
    onDragEnd();
  };

  handleDragChange = (event: any, item: any) => {
    const { onDragStart } = this.props;
    event.dataTransfer.setData('TileListItem', JSON.stringify(item));
    onDragStart();
  };

  getYearMonthDateIime = (item: any) => {
    const typeItem = this.props.type === 'summary' ? summaryKeys : imageKeys;
    const timeTitle = moment(item[typeItem.timeTitle]);
    const month:number = timeTitle.month() + 1;
    const date:number = timeTitle.date();
    const year:number = timeTitle.year();
    const time:string = timeTitle.format('HH:mm:ss');
    return [year, month, date, time];
  };

  renderDaysTitle = (item: any) => {
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

  renderMonths = (item: any) => {
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

  renderQuarters = (item: any) => {
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

  renderTitle = (item: any) => {
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

  render() {
    const { item } = this.props;
    const typeItem = this.props.type === 'summary' ? summaryKeys : imageKeys;
    const subTitle1 = item[typeItem.subTitle1];
    const subTitle2 = sateName[subTitle1];
    const linkTitle = item[typeItem.linkTitle];
    const { linkSubTitle } = typeItem;
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
      </Card>
    );
  }
}
export default CardItem;
