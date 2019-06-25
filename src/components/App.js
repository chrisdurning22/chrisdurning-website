import React from 'react';
import TopicMenu from './TopicMenu';
import MenuItemDetail from './MenuItemDetail';
import profile from '../images/profile.png';


const App = () => {
	return (
		<div className="ui grid">
      <div className="four wide column">
        <div className="ui vertical fluid tabular menu">
          <TopicMenu/>
        </div>
      </div>

      <div className="twelve wide stretched column">
        <div>
          <img src={profile} alt="my profiler" className="ui centered small circular image"/>
        </div>
        <div style={{textAlign: `center`}} className="ui segment">
          <MenuItemDetail/>
        </div>
        <div style={{textAlign: `center`}}>
          <a href="https://github.com/chrisdurning22?tab=repositories" className="huge ui circular github icon button">
          <i className="github icon"></i>
          </a>
          <a href="https://www.linkedin.com/in/chris-durning-9186b5169/" className="huge ui circular linkedin icon button">
          <i className="linkedin icon"></i>
          </a>
          <a href="https://www.instagram.com/durning_96/?hl=en" className="huge ui circular instagram icon button">
          <i className="instagram icon"></i>
          </a>
          <a href="https://ai.stackexchange.com/users/15356/chris" className="huge ui circular stack exchange icon button">
          <i className="stack exchange icon"></i>
          </a>
        </div>
      </div>
		</div>
	);
};

export default App;

