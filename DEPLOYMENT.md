# 🚀 ShowUp Relief Alliance - Deployment Guide
## Complete System Setup in 30 Minutes

### 🎯 **OVERVIEW**
This guide will help you deploy the complete ShowUp Relief Alliance emergency response system from scratch using only Google tools.

---

## ⚡ **QUICK START (5-Minute Emergency Deployment)**

If you need the system running immediately for an active emergency:

1. **Copy this Google Sheet**: [Master Template](https://docs.google.com/spreadsheets/d/1-pbTqLMntCFuJ_ydOfmW7F_qyFDZPjZy4LCv8YE5tMo/edit) → Make a copy
2. **Copy this Google Site**: Use "Public Template" from the repository
3. **Update form links** in the copied site to point to your new forms
4. **Install Apps Script** from repository → Update email address
5. **Create Google My Maps** → Add to admin dashboard

**System will be operational in 5 minutes for emergency use.**

---

## 📋 **COMPLETE DEPLOYMENT CHECKLIST**

### **PHASE 1: GOOGLE FORMS SETUP (10 minutes)**

#### **🆘 Help Request Form**
1. **Create new Google Form**
2. **Add these required fields**:
   - Email Address (required)
   - Your Name (required)  
   - Phone Number (required)
   - Street Address (required)
   - Unit/Apt Number (optional)
   - City (required)
   - State (required) 
   - ZIP Code (required)
   - Type of Help Needed (dropdown: Food, Water, Medical, Shelter, Transportation, Debris Removal, Other)
   - Priority Level (dropdown: Low, Medium, High, Emergency)
   - Additional Details (paragraph text)
   - Photo Upload (optional)

3. **Form Settings**:
   - ✅ Collect email addresses
   - ✅ Response receipts: Always
   - ✅ Allow response editing: Never
   - ✅ Confirmation message: "Your request has been received. Emergency coordinators will respond within 2 hours for high-priority requests."

#### **👥 Volunteer Registration Form**  
1. **Create new Google Form**
2. **Add these required fields**:
   - Email Address (required)
   - Full Name (required)
   - Phone Number (required)
   - Your Skills (checkboxes: Medical, Food Service, Transportation, Debris Removal, Child Care, Elder Care, Pet Care, Construction, Other)
   - Availability (checkboxes: Weekday Mornings, Weekday Afternoons, Weekday Evenings, Weekend Days, Weekend Evenings, On-Call Emergency)
   - Transportation (dropdown: Have Vehicle, Have Large Vehicle/Truck, Need Transportation, Can Provide Transportation)
   - Number & Street (required)
   - Unit/Apt Number (optional)
   - City (required)
   - State (required)
   - ZIP Code (required)
   - Receive Alert Emails? (Yes/No)
   - Additional Notes (paragraph text)

3. **Form Settings**:
   - ✅ Collect email addresses
   - ✅ Response receipts: Always
   - ✅ Confirmation message: "Thank you for volunteering! You'll receive coordination emails when your skills are needed."

### **PHASE 2: GOOGLE SHEETS CONFIGURATION (5 minutes)**

#### **📊 Create Master Database**
1. **From Help Request Form**: Responses → Create Spreadsheet → "ShowUp Relief Alliance - Master Database"
2. **Link Volunteer Form**: From Volunteer form → Responses → Select existing spreadsheet → Choose your master database → Create new sheet
3. **Rename sheets**: "Requests" and "Volunteers"

#### **🧮 Add Address Compilation Formulas**
**In "Requests" sheet, Column M (Aid Full Address)**:
```
=IF(AND(E2<>"",G2<>"",H2<>"",I2<>""),E2&IF(F2<>"", " "&F2, "")&", "&G2&", "&H2&" "&I2,"")
```

**In "Volunteers" sheet, Column O (Volunteer Full Address)**:
```  
=IF(AND(H2<>"",J2<>"",K2<>"",L2<>""),H2&IF(I2<>"", " "&I2, "")&", "&J2&", "&K2&" "&L2,"")
```

**Copy formulas down** for all rows (drag formula to row 1000)

### **PHASE 3: GOOGLE MY MAPS SETUP (5 minutes)**

#### **🗺️ Create Resource Maps**
1. **Go to**: [mymaps.google.com](https://mymaps.google.com)
2. **Create New Map** → "ShowUp Relief Alliance - Resources"
3. **Add Layers**:
   - Emergency Shelters (Red pins)
   - Food Distribution (Blue pins)
   - Medical Facilities (Green pins)  
   - Supply Centers (Yellow pins)
4. **Share Map**: 
   - Public viewing: Anyone with link can view
   - Admin editing: Anyone with link can edit
5. **Copy map ID** from URL for later use

### **PHASE 4: GOOGLE APPS SCRIPT INSTALLATION (5 minutes)**

#### **⚙️ Install Automation Script**
1. **Open your spreadsheet** → Extensions → Apps Script
2. **Delete default code** → **Paste code from** `google-apps-script.js` in repository
3. **Update CONFIG section**:
   ```javascript
   const CONFIG = {
     coordinatorEmails: 'your-admin@email.com',
     orgName: 'Your Organization Name',
     mapUrl: 'https://www.google.com/maps/d/view?mid=YOUR-MAP-ID'
   };
   ```
4. **Save script** → **Run onOpen function** to authorize permissions
5. **Set up trigger**:
   - Triggers (left sidebar) → Add Trigger
   - Function: onFormSubmit
   - Event: On form submit

### **PHASE 5: GOOGLE SITES CREATION (10 minutes)**

#### **🌐 Public Portal Site**
1. **Go to**: [sites.google.com](https://sites.google.com)
2. **Create new site** → Choose template → "ShowUp Relief Alliance"
3. **Add sections**:
   - Header with organization name/logo
   - "Request Help" button → Embed help request form
   - "Volunteer" button → Embed volunteer form  
   - "Resources Map" → Embed public view of map
   - Contact information footer
4. **Publish site** → Note the URL

#### **🔐 Admin Dashboard Site**
1. **Create second site** → "ShowUp Relief Alliance - Admin Dashboard"
2. **Add sections**:
   - Authentication warning banner
   - Link to master spreadsheet
   - Embedded map with edit permissions
   - Quick action buttons (export data, view forms, etc.)
3. **Restrict access**: Share only with coordinator emails
4. **Publish site** → Note the URL

### **PHASE 6: SYSTEM TESTING (5 minutes)**

#### **✅ Test Complete Workflow**
1. **Submit test help request** → Check if appears in spreadsheet
2. **Submit test volunteer registration** → Check if appears in spreadsheet  
3. **Verify address compilation** → Check columns M & O populate automatically
4. **Test emergency alert** → Submit request with "emergency" keyword
5. **Test mapping export** → Use "📍 Mapping Tools" menu
6. **Test map import** → Import CSV to Google My Maps

---

## 🔧 **CUSTOMIZATION OPTIONS**

### **📝 Form Customization**
- **Add organization branding** (logo, colors, fonts)
- **Modify help categories** to match local needs
- **Add geographic restrictions** (limit to specific areas)
- **Include additional contact methods** (social media, radio)

### **🗺️ Map Customization**  
- **Add local landmarks** for easier navigation
- **Create specialized layers** (pet-friendly shelters, medical specialties)
- **Import existing resource databases** (CSV format)
- **Add custom icons** for different resource types

### **📧 Alert Customization**
- **Modify emergency keywords** for your community
- **Add priority routing** (different contacts for different request types)
- **Include additional information** (weather, road closures)
- **Create escalation procedures** (backup contacts, timeouts)

---

## 🛡️ **SECURITY SETUP**

### **🔒 Access Control**
1. **Coordinator Email List**: Maintain current list of authorized personnel
2. **Google Account Security**: Require 2FA for all admin accounts
3. **Regular Access Review**: Quarterly review of who has access
4. **Emergency Account**: Create shared emergency account with strong password

### **📋 Data Privacy**
1. **PII Handling**: Train staff on confidential information protocols
2. **Screen Sharing**: Never share screens showing personal data
3. **Device Security**: Require password-protected devices
4. **Data Retention**: Establish clear data retention/deletion policies

---

## 📊 **MONITORING & MAINTENANCE**

### **📈 Performance Monitoring**
- **Daily**: Check email alert delivery, form submission counts
- **Weekly**: Review spreadsheet performance, Apps Script execution logs  
- **Monthly**: Export data backups, review system usage metrics
- **Quarterly**: Update contact lists, review security access

### **🔄 System Updates**
- **Forms**: Add/modify questions based on operational feedback
- **Scripts**: Update emergency keywords, contact information
- **Maps**: Add new resources, remove outdated information
- **Sites**: Update procedures, contact information, branding

### **📚 Documentation Maintenance**
- **Keep deployment guide current** with any system changes
- **Update admin procedures** based on lessons learned
- **Maintain contact lists** and escalation procedures
- **Document customizations** for future reference

---

## 🆘 **EMERGENCY DEPLOYMENT SCENARIOS**

### **⚡ Active Emergency (5-minute setup)**
1. **Copy template spreadsheet** → Update to your organization
2. **Create quick forms** → Just essential fields (name, contact, address, need)
3. **Skip custom mapping** → Use Google search for addresses initially
4. **Basic email alerts** → Forward form notifications to coordinator list
5. **Expand system** once immediate crisis response is established

### **🌀 Planned Emergency Preparation (full setup)**
1. **Complete all deployment phases** before emergency
2. **Train admin staff** on all procedures
3. **Test system monthly** with mock scenarios
4. **Maintain updated resource lists** and contact information
5. **Review and update** based on lessons learned from actual deployments

---

## 📞 **SUPPORT CONTACTS**

### **Technical Support**
- **Google Workspace Issues**: [Google Support](https://support.google.com)
- **Apps Script Problems**: [Apps Script Documentation](https://developers.google.com/apps-script)
- **System Developer**: Jeff Franzen (for custom modifications)

### **Operational Support**  
- **Emergency Management**: [Local emergency management contact]
- **Community Resources**: [Local resource coordination contact]
- **Volunteer Coordination**: [Volunteer management contact]

---

**🚨 REMEMBER: Test your deployment thoroughly before relying on it for actual emergencies. Practice with mock scenarios to ensure all team members understand the workflow.**

---

**📅 ESTIMATED TIMELINE:**
- **Emergency deployment**: 5 minutes
- **Basic functional system**: 15 minutes  
- **Complete system with training**: 30 minutes
- **Fully customized deployment**: 1-2 hours

**💰 TOTAL COST: $0** (using free Google Workspace tier)