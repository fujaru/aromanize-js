/**
 * Aromanize base without String extension
 * 
 * @author Fajar Chandra
 * @since 2017.12.09
 */

// Temporarily store global flag
// This flag tells Aromanize not to extend string.
if(typeof AROMANIZE_EXTEND_STRING != 'undefined') {
	var AROMANIZE_EXTEND_STRING_ORIGINAL = AROMANIZE_EXTEND_STRING;
}
AROMANIZE_EXTEND_STRING = false;

// Export module
module.exports = require('./aromanize');

// Restore global flag (if any)
if(typeof AROMANIZE_EXTEND_STRING_ORIGINAL != 'undefined') {
	AROMANIZE_EXTEND_STRING = AROMANIZE_EXTEND_STRING_ORIGINAL;
}
else {
	delete AROMANIZE_EXTEND_STRING;
}
