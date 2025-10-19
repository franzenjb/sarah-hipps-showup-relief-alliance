// ====================================================================
// SARAH HIPPS SHOWUP RELIEF ALLIANCE - GOOGLE APPS SCRIPT
// Emergency Response Automation System
// ====================================================================

// CONFIGURATION - UPDATE THESE EMAIL ADDRESSES
const CONFIG = {
  coordinatorEmails: 'jbf@jbf.com', // Update with real coordinator emails
  orgName: 'ShowUp Relief Alliance',
  mapUrl: 'https://www.google.com/maps/d/view?mid=1v6UC3BeHWFW33yavxoPRe2qlirnxwSc'
};

// ====================================================================
// EMERGENCY ALERT SYSTEM
// Automatically detects urgent requests and sends email alerts
// ====================================================================

function onFormSubmit(e) {
  try {
    // Get the submitted data
    const sheet = e.source.getActiveSheet();
    const row = e.range.getRow();
    const data = sheet.getRange(row, 1, 1, 15).getValues()[0];

    // Extract form data (adjust column numbers if needed)
    const timestamp = data[0];
    const name = data[2] || 'Unknown';
    const phone = data[3] || 'Not provided';
    const email = data[4] || 'Not provided';
    const address = data[5] || 'Not provided';
    const needType = data[6] || 'Other';
    const priority = data[7] || 'Medium';
    const notes = data[8] || '';

    // Auto-upgrade priority based on keywords
    const urgentKeywords = ['medical', 'emergency', 'urgent', 'elderly', 'disabled', 'children', 'baby'];
    const notesLower = notes.toLowerCase();
    let finalPriority = priority;

    if (urgentKeywords.some(keyword => notesLower.includes(keyword))) {
      finalPriority = 'Emergency';
      sheet.getRange(row, 8).setValue('Emergency'); // Update priority in sheet
    }

    // Send alert for high-priority requests
    if (finalPriority === 'Emergency' || finalPriority === 'High') {
      sendEmergencyAlert({
        name, phone, email, address, needType,
        priority: finalPriority, notes, timestamp
      });
    }

    console.log(`New ${finalPriority} request: ${needType} for ${name}`);

  } catch (error) {
    console.error('Error processing form submission:', error);
  }
}

function sendEmergencyAlert(request) {
  const subject = `🚨 ${request.priority} Priority: ${request.needType} Request`;

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px;">
      <div style="background-color: #dc2626; color: white; padding: 20px; text-align: center;">
        <h2 style="margin: 0;">🚨 EMERGENCY REQUEST</h2>
      </div>
      
      <div style="padding: 20px; background-color: #f9f9f9;">
        <h3 style="color: #dc2626; margin-top: 0;">${request.needType} - ${request.priority} Priority</h3>
        
        <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Name:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${request.name}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Phone:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="tel:${request.phone}">${request.phone}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Email:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;">${request.email}</td></tr>
          <tr><td style="padding: 8px; font-weight: bold; border-bottom: 1px solid #ddd;">Address:</td><td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="https://maps.google.com/maps?q=${encodeURIComponent(request.address)}" target="_blank">${request.address}</a></td></tr>
          <tr><td style="padding: 8px; font-weight: bold;">Submitted:</td><td style="padding: 8px;">${request.timestamp}</td></tr>
        </table>
        
        ${request.notes ? `
        <div style="margin: 15px 0; padding: 15px; background-color: #fff3cd; border-left: 4px solid #f59e0b;">
          <strong>Details:</strong><br>
          ${request.notes}
        </div>
        ` : ''}
        
        <div style="margin-top: 20px; text-align: center;">
          <a href="${SpreadsheetApp.getActiveSpreadsheet().getUrl()}" 
             style="background-color: #dc2626; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 5px;">
            📋 View All Requests
          </a>
          
          <a href="${CONFIG.mapUrl}" 
             style="background-color: #3498db; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 5px;">
            🗺️ View Map
          </a>
        </div>
      </div>
      
      <div style="padding: 15px; background-color: #e5e7eb; text-align: center; font-size: 12px; color: #666;">
        ${CONFIG.orgName} - Automated Alert System
      </div>
    </div>
  `;

  try {
    MailApp.sendEmail({
      to: CONFIG.coordinatorEmails,
      subject: subject,
      htmlBody: htmlBody
    });

    console.log(`Emergency alert sent for: ${request.name}`);
  } catch (error) {
    console.error('Failed to send email:', error);
  }
}

// ====================================================================
// AUTOMATED MAPPING SYSTEM
// Exports addresses from both Aid Requests and Volunteers for map import
// ====================================================================

function exportForMapping() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  // Get both sheets
  const requestsSheet = ss.getSheetByName('Requests');
  const volunteersSheet = ss.getSheetByName('Volunteers');

  // Delete old export sheet if it exists
  const oldExport = ss.getSheetByName('Map Export');
  if (oldExport) ss.deleteSheet(oldExport);

  // Create new sheet for mapping export
  const exportSheet = ss.insertSheet('Map Export');

  // Headers
  exportSheet.getRange(1, 1, 1, 4).setValues([['Name', 'Type', 'Address', 'Details']]);

  let exportData = [];

  // Export Aid Requests (Column M = "Aid Full Address")
  const requestsData = requestsSheet.getDataRange().getValues();
  for (let i = 1; i < requestsData.length; i++) {
    if (requestsData[i][12] && requestsData[i][3]) { // If Column M and Name exist
      exportData.push([
        requestsData[i][3], // Your Name 
        'Aid Request',
        requestsData[i][12], // Aid Full Address (Column M)
        requestsData[i][10] || 'General Aid' // Type of Help Needed
      ]);
    }
  }

  // Export Volunteers (Column O = "Volunteer Full Address")  
  const volunteersData = volunteersSheet.getDataRange().getValues();
  for (let i = 1; i < volunteersData.length; i++) {
    if (volunteersData[i][14] && volunteersData[i][2]) { // If Column O and Name exist
      exportData.push([
        volunteersData[i][2], // Full Name
        'Volunteer',
        volunteersData[i][14], // Volunteer Full Address (Column O)
        volunteersData[i][4] || 'General Volunteer' // Skills
      ]);
    }
  }

  // Write all data
  if (exportData.length > 0) {
    exportSheet.getRange(2, 1, exportData.length, 4).setValues(exportData);
  }

  // Success message
  Browser.msgBox('Map Export Ready!',
    `✅ Created export with ${exportData.length} addresses\n\n` +
    `📋 ${requestsData.length - 1} Aid Requests\n` +
    `👥 ${volunteersData.length - 1} Volunteers\n\n` +
    `Next: Download "Map Export" sheet as CSV and import to your admin map`,
    Browser.Buttons.OK);
}

// ====================================================================
// MENU INTEGRATION
// Adds "Mapping Tools" menu to Google Sheets for easy access
// ====================================================================

function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('📍 Mapping Tools')
    .addItem('🗺️ Export for Map', 'exportForMapping')
    .addToUi();
}

// ====================================================================
// INSTALLATION INSTRUCTIONS
// ====================================================================

/*
SETUP INSTRUCTIONS:

1. OPEN YOUR GOOGLE SHEETS:
   - Go to your ShowUp Relief Alliance master database
   - Extensions → Apps Script

2. PASTE THIS CODE:
   - Replace any existing code with this script
   - Update CONFIG.coordinatorEmails with real email addresses

3. SET UP TRIGGERS:
   - In Apps Script: Triggers (left sidebar)
   - Add Trigger → Function: onFormSubmit → Event: On form submit
   - This enables automatic emergency alerts

4. AUTHORIZE PERMISSIONS:
   - First run will ask for permissions
   - Allow access to Gmail (for alerts) and Sheets (for data)

5. TEST THE SYSTEM:
   - Submit a test form with "emergency" in the notes
   - Check if priority upgrades and alert emails send
   - Test the mapping export: Click "📍 Mapping Tools" → "🗺️ Export for Map"

COLUMN REQUIREMENTS:
- Column M: Aid Full Address (formula combining street, unit, city, state, zip)
- Column O: Volunteer Full Address (formula combining street, unit, city, state, zip)

The script will automatically detect these columns and export addresses for mapping.

EMERGENCY KEYWORDS (auto-upgrade to Emergency priority):
medical, emergency, urgent, elderly, disabled, children, baby

EMAIL ALERT TRIGGERS:
- High priority requests
- Emergency priority requests (including auto-upgraded ones)

MAPPING WORKFLOW:
1. Run "Export for Map" from menu
2. Download "Map Export" sheet as CSV
3. Import CSV to Google My Maps
4. Set pin colors: Red (Aid Requests), Blue (Volunteers)
*/