import * as React from 'react';
import PropTypes from 'prop-types';

export interface CardListProps {
  multiple: boolean,
  scrollTop: number,
  source: Array<any>,
  rowKey: string,
  selectedRowKeys: Array<any>,
  onChange: (keys: Array<any>, rows: Array<any>) => {},
}

class CardList extends React.Component<CardListProps, any> {
  // static getDerivedStateFromProps = (nextProps, prevState) => {
  //   // if ('value' in nextProps) {
  //   //   return { ...prevState, value: nextProps.value };
  //   // }
  //   return null;
  // };

  static defaultProps = {
    multiple: false,
    scrollTop: 0,
    source: [],
    rowKey: '_id',
    onItemMouseLeave: () => {},
  };

  static propTypes = {
    multiple: PropTypes.bool,
    source: PropTypes.array,
    scrollTop: PropTypes.number,
    timeSpanType: PropTypes.string,
  };

  private selfNode: any;
  private isPressing: boolean;


  componentDidMount() {
    this.props.multiple && this.listenPress();
    this.scrollTo(this.props.scrollTop);
  }

  componentWillUnmount() {
    this.props.multiple && this.unListenPress();
  }

  scrollTo = (top: number) => {
    this.selfNode.scrollTo({
      top,
    });
  };

  listenPress = () => {
    document.addEventListener('keydown', this.onKeyDown);
    document.addEventListener('keyup', this.onKeyUp);
  };

  unListenPress = () => {
    document.removeEventListener('keydown', this.onKeyDown);
    document.removeEventListener('keyup', this.onKeyUp);
  };

  onKeyUp = () => {
    if (!this.isPressing) {
      return;
    }
    this.isPressing = false;
  };

  onKeyDown = () => {
    if (this.isPressing) {
      return;
    }
    this.isPressing = true;
  };

  handleItemSelect = (item: any) => {
    const {rowKey} = this.props;
    const currentId = item[rowKey];
    const current = [currentId];
    const concatedItems = this.props.selectedRowKeys.concat(current);
    const resultIds = this.isPressing ? concatedItems : current;
    const rows = this.props.source.filter((sourceItem: any) => {
      return resultIds.find(id => sourceItem[rowKey] === id);
    });
    if (this.props.onChange) {
      this.props.onChange(resultIds, rows);
    }
  };

  shouldSelected = (item: any) => {
    const { selectedRowKeys, rowKey } = this.props;
    if (!selectedRowKeys) {
      throw new Error('  未找到 selectedRowKeys 属性');
    }
    const shouldSelected = selectedRowKeys.some(key => {
      return item[rowKey] === key;
    });
    return shouldSelected;
  };

  render() {
    const {  rowKey } = this.props;
    const childrenWithProps = (sourceItem: any) => {
      return React.Children.map(this.props.children, (child: any) =>
        React.cloneElement(child, {
          item: sourceItem,
          key: sourceItem[rowKey],
          onClick: this.handleItemSelect,
          shouldSelected: this.shouldSelected,
        })
      );
    };
    return (
      <div
        ref={self => {
          this.selfNode = self;
        }}
        style={{ height: '100%', overflow: 'auto' }}
        // onKeyDown={this.onKeyDown}
        // onKeyUp={this.onKeyUp}
      >
        {this.props.source.map(sourceItem => {
          return childrenWithProps(sourceItem);
        })}
      </div>
    );
  }
}
export default CardList;
