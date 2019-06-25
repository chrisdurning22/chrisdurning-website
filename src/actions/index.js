export const selectIndex = (index) => {
return {
		type: 'INDEX_SELECTED',
		index: index
	};	
};

export const selectTopic = (topic) => {
	return {
		type: 'TOPIC_SELECTED',
		payload: topic
	};	
};


