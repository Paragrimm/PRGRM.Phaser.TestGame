/**
 * var browser = browser.open("chrome");
 * browser.pointer.moveTo(20px, 20px);
 * 
 * var stateBeforeClick = getCurrentState();
 * 
 * browser.pointer.click();
 * 
 * var currentState = getCurrentState();
 * 
 * console.assert (stateBeforeClick.score !== currentState.score, true);
 */