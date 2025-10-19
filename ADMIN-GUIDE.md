# 🔐 Admin Dashboard Guide
## ShowUp Relief Alliance - Emergency Operations

### 🎯 **ADMIN DASHBOARD ACCESS**
**[Admin Dashboard Portal](https://sites.google.com/jbf.com/showupreliefalliancedashboard/home)**

---

## 📊 **DAILY OPERATIONS CHECKLIST**

### **🌅 MORNING STARTUP (5 minutes)**
- [ ] **Check overnight requests**: Review emergency alerts in email
- [ ] **Open admin dashboard**: Verify all systems operational  
- [ ] **Review spreadsheet**: Check for high-priority requests
- [ ] **Update public map**: Add any new resource locations

### **📧 EMERGENCY ALERT MONITORING**
The system **automatically monitors** for these keywords and upgrades priority:
- `medical` | `emergency` | `urgent` 
- `elderly` | `disabled` | `children` | `baby`

**When Emergency Alert Received:**
1. **Immediate Response**: Call phone number in alert email
2. **Update Status**: Mark as "In Progress" in spreadsheet  
3. **Coordinate Resources**: Assign volunteers/teams
4. **Update Map**: Add location pin if needed

### **🗺️ WEEKLY ADDRESS MAPPING**

#### **STEP 1: Export Addresses**
1. **Open Master Database**: [Database Link](https://docs.google.com/spreadsheets/d/1-pbTqLMntCFuJ_ydOfmW7F_qyFDZPjZy4LCv8YE5tMo/edit)
2. **Click "📍 Mapping Tools"** menu (top toolbar)
3. **Select "🗺️ Export for Map"**
4. **Confirm export** → Creates "Map Export" sheet

#### **STEP 2: Download CSV**
1. **Click on "Map Export" sheet tab**
2. **File** → **Download** → **Comma Separated Values (.csv)**
3. **Save file** to desktop as `addresses-[date].csv`

#### **STEP 3: Import to Admin Map**
1. **Open Admin Map**: [Edit Map](https://www.google.com/maps/d/edit?mid=1v6UC3BeHWFW33yavxoPRe2qlirnxwSc&usp=sharing)
2. **Click "Import"** (left sidebar)
3. **Upload your CSV file**
4. **Map columns**:
   - **Name** → Title/Name field
   - **Address** → Location field  
   - **Type** → Used for pin colors
   - **Details** → Description field

#### **STEP 4: Set Pin Colors**
- 🔴 **Red**: Aid Requests
- 🔵 **Blue**: Volunteers  
- 🟢 **Green**: Resources/Shelters

---

## 📋 **DATA MANAGEMENT**

### **📊 SPREADSHEET OVERVIEW**
**[Master Database](https://docs.google.com/spreadsheets/d/1-pbTqLMntCFuJ_ydOfmW7F_qyFDZPjZy4LCv8YE5tMo/edit)**

#### **"Requests" Tab**
- **Column A**: Timestamp
- **Column B**: Email Address  
- **Column C**: Your Name
- **Column D**: Phone Number
- **Column E**: Street
- **Column F**: Unit
- **Column G**: City
- **Column H**: State
- **Column I**: ZIP
- **Column J**: Type of Help Needed
- **Column K**: Priority Level
- **Column L**: Photo Upload
- **Column M**: 🔑 **Aid Full Address** (Auto-compiled)

#### **"Volunteers" Tab**
- **Column A**: Timestamp
- **Column B**: Email Address
- **Column C**: Full Name
- **Column D**: Phone Number
- **Column E**: Your Skills
- **Column F**: Availability
- **Column G**: Transportation
- **Column H**: Number & Street
- **Column I**: Unit
- **Column J**: City
- **Column K**: State
- **Column L**: ZIP
- **Column M**: Receive Alert Emails?
- **Column N**: Additional Notes
- **Column O**: 🔑 **Volunteer Full Address** (Auto-compiled)

### **📈 TRACKING METRICS**
Monitor these key numbers daily:
- **Total Requests**: Check "Requests" tab row count
- **Emergency Requests**: Filter by "Emergency" priority
- **Available Volunteers**: Review "Volunteers" tab
- **Response Time**: Time from request to first contact

---

## 🚨 **EMERGENCY RESPONSE PROCEDURES**

### **🆘 HIGH-PRIORITY REQUEST WORKFLOW**
1. **Alert Received**: Email with red emergency header
2. **Immediate Contact**: 
   - Call phone number (clickable in email)
   - Assess immediate safety needs
3. **Resource Assignment**:
   - Check volunteer availability
   - Dispatch appropriate response team
4. **Status Updates**:
   - Update spreadsheet status column
   - Add response notes
   - Set completion timestamp

### **📱 CONTACT METHODS (Priority Order)**
1. **Phone Call**: Direct contact for emergencies
2. **Text Message**: Quick updates and confirmations
3. **Email**: Detailed information and follow-ups

### **🔄 STATUS TRACKING**
Add these status codes to requests:
- **NEW**: Just submitted, needs review
- **CONTACTED**: Initial contact made
- **IN-PROGRESS**: Resources assigned/dispatched  
- **COMPLETED**: Need fulfilled
- **DEFERRED**: Will handle later/different resources needed

---

## 🛠 **TECHNICAL MANAGEMENT**

### **🔧 GOOGLE APPS SCRIPT MONITORING**
**Access**: [Apps Script Dashboard](https://script.google.com/home)

#### **Weekly Checks**:
- [ ] **Triggers Active**: Verify form submission trigger enabled
- [ ] **Execution History**: Check for any failed runs
- [ ] **Email Quota**: Ensure alert emails sending successfully

#### **Monthly Maintenance**:
- [ ] **Update Email Lists**: Add/remove coordinator emails
- [ ] **Keyword Review**: Update emergency detection keywords
- [ ] **Performance Check**: Review script execution times

### **📂 BACKUP PROCEDURES**
#### **Weekly Backups**:
1. **Download Spreadsheet**: File → Download → Excel format
2. **Export Map Data**: Use mapping export feature
3. **Save Forms**: Document any form changes/updates

#### **Monthly Archives**:
1. **Create Archive Folder**: Name with month/year
2. **Store All Exports**: Spreadsheets, CSV files, documentation
3. **Update Documentation**: Record any system changes

---

## 🔒 **SECURITY & PRIVACY**

### **🛡️ ACCESS CONTROL**
- **Admin Dashboard**: Requires Google account authentication
- **Spreadsheet Access**: Restricted to coordinator emails only
- **Map Editing**: Limited to users with edit permissions
- **Form Responses**: Contains PII - handle confidentially

### **📋 PRIVACY PROTOCOLS**
- **Screen Sharing**: Never share screen when viewing personal data
- **Public Communications**: Use only first names and general locations
- **Data Retention**: Follow organizational data retention policies
- **Device Security**: Lock screens when unattended

### **🔐 PASSWORD MANAGEMENT**
- **Google Accounts**: Use strong, unique passwords + 2FA
- **Shared Access**: Create dedicated admin accounts vs personal
- **Regular Updates**: Change passwords quarterly

---

## 📞 **CONTACT ESCALATION**

### **TECHNICAL ISSUES**
1. **Google Workspace Admin**: [Contact Info]
2. **System Developer**: Jeff Franzen
3. **Emergency IT Support**: [After-hours contact]

### **OPERATIONAL ISSUES**  
1. **Operations Manager**: [Primary contact]
2. **Regional Coordinator**: [Secondary contact]
3. **Emergency Management**: [Government liaison]

---

## 📚 **TRAINING RESOURCES**

### **🎥 VIDEO TUTORIALS**
- [ ] Google Sheets basics and filtering
- [ ] Google My Maps editing and import process
- [ ] Emergency alert email interpretation
- [ ] Form response management

### **📖 REFERENCE GUIDES**
- [ ] Google Workspace admin documentation
- [ ] Emergency response protocols
- [ ] Local resource directory
- [ ] Contact escalation procedures

---

## ✅ **DAILY CLOSING CHECKLIST**

### **🌙 END-OF-DAY ROUTINE (10 minutes)**
- [ ] **Export daily summary**: Download requests from today
- [ ] **Update status**: Mark completed requests as "COMPLETED"  
- [ ] **Plan tomorrow**: Review pending high-priority items
- [ ] **Secure systems**: Log out of admin accounts
- [ ] **Brief next shift**: Email summary to incoming coordinator

### **📊 WEEKLY REPORTING**
- [ ] **Metrics Summary**: Total requests, completions, response times
- [ ] **Volunteer Utilization**: Active volunteers, availability gaps
- [ ] **Resource Needs**: Identify frequently requested items/services
- [ ] **System Performance**: Technical issues, suggested improvements

---

**🚨 REMEMBER: Lives depend on this system working reliably. Always test changes before deploying and maintain backup access methods.**