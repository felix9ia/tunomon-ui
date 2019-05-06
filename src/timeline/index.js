import React from 'react';
import Moment from 'moment';
import PropTypes from 'prop-types';
import ScrollBooster from 'scrollbooster';
import { extendMoment } from 'moment-range';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import FormControl from '@material-ui/core/FormControl';
import Tooltip from '@material-ui/core/Tooltip';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './index.less';

const moment = extendMoment(Moment);
const TimelineSelect = withStyles({
  select: {
    color: 'white',
  },
  icon: {
    color: 'white',
  },
})(Select);
const SelfTooltip = withStyles({
  tooltip: {
    backgroundColor: 'white',
    color: 'rgba(0, 0, 0, 0.87)',
    fontSize: 11,
    textAlign: 'center',
  },
})(Tooltip);
class UniTimeline extends React.Component {
  static defaultProps = {
    type: 'days',
    noScenesVisible: true,
    hasTiles: () => {},
    onPeriodClick: () => {},
    onTimeLineTimeSpanChange: () => {},
    rowSelection: {},
    timeIntervalOptions: [],
    style: {},
    onBarDoubleClick: () => {},
  };

  static propTypes = {
    value: PropTypes.array.isRequired,
    source: PropTypes.array.isRequired,
    type: PropTypes.string.isRequired,
    noScenesVisible: PropTypes.bool,
    onPeriodClick: PropTypes.func,
    hasTiles: PropTypes.func,
    rowSelection: PropTypes.object,
    timeIntervalOptions: PropTypes.array,
    onTimeLineTimeSpanChange: PropTypes.func,
    style: PropTypes.object,
    onBarDoubleClick: PropTypes.func,
  };

  state = {
    renderData: [],
  };

  componentDidMount() {
    this.scrollPosition = 0;
    this.selectedIndexPosition = 0;
    this.initScrollBooster();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.value !== this.props.value ||
      prevProps.type !== this.props.type ||
      prevProps.source !== this.props.source ||
      prevProps.noScenesVisible !== this.props.noScenesVisible
    ) {
      this.generatorData(prevProps, prevState, () => {
        this.setScrollPosition(prevProps);
      });
    }
  }

  setScrollPosition = prevProps => {
    // 防止反复的设置，所以要判断
    const prevSelectedKeys = prevProps.rowSelection.selectedRowKeys;
    const currentSelectedKeys = this.props.rowSelection.selectedRowKeys;
    const isEqualKey = prevSelectedKeys === currentSelectedKeys;
    const hasSwitchTypeSelect = prevProps.type === this.props.type;
    if (isEqualKey && hasSwitchTypeSelect) {
      return;
    }

    const index = this.findSelectedIndex();
    // debugger;
    // 如果没找到，就说明有问题，找到的概率应该是100%
    if (index === -1) {
      return;
    }
    // 得到将要设定的坐标位置，一般在时间轴可显示范围的第一个
    const [nextPositionX, x] = this.getSelectedIndexPosition(index);
    const shouldSet = this.shouldSetPosition(x);
    shouldSet && this.scrollBooster.setPosition({ x: nextPositionX });
  };

  findSelectedIndex = () => {
    // 定位第一个选中的位置
    const selectedKey = this.props.rowSelection.selectedRowKeys[0];
    const index = this.state.renderData.findIndex(ele => {
      return selectedKey === ele._id;
    });
    return index;
  };

  shouldSetPosition = x => {
    // 这里使用的是下一次位置的非中间偏移量和当前的滚动条的位置进行对比
    let shouldSet = false;
    const timeLineDisplayWidth = this.getTimelineLength();
    // 从后往前点击时，虽然滚动范围没有超过时间轴的长度，但是确实已经不再显示范围内了，所以此情况特殊对待
    if (this.scrollPosition > x && this.scrollPosition - x < timeLineDisplayWidth) {
      // console.log(
      //   'timeLineDisplayWidth',
      //   timeLineDisplayWidth,
      //   'this.scrollPosition',
      //   this.scrollPosition,
      //   'x',
      //   x
      // );
      shouldSet = true;
      return shouldSet;
    }
    const gutter = Math.abs(x - this.scrollPosition);
    shouldSet = gutter > timeLineDisplayWidth;
    // console.log(
    //   'gutter',
    //   gutter,
    //   'timeLineDisplayWidth',
    //   timeLineDisplayWidth,
    //   'this.scrollPosition',
    //   this.scrollPosition,
    //   'x',
    //   x
    // );
    // console.log('shouldSet', shouldSet);
    return shouldSet;
  };

  getTimelineLength = () => document.getElementById('tl').offsetWidth;

  /**
   * 获取下一个位置
   * @param index
   * @returns {number[]} [中间偏移量, 真实位置（非偏移）]
   */
  getSelectedIndexPosition = index => {
    const { type } = this.props;
    const span = type === 'quarters' || !this.props.noScenesVisible ? 100 : 30;
    const x = span * index;
    const timeLineDisplayWidth = this.getTimelineLength();
    const halfLine = timeLineDisplayWidth / 2;
    const position = x - halfLine;
    const centerPosition = position > 0 ? position : x;
    return [centerPosition, x];
  };

  setSelectedIndexPosition = index => {
    this.selectedIndexPosition = this.getSelectedIndexPosition(index);
  };

  dateFormatter = date => {
    const dateOfMoment = moment.isMoment(date) ? date : moment(date);
    const { type } = this.props;
    const formatDay = dateOfMoment.format('D');
    const formatMonth = dateOfMoment.format('M');
    const formatQuarters = (parseInt(formatMonth, 10) + 2).toString();
    return type === 'days'
      ? formatDay
      : type === 'months'
      ? formatMonth
      : `${formatMonth}- ${formatQuarters}`;
  };

  generatorData = (prevProps, prevState, callback) => {
    const { props } = this;
    let results;
    if (props.source.length === 0 || !props.value[0] || !props.value[1]) {
      results = [];
    } else if (props.noScenesVisible) {
      const startAt = props.value[0] || new Date(); // !!!!!!这里必须指定,不指定的话为开区间,会吃光所有的内存
      const endAt = props.value[1] || new Date();
      const { hasTiles } = this.props;
      const range = moment.range(startAt, endAt);
      const spans = range.by(props.type);
      results = [...spans].map(date => {
        const label = this.dateFormatter(date);
        const [isTip, image] = hasTiles(date);
        const data = { date: date.format(), label, isTip };
        const newData = image ? Object.assign(data, image) : data;
        return newData;
      });
    } else {
      const formatedList = props.source.map(sourceItem => ({
        date: sourceItem.period,
        label: this.dateFormatter(sourceItem.period),
        isTip: true,
        ...sourceItem,
      }));
      results = this.sortDateList(formatedList);
    }
    this.setState({ renderData: results }, () => {
      this.scrollBooster.updateMetrics();
      callback && callback();
    });
  };

  sortDateList = list => {
    return list.sort((a, b) => moment(a.date).diff(moment(b.date)));
  };

  initScrollBooster = () => {
    const viewport = document.getElementById('tl');
    const content = document.getElementById('tlc');
    this.scrollBooster = new ScrollBooster({
      viewport,
      content,
      // handle,
      mode: 'x',
      bounce: false,
      emulateScroll: true,
      onUpdate: data => {
        // console.log('data.position.x: ', data.position.x);
        this.scrollPosition = data.position.x;
        viewport.scrollLeft = data.position.x;
      },
      onClick: (data, event) => {
        // console.log('event: ', event);
      },
    });
  };

  shouldSelected = item => {
    const { selectedRowKeys } = this.props.rowSelection;
    return selectedRowKeys.some(key => key === item._id);
  };

  stopPropagation = event => {
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
  };

  handlePeriodClick = (event, item, index) => {
    this.setSelectedIndexPosition(index);
    this.stopPropagation(event);
    if (item.isTip) {
      this.props.onPeriodClick(item);
    }
  };

  handleBarDoubleClick = () => {
    this.props.onBarDoubleClick();
  };

  renderPeriodDate = (item, index) => {
    const shouldSelected = this.shouldSelected(item); // TODO 这里需要思考,是否让父组件去实现
    const showTip = !item.isTip ? '' : !shouldSelected ? styles.showTip : styles.selected;
    const title = (
      <div>
        <div>{moment(item.date).format('YYYY-MM-DD')}</div>
        <div>{item.label}张</div>
      </div>
    );
    if (showTip) {
      return (
        <SelfTooltip title={title} key={item._id}>
          {this.renderItem(item, index)}
        </SelfTooltip>
      );
    }
    return this.renderItem(item, index);
  };

  renderItem = (item, index) => {
    const { props } = this;
    const shouldSelected = this.shouldSelected(item); // TODO 这里需要思考,是否让父组件去实现
    const isQuarters = this.props.type === 'quarters';
    const showTip = !item.isTip ? '' : !shouldSelected ? styles.showTip : styles.selected;
    // 如果是按照季度或者是只显示有影像的日子，则要宽度大一些
    const quarterStyle = isQuarters || !props.noScenesVisible ? styles.quarter : '';
    return (
      <div
        key={item._id}
        className={classNames(styles.period, showTip, quarterStyle)}
        onClick={event => this.handlePeriodClick(event, item, index)}
      >
        <div className={styles.label}>{item.label}</div>
      </div>
    );
  };

  renderPeriodItem = (item, index) => {
    const { props } = this;
    const currentDate = moment(item.date);
    const monthMark = currentDate.format('M');
    const yearMark = currentDate.format('YYYY');
    const oldPeriodFormat = this.oldPeriodDate ? moment(this.oldPeriodDate).format('YYYY') : '';
    const isDaysType = props.type === 'days';
    const shouldDayMarker = isDaysType && monthMark !== moment(this.oldPeriodDate).format('M');
    const shouldYearMarker = !isDaysType && oldPeriodFormat !== yearMark;
    const shouldMarker = shouldDayMarker || shouldYearMarker;
    this.oldPeriodDate = item.date; // 保留当前以和下一个进行对比
    if (shouldMarker && index !== 0) {
      return (
        <React.Fragment key={item._id}>
          <div className={styles.marker}>
            <div>
              {yearMark}
              {isDaysType && <span>.{monthMark}</span>}
            </div>
          </div>
          {this.renderPeriodDate(item, index)}
        </React.Fragment>
      );
    }
    return this.renderPeriodDate(item, index);
  };

  renderSelect = () => {
    return (
      <FormControl className={styles.timeSpanSelector}>
        <TimelineSelect
          value={this.props.type}
          onChange={e => {
            this.props.onTimeLineTimeSpanChange(e);
          }}
        >
          {this.props.timeIntervalOptions.map(spanItem => (
            <MenuItem key={spanItem.value} value={spanItem.value}>
              {spanItem.label}
            </MenuItem>
          ))}
        </TimelineSelect>
      </FormControl>
    );
  };

  renderPageBtn = isLeft => {
    return (
      <div className={styles.page}>
        <div>
          {isLeft ? (
            <NavigateBeforeIcon className={styles.leftIcon} />
          ) : (
            <NavigateNextIcon className={styles.rightIcon} />
          )}
        </div>
      </div>
    );
  };

  render() {
    const { state } = this;
    return (
      <div
        className={styles.timeline}
        style={this.props.style}
        onDoubleClick={this.handleBarDoubleClick}
      >
        <div className={styles.line} />
        {this.renderPageBtn(true)}
        <div className={styles.dates}>
          <div id="tl" className={styles.timelineDraggable}>
            <div
              id="tlc"
              className={styles.timelineContent}
              // onClick={e => {
              //   this.stopPropagation(e);
              // }}
            >
              {state.renderData.map((item, index) => this.renderPeriodItem(item, index))}
            </div>
          </div>
        </div>
        {this.renderPageBtn(false)}
        <div>{this.renderSelect()}</div>
      </div>
    );
  }
}
export default UniTimeline;
