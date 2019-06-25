import React from 'react';
import { connect } from 'react-redux';
import { selectTopic } from '../actions';

const MenuItemDetail = ({ topic }) => {
	return (
    <div>
    <p>{topic.content}</p>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		topic: state.selectedTopic
	};
};

export default connect(mapStateToProps, { selectTopic })(MenuItemDetail);
