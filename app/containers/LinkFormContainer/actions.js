/*
 *
 * LinkFormContainer actions
 *
 */

import {
  ADD_LINK,
  ADD_LINK_SUCCESS,
  ADD_LINK_FALIED,
  ADD_LINK_CANCELLED,
} from './constants';

export function addLinkCancelled() {
	return {
		type: ADD_LINK_CANCELLED,
	};
}

export function addLink(link) {
  return {
    type: ADD_LINK,
    link,
  };
}

export function addLinkSuccess(link) {
	debugger;
	return {
		type: ADD_LINK_SUCCESS,
		link,
	};
}

export function addLinkFailed(link, message) {
	return {
		type: ADD_LINK_FALIED,
		link,
		message,
	};
}