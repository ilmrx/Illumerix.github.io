let hudCount = 1; // Initialize HUD count

document.cookie = 'cross-site-cookie2=noneCookie; SameSite=None; Secure';

function openInNewTab(url) {
  // Function to clear the body contents and remove event listeners
  function clearBody() {
    document.body.innerHTML = "";
    document.body.style.overflow = 'visible'; // Reset overflow property
    window.removeEventListener('keydown', handleKeyDown);
  }

  // Remove all existing HUDs if any
  document.querySelectorAll('#buttonHUD').forEach(hud => hud.remove());

  // Set favicon
  const icon = document.createElement('link');
  icon.rel = "shortcut icon";
  icon.href = "https://ilmrx.neocities.org/images/misc/favicon.png";
  icon.type = "image/png";
  document.head.appendChild(icon);
  // Set title
  document.title = "Home";

  // Create and configure iframe
  const iframe = document.createElement('iframe');
  iframe.allow = "camera; microphone; display-capture; notifications; clipboard-write; clipboard-read;";
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = 'no-referrer';
  iframe.style.border = 'none';
  iframe.style.position = 'fixed'; // Fixed position
  iframe.style.top = '0';
  iframe.style.left = '0';
  iframe.style.padding = '0';
  iframe.style.height = '100%';
  iframe.style.width = '100%';
  iframe.style.margin = '0';
  iframe.id = 'content';
  document.body.innerHTML = ""; // Clear existing content
  document.body.appendChild(iframe);
  iframe.src = url;

  // Create button HUD
  const newButtonHUD = document.createElement('div');
  newButtonHUD.id = 'buttonHUD';
  newButtonHUD.style.position = 'fixed';
  newButtonHUD.style.top = '0';
  newButtonHUD.style.left = '0';
  newButtonHUD.style.width = '100%';
  newButtonHUD.style.height = '40px';
  newButtonHUD.style.backgroundColor = 'rgba(51, 51, 51, 0.5)'; // 50% opacity
  newButtonHUD.style.backdropFilter = 'blur(10px)'; // Blurred background
  newButtonHUD.style.display = 'flex';
  newButtonHUD.style.alignItems = 'center';
  newButtonHUD.style.justifyContent = 'space-between';
  newButtonHUD.style.padding = '0 2px'; // Adjusted padding for closer buttons
  document.body.appendChild(newButtonHUD);

  // Create buttons
  const ilmrxButton = document.createElement('button');
  ilmrxButton.innerText = 'Ilmrx Place';
  ilmrxButton.style.color = '#fff';
  ilmrxButton.style.backgroundColor = '#007bff';
  ilmrxButton.style.border = 'none';
  ilmrxButton.style.borderRadius = '5px';
  ilmrxButton.style.padding = '8px 10px'; // Adjusted padding for closer buttons
  ilmrxButton.style.cursor = 'pointer';
  ilmrxButton.addEventListener('click', function() {
    newButtonHUD.style.display = 'none'; // Hide the HUD
    hudCount--; // Decrement HUD count
    clearBody();
    openInNewTab('https://ilmrx.neocities.org/MAINPLACE');
  });
  newButtonHUD.appendChild(ilmrxButton);

  const classroomButton = document.createElement('button');
  classroomButton.innerText = 'PANIC';
  classroomButton.style.color = '#fff';
  classroomButton.style.backgroundColor = '#28a745';
  classroomButton.style.border = 'none';
  classroomButton.style.borderRadius = '5px';
  classroomButton.style.padding = '8px 10px'; // Adjusted padding for closer buttons
  classroomButton.style.cursor = 'pointer';
  classroomButton.addEventListener('click', function() {
    window.top.location.href = 'https://classroom.google.com';
  });
  newButtonHUD.appendChild(classroomButton);

  // Hide button HUD button
  const hideHUDButton = document.createElement('button');
  hideHUDButton.innerText = 'Hide';
  hideHUDButton.style.color = '#fff';
  hideHUDButton.style.backgroundColor = '#ffc107';
  hideHUDButton.style.border = 'none';
  hideHUDButton.style.borderRadius = '5px';
  hideHUDButton.style.padding = '8px 10px'; // Adjusted padding for closer buttons
  hideHUDButton.style.cursor = 'pointer';
  hideHUDButton.addEventListener('click', function() {
    hudCount--; // Decrement HUD count
    newButtonHUD.style.display = 'none';
    alert('IF THE BUTTONS DONT DISAPPEAR KEEP CLICKING IT\nPress comma (,) to show again');
  });
  newButtonHUD.appendChild(hideHUDButton);

  // Create reload button
  const reloadButton = document.createElement('button');
  reloadButton.innerText = 'Reload';
  reloadButton.style.color = '#fff';
  reloadButton.style.backgroundColor = '#dc3545'; // Red color for reload
  reloadButton.style.border = 'none';
  reloadButton.style.borderRadius = '5px';
  reloadButton.style.padding = '8px 10px'; // Adjusted padding for closer buttons
  reloadButton.style.cursor = 'pointer';
  reloadButton.addEventListener('click', function() {
    iframe.src = iframe.src; // Reload iframe content
  });
  newButtonHUD.appendChild(reloadButton);

  // Function to handle key events
  function handleKeyDown(event)
  {
  if (event.key === ',') {
      hudCount++; // Increment HUD count
      if (hudCount > 1) {
        // Remove all existing HUDs and display a new one
        document.querySelectorAll('#buttonHUD').forEach(hud => hud.remove());
        hudCount = 1; // Reset HUD count to 1
        document.body.appendChild(newButtonHUD);
        newButtonHUD.style.display = 'flex';
      } else {
        newButtonHUD.style.display = 'flex';
      }
    }
  }

  // Add event listener for keydown event
  document.addEventListener('keydown', handleKeyDown);

  // Hide scrollbars but keep functionality
  document.body.style.overflow = 'hidden';

  // Inject content script into iframe to attempt ad blocking
  const contentScript = `
    // Remove elements with known ad classes or IDs
    const adElements = document.querySelectorAll('.ad-class, #ad-id');
    adElements.forEach(element => {
      element.remove();
    });
    // Hide elements containing common ad-related keywords in their URLs
    const adKeywords = ['ad', 'sponsor', 'banner'];
    adKeywords.forEach(keyword => {
      const elementsWithKeyword = document.querySelectorAll('[href*="' + keyword + '"], [src*="' + keyword + '"]');
      elementsWithKeyword.forEach(element => {
        element.style.display = 'none';
      });
    });
  `;
  const scriptElement = document.createElement('script');
  scriptElement.textContent = contentScript;
  iframe.contentDocument.head.appendChild(scriptElement);
}
