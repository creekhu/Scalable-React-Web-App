/**
*
* LinkForm
*
*/

import React from 'react';

import styles from './styles.css';
import classNames from 'classnames';
import TextInput from '../TextInput';

class LinkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
  	addLink: React.PropTypes.func.isRequired,
    topicName: React.PropTypes.string.isRequired,
    addLinkCancelled: React.PropTypes.func.isRequired,
  }

  state = {
  	urlError: '',
  	descriptionError: '',
  };

  onAdd = () => {
  	const url = this.url.value();
  	const description = this.description.value();
  	let urlError = null;
  	let descriptionError = null;

  	if (!url) {
  		urlError = 'Please provide a valid URL';
  	}

  	if (!description) {
  		descriptionError = 'Please provide a valid description';
  	}

  	if (urlError || descriptionError) {
  		this.setState({
  			urlError,
  			descriptionError,
  		});

  		return;
  	}

  	this.props.addLink({
  		url,
  		description,
      topicName: this.props.topicName,
  	});
  }

  render() {
    return (
		<div className={styles.overlay}>
		      <div className={styles.linkForm}>
			      <div className={styles.heading}>
			      	Add a link
			      </div>

		        <TextInput 
		        	placeholder="URL"
		        	className={styles.input}
		        	errorText={this.state.urlError} 
		        	ref={(f) => (this.url = f)} />

		        <TextInput 
		        	placeholder="Description"
		        	className={styles.input}
		        	errorText={this.state.descriptionError} 
		        	ref={(f) => (this.description = f)} />

		        <div className={styles.actionContainer}>
		          <div 
		            className={styles.button}
		            onClick={this.props.addLinkCancelled}
		            >
		            cancel
		          </div>
		          <div 
		            className={styles.button}
		            onClick={this.onAdd}
		          >
		            add
		          </div>
		        </div>
		      </div>
	    </div>
    );
  }
}

export default LinkForm;
