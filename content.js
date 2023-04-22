
 
chrome.runtime.onMessage.addListener(data => {
    const { trigger } = data;

    console.log(document.activeElement);
    var active = getActiveElement();
    if (!active) {
      return false;
    }
    console.log(active);
    
    
    if (trigger === 'key1') {
       
      active.focus();
      active.value = 'https://wonpark.io/';
        
    } 
    else if (trigger === 'key2') {
      active.focus();
      active.value = 'https://www.linkedin.com/in/thewonpark/';

    } 

    //Can keep going...
   
  }
  );
  

/**
* Retrieve active element of document and preserve iframe priority. 
* Even works with multilevl
* @return HTMLElement
**/
var getActiveElement = function( document ){

  document = document || window.document;

  // Check if the active element is in the main web or iframe
  if( document.body === document.activeElement 
     || document.activeElement.tagName == 'IFRAME' ){
      // Get iframes
      var iframes = document.getElementsByTagName('iframe');
      for(var i = 0; i<iframes.length; i++ ){
          // Recall
          var focused = getActiveElement( iframes[i].contentWindow.document );
          if( focused !== false ){
              return focused; // The focused
          }
      }
  }

 else return document.activeElement;

  return false;
};
  
  