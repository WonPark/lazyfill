chrome.commands.onCommand.addListener(function (command) {
    if (command === "key1") {

        callforeground("key1");
   
    } else if (command === "key2") {
        callforeground("key2");
    }
});

function getCurrentTab() {
    return chrome.tabs.query({ currentWindow: true, active: true });
}


async function callforeground(message) {
    const tabInfo = await getCurrentTab();
    const [{ id: tabId }] = tabInfo;
    chrome.tabs.sendMessage(tabId, { trigger: message });
  }