import React from 'react';
import { connect } from 'react-redux';
import { selectIndex } from '../actions';
import { selectTopic } from '../actions';

class TopicMenu extends React.Component {
  renderMenu() {
    return this.props.topics.map((topic, index) => {
      const className = this.props.selectedIndex === index ? 'active item' : 'item';
      return (
        <div
          className={className}
          onClick={() => {this.props.selectIndex(index);this.props.selectTopic(topic);}}
        >
          {topic.title}
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderMenu()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    topics: state.information,
    selectedIndex: state.selectedIndex
  };
};

export default connect(mapStateToProps, { selectIndex, selectTopic })(TopicMenu);
