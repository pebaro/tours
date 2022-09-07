/**
 * ===== setReadMoreLength ===== *
 * ----------------------------- *
 * @param {*} readMoreText 
 * @param {*} maxLength 
 * @returns a new string shortened to the number of words set by maxLength argument
 */
export const setReadMoreLength = (readMoreText, maxLength) => readMoreText &&
	readMoreText.length > maxLength
		? readMoreText.slice(0, maxLength).split(' ').slice(0, -1).join(' ')
		: readMoreText;


