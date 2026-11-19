// Shared state management across separate portal pages
const INITIAL_USERS = [
    {
        id: "USR-001",
        name: "Christian Jay Villamor",
        email: "christian@veripay.ph",
        role: "superadmin",
        password: "admin",
        title: "Super Admin & Managing Partner",
        shopName: "VeriPay Management",
        plan: "Enterprise",
        isOnline: true,
        lastSignIn: "2026-11-15 08:30 AM",
        filesSentCount: 0
    },
    {
        id: "USR-002",
        name: "Nelbert S. De Pedro",
        email: "nelbert@veripay.ph",
        role: "admin",
        password: "admin",
        title: "Operations Officer",
        shopName: "VeriPay Ops Hub (Las Piñas)",
        plan: "Staff",
        isOnline: true,
        lastSignIn: "2026-11-15 09:15 AM",
        filesSentCount: 14
    },
    {
        id: "USR-003",
        name: "Leejan Myca B. Dela Cruz",
        email: "leejan@veripay.ph",
        role: "admin",
        password: "admin",
        title: "Operations Staff (Auditor)",
        shopName: "VeriPay Ops Hub (Las Piñas)",
        plan: "Staff",
        isOnline: false,
        lastSignIn: "2026-11-14 05:45 PM",
        filesSentCount: 9
    },
    {
        id: "USR-004",
        name: "Daniela Sherlyn R. Gerodiaz",
        email: "daniela@veripay.ph",
        role: "admin",
        password: "admin",
        title: "Finance Officer",
        shopName: "VeriPay Finance",
        plan: "Staff",
        isOnline: true,
        lastSignIn: "2026-11-15 09:40 AM",
        filesSentCount: 6
    },
    {
        id: "USR-005",
        name: "Kape Ni CJ (Coffee Shop)",
        email: "owner@kapenicj.ph",
        role: "client",
        password: "client",
        title: "Coffee Shop Owner",
        shopName: "Kape Ni CJ",
        barangay: "Talon Dos",
        plan: "Standard Plan (₱3,500)",
        planTier: "Standard Plan",
        planPrice: 3500,
        planLimit: "4-6 Employees",
        schedule: "Semi-Monthly (15th & 30th)",
        isOnline: true,
        lastSignIn: "2026-11-15 08:50 AM",
        reauditFees: 0,
        filesSentCount: 0
    },
    {
        id: "USR-006",
        name: "Artisan Brews Las Piñas",
        email: "manager@artisanbrews.ph",
        role: "client",
        password: "client",
        title: "Café Manager",
        shopName: "Artisan Brews",
        barangay: "BF International/CAA",
        plan: "Basic Plan (₱2,500)",
        planTier: "Basic Plan",
        planPrice: 2500,
        planLimit: "1-3 Employees",
        schedule: "Monthly (End of Month)",
        isOnline: false,
        lastSignIn: "2026-11-13 11:20 AM",
        reauditFees: 0,
        filesSentCount: 0
    }
];

const INITIAL_EMPLOYEES = [
    { id: "EMP-101", clientId: "USR-005", name: "Marco Antonio Ramos", position: "Senior Barista", dailyRate: 650, sss: "34-8921102-1", philHealth: "12-0092819-2", pagIbig: "1210-9921-3411" },
    { id: "EMP-102", clientId: "USR-005", name: "Althea Marie Bautista", position: "Junior Barista", dailyRate: 610, sss: "34-7712391-4", philHealth: "12-1182390-5", pagIbig: "1210-4491-1029" },
    { id: "EMP-103", clientId: "USR-005", name: "Kenneth Joy Mendoza", position: "Pastry & Kitchen Staff", dailyRate: 610, sss: "34-9023412-8", philHealth: "12-5582910-1", pagIbig: "1210-3301-8822" },
    { id: "EMP-104", clientId: "USR-005", name: "Jasmine Mae Tan", position: "Cashier & Service Staff", dailyRate: 610, sss: "34-6612984-0", philHealth: "12-7782194-9", pagIbig: "1210-5591-3310" },
    { id: "EMP-105", clientId: "USR-005", name: "Joshua Kyle Perez", position: "Rotating Barista", dailyRate: 610, sss: "34-5519283-7", philHealth: "12-9981240-3", pagIbig: "1210-7710-4499" }
];

const INITIAL_PAYMENTS = [
    {
        id: "PAY-901",
        clientId: "USR-005",
        shopName: "Kape Ni CJ",
        plan: "Standard Plan (₱3,500)",
        method: "GCash",
        accountNumber: "0917-882-9011 (CJ Villamor)",
        referenceNumber: "902188392182",
        amount: 3500,
        proofFileName: "GCash_Receipt_Nov2026_KapeNiCJ.png",
        proofFileType: "image/png",
        proofFileData: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'><rect width='600' height='400' fill='%23005ce6'/><rect x='20' y='20' width='560' height='360' rx='16' fill='white'/><text x='50' y='70' font-family='Arial' font-size='22' font-weight='bold' fill='%23005ce6'>GCash Payment Confirmation</text><line x1='50' y1='90' x2='550' y2='90' stroke='%23e2e8f0' stroke-width='2'/><text x='50' y='130' font-family='Arial' font-size='14' fill='%2364748b'>Merchant:</text><text x='200' y='130' font-family='Arial' font-size='14' font-weight='bold' fill='%230f172a'>VeriPay Operations Las Pi%C3%B1as</text><text x='50' y='170' font-family='Arial' font-size='14' fill='%2364748b'>Ref No.:</text><text x='200' y='170' font-family='Arial' font-size='14' font-weight='bold' fill='%23005ce6'>902188392182</text><text x='50' y='210' font-family='Arial' font-size='14' fill='%2364748b'>Amount Paid:</text><text x='200' y='210' font-family='Arial' font-size='18' font-weight='bold' fill='%2310b981'>PHP 3,500.00</text><text x='50' y='250' font-family='Arial' font-size='14' fill='%2364748b'>Sender:</text><text x='200' y='250' font-family='Arial' font-size='14' fill='%230f172a'>Kape Ni CJ (Talon Dos)</text><text x='50' y='290' font-family='Arial' font-size='14' fill='%2364748b'>Date %26 Time:</text><text x='200' y='290' font-family='Arial' font-size='14' fill='%230f172a'>Nov 1, 2026, 09:30 AM</text><rect x='50' y='325' width='500' height='35' rx='8' fill='%23ecfdf5'/><text x='210' y='348' font-family='Arial' font-size='13' font-weight='bold' fill='%23047857'>%E2%9C%93 PAYMENT SUCCESSFUL</text></svg>",
        submittedAt: "2026-11-01 09:30 AM",
        status: "valid", // "pending", "valid", "invalid"
        reviewedBy: "Daniela Sherlyn R. Gerodiaz (Finance Officer)",
        reviewedAt: "2026-11-01 10:15 AM",
        adminRemarks: "Payment verified via GCash business merchant account. Access unlocked."
    },
    {
        id: "PAY-902",
        clientId: "USR-006",
        shopName: "Artisan Brews Las Piñas",
        plan: "Basic Plan (₱2,500)",
        method: "MariBank",
        accountNumber: "MariBank: ****9949 (KRISA LOMIBAO)",
        referenceNumber: "MB-20261115-9921",
        amount: 2500,
        proofFileName: "MariBank_QR_Deposit_Slip.png",
        proofFileType: "image/png",
        proofFileData: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'><rect width='600' height='400' fill='%23ea580c'/><rect x='20' y='20' width='560' height='360' rx='16' fill='white'/><text x='50' y='70' font-family='Arial' font-size='22' font-weight='bold' fill='%23ea580c'>MariBank InstaPay Transfer</text><line x1='50' y1='90' x2='550' y2='90' stroke='%23fed7aa' stroke-width='2'/><text x='50' y='130' font-family='Arial' font-size='14' fill='%2364748b'>Recipient Name:</text><text x='200' y='130' font-family='Arial' font-size='14' font-weight='bold' fill='%230f172a'>JAMES BRYAN JIMENEZ</text><text x='50' y='170' font-family='Arial' font-size='14' fill='%2364748b'>Account:</text><text x='200' y='170' font-family='Arial' font-size='14' font-weight='bold' fill='%23ea580c'>MariBank (****9557)</text><text x='50' y='210' font-family='Arial' font-size='14' fill='%2364748b'>Ref No.:</text><text x='200' y='210' font-family='Arial' font-size='14' font-weight='bold' fill='%230f172a'>MB-20261115-9921</text><text x='50' y='250' font-family='Arial' font-size='14' fill='%2364748b'>Amount Paid:</text><text x='200' y='250' font-family='Arial' font-size='18' font-weight='bold' fill='%2310b981'>PHP 2,500.00</text><text x='50' y='290' font-family='Arial' font-size='14' fill='%2364748b'>Sender:</text><text x='200' y='290' font-family='Arial' font-size='14' fill='%230f172a'>Artisan Brews Las Pi%C3%B1as</text><rect x='50' y='325' width='500' height='35' rx='8' fill='%23fff7ed'/><text x='215' y='348' font-family='Arial' font-size='13' font-weight='bold' fill='%23c2410c'>INSTAPAY SUCCESSFUL</text></svg>",
        submittedAt: "2026-11-15 02:40 PM",
        status: "pending",
        reviewedBy: "",
        reviewedAt: "",
        adminRemarks: ""
    }
];

const INITIAL_SUBMISSIONS = [
    {
        id: "SUB-801",
        clientId: "USR-005",
        shopName: "Kape Ni CJ",
        plan: "Standard Plan (₱3,500)",
        schedule: "Semi-Monthly (15th & 30th)",
        startDate: "2026-10-16",
        endDate: "2026-10-31",
        clientFileName: "KapeNiCJ_TimeRecord_Oct16-31.png",
        clientFileType: "image/png",
        clientFileData: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='450' viewBox='0 0 700 450'><rect width='700' height='450' fill='%23f8fafc'/><rect x='15' y='15' width='670' height='420' rx='12' fill='white' stroke='%23cbd5e1'/><text x='35' y='50' font-family='Arial' font-size='18' font-weight='bold' fill='%230f172a'>KAPE NI CJ - BARISTA BIOMETRIC ATTENDANCE SHEET</text><text x='35' y='75' font-family='Arial' font-size='12' fill='%2364748b'>Period: Oct 16 - Oct 31, 2026 | Location: Talon Dos, Las Pi%C3%B1as City</text><line x1='35' y1='90' x2='665' y2='90' stroke='%230284c7' stroke-width='2'/><rect x='35' y='105' width='630' height='30' fill='%23f1f5f9'/><text x='45' y='125' font-family='Arial' font-size='11' font-weight='bold' fill='%23334155'>EMP ID   NAME                     DAYS   REG HRS  OT HRS  LATE/UT</text><text x='45' y='160' font-family='monospace' font-size='12' fill='%230f172a'>EMP-101  Marco Antonio Ramos      13.0   104.0    4.0     0 mins</text><text x='45' y='190' font-family='monospace' font-size='12' fill='%230f172a'>EMP-102  Althea Marie Bautista    12.0    96.0    2.5    15 mins</text><text x='45' y='220' font-family='monospace' font-size='12' fill='%230f172a'>EMP-103  Kenneth Joy Mendoza      13.0   104.0    0.0     0 mins</text><text x='45' y='250' font-family='monospace' font-size='12' fill='%230f172a'>EMP-104  Jasmine Mae Tan          12.5   100.0    3.0    30 mins</text><text x='45' y='280' font-family='monospace' font-size='12' fill='%230f172a'>EMP-105  Joshua Kyle Perez        11.0    88.0    8.0     0 mins</text><line x1='35' y1='310' x2='665' y2='310' stroke='%23e2e8f0' stroke-width='1'/><text x='45' y='340' font-family='Arial' font-size='12' fill='%23475569'>Notes: Overtime authorized for Joshua during weekend night shift rush.</text><text x='45' y='365' font-family='Arial' font-size='12' font-weight='bold' fill='%230284c7'>Prepared By: Kape Ni CJ Branch Supervisor</text></svg>",
        clientNotes: "Regular pay cycle with 8 hours overtime for Joshua",
        submittedAt: "2026-10-31 02:15 PM",
        status: "completed",
        finalReportName: "VeriPay_FINAL_Certified_KapeNiCJ_Oct2026B.png",
        finalReportType: "image/png",
        finalReportData: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='450' viewBox='0 0 700 450'><rect width='700' height='450' fill='%23064e3b'/><rect x='15' y='15' width='670' height='420' rx='12' fill='white'/><text x='40' y='55' font-family='Arial' font-size='20' font-weight='bold' fill='%23065f46'>VERIPAY AUDITED FINAL PAYROLL CERTIFICATE</text><text x='40' y='80' font-family='Arial' font-size='12' fill='%2364748b'>Certified by Operations Officer: Nelbert S. De Pedro | Vista Mall Las Pi%C3%B1as</text><line x1='40' y1='95' x2='660' y2='95' stroke='%2310b981' stroke-width='2'/><text x='40' y='130' font-family='Arial' font-size='13' fill='%23334155'>Client Coffee Shop: %3Cstrong%3EKape Ni CJ%3C/strong%3E (Standard Plan)</text><text x='40' y='155' font-family='Arial' font-size='13' fill='%23334155'>Audit Cycle: October 16 to October 31, 2026</text><rect x='40' y='175' width='620' height='150' rx='8' fill='%23f0fdf4' stroke='%23bbf7d0'/><text x='60' y='210' font-family='monospace' font-size='13' fill='%2314532d'>TOTAL GROSS PAY EARNED : PHP 38,120.00</text><text x='60' y='240' font-family='monospace' font-size='13' fill='%23b91c1c'>TOTAL STATUTORY DEDUCT : PHP  3,225.00 (SSS, PhilHealth, HDMF)</text><text x='60' y='275' font-family='monospace' font-size='16' font-weight='bold' fill='%23047857'>FINAL NET PAY TO RELEASE: PHP 34,895.00</text><text x='60' y='305' font-family='Arial' font-size='11' fill='%2315803d'>%E2%9C%93 Full DOLE Compliance %26 Reconciliation Checked</text><text x='40' y='360' font-family='Arial' font-size='11' fill='%2364748b'>Notice: Certified error-free. Re-submissions after this final release incur a PHP 350 fee.</text><rect x='440' y='375' width='220' height='40' rx='6' fill='%23059669'/><text x='470' y='400' font-family='Arial' font-size='12' font-weight='bold' fill='white'>APPROVED BY ADMIN</text></svg>",
        auditedBy: "Nelbert S. De Pedro",
        completedAt: "2026-11-01 10:40 AM",
        clientConfirmed: true,
        isResubmission: false,
        penaltyIncurred: 0
    },
    {
        id: "SUB-802",
        clientId: "USR-005",
        shopName: "Kape Ni CJ",
        plan: "Standard Plan (₱3,500)",
        schedule: "Semi-Monthly (15th & 30th)",
        startDate: "2026-11-01",
        endDate: "2026-11-15",
        clientFileName: "KapeNiCJ_TimeRecords_Nov1-15.png",
        clientFileType: "image/png",
        clientFileData: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='700' height='450' viewBox='0 0 700 450'><rect width='700' height='450' fill='%23f8fafc'/><rect x='15' y='15' width='670' height='420' rx='12' fill='white' stroke='%23cbd5e1'/><text x='35' y='50' font-family='Arial' font-size='18' font-weight='bold' fill='%230f172a'>KAPE NI CJ - CURRENT TIME CARD & ATTENDANCE</text><text x='35' y='75' font-family='Arial' font-size='12' fill='%2364748b'>Period: Nov 01 - Nov 15, 2026 | Las Pi%C3%B1as City</text><line x1='35' y1='90' x2='665' y2='90' stroke='%232563eb' stroke-width='2'/><rect x='35' y='105' width='630' height='30' fill='%23eff6ff'/><text x='45' y='125' font-family='Arial' font-size='11' font-weight='bold' fill='%231e40af'>EMP ID   NAME                     WORK DAYS  OT HOURS  BONIFACIO HOLIDAY</text><text x='45' y='160' font-family='monospace' font-size='12' fill='%230f172a'>EMP-101  Marco Antonio Ramos      13.0       4.0       Yes (Nov 1)</text><text x='45' y='190' font-family='monospace' font-size='12' fill='%230f172a'>EMP-102  Althea Marie Bautista    12.0       2.5       Yes (Nov 1)</text><text x='45' y='220' font-family='monospace' font-size='12' fill='%230f172a'>EMP-103  Kenneth Joy Mendoza      13.0       0.0       No</text><text x='45' y='250' font-family='monospace' font-size='12' fill='%230f172a'>EMP-104  Jasmine Mae Tan          12.5       3.0       No</text><text x='45' y='280' font-family='monospace' font-size='12' fill='%230f172a'>EMP-105  Joshua Kyle Perez        11.0       8.0       No</text><line x1='35' y1='310' x2='665' y2='310' stroke='%23e2e8f0' stroke-width='1'/><text x='45' y='340' font-family='Arial' font-size='12' fill='%23475569'>Notes: Please verify Bonifacio day differential on Nov 1</text></svg>",
        clientNotes: "Please verify Bonifacio day differential on Nov 1",
        submittedAt: "2026-11-15 01:20 PM",
        status: "pending",
        finalReportName: "",
        finalReportType: "",
        finalReportData: "",
        auditedBy: "",
        completedAt: "",
        clientConfirmed: false,
        isResubmission: false,
        penaltyIncurred: 0
    }
];

const INITIAL_AUDIT_LOGS = [
    {
        id: "LOG-01",
        timestamp: "2026-11-01 10:40 AM",
        adminName: "Nelbert S. De Pedro",
        clientName: "Kape Ni CJ",
        period: "Oct 16 - Oct 31, 2026",
        fileName: "VeriPay_FINAL_Certified_KapeNiCJ_Oct2026B.pdf",
        notes: "Verified DOLE overtime rates, computed SSS/PhilHealth/PagIBIG brackets. Net: ₱46,890.00"
    },
    {
        id: "LOG-02",
        timestamp: "2026-10-31 04:10 PM",
        adminName: "Leejan Myca B. Dela Cruz",
        clientName: "Artisan Brews",
        period: "Oct 01 - Oct 31, 2026",
        fileName: "VeriPay_FINAL_ArtisanBrews_Oct2026.pdf",
        notes: "Basic Plan verification for 3 staff. Corrected PhilHealth ER share formula."
    }
];

const INITIAL_DELETED_USERS = [
    {
        id: "USR-099",
        name: "Brew Haven Cafe",
        email: "contact@brewhaven.ph",
        role: "client",
        password: "client",
        title: "Coffee Shop Owner",
        shopName: "Brew Haven Cafe",
        barangay: "Pamplona Tres",
        plan: "Basic Plan (₱2,500)",
        planTier: "Basic Plan",
        planPrice: 2500,
        planLimit: "1-3 Employees",
        schedule: "Monthly (End of Month)",
        isOnline: false,
        lastSignIn: "2026-10-28 03:12 PM",
        reauditFees: 0,
        filesSentCount: 0,
        deletedAt: "2026-11-02 11:30 AM"
    }
];

const INITIAL_NOTIFICATIONS = [
    {
        id: "NOTIF-01",
        targetRole: "client",
        targetUserId: "USR-005",
        title: "Payment Verified & Approved!",
        message: "Your GCash subscription payment of ₱3,500.00 (Ref: 902188392182) has been approved by Finance Officer Daniela Gerodiaz. Payroll file submission is now unlocked.",
        timestamp: "2026-11-01 10:15 AM",
        emailRecipient: "owner@kapenicj.ph",
        type: "payment_approved",
        read: false
    },
    {
        id: "NOTIF-02",
        targetRole: "client",
        targetUserId: "USR-005",
        title: "Final Certified Payroll Delivered",
        message: "Nelbert S. De Pedro delivered final certified report 'VeriPay_FINAL_Certified_KapeNiCJ_Oct2026B.png'. You can view and download it now.",
        timestamp: "2026-11-01 10:40 AM",
        emailRecipient: "owner@kapenicj.ph",
        type: "file_returned",
        read: false
    },
    {
        id: "NOTIF-03",
        targetRole: "admin",
        targetUserId: "all",
        title: "New Payroll File Submitted",
        message: "Kape Ni CJ uploaded 'KapeNiCJ_TimeRecords_Nov1-15.png' for cycle Nov 1 - 15, 2026. Ready for verification.",
        timestamp: "2026-11-15 01:20 PM",
        emailRecipient: "operations@veripay.ph",
        type: "file_submitted",
        read: false
    },
    {
        id: "NOTIF-04",
        targetRole: "admin",
        targetUserId: "all",
        title: "New Client Payment Submitted",
        message: "Artisan Brews Las Piñas submitted MariBank payment proof of ₱2,500.00 (Ref: MB-20261115-9921) awaiting audit decision.",
        timestamp: "2026-11-15 02:40 PM",
        emailRecipient: "finance@veripay.ph",
        type: "payment_submitted",
        read: false
    }
];

const INITIAL_RATINGS = [
    {
        id: "RATE-101",
        clientId: "USR-005",
        shopName: "Kape Ni CJ",
        clientName: "Christian J.",
        barangay: "Talon Dos",
        stars: 5,
        review: "VeriPay's DOLE holiday compliance and night differential checks saved us from major payroll computation errors. Turnaround is fast and our 5 baristas always get paid on time!",
        category: "Audit Accuracy & Speed",
        date: "2026-11-16, 2:30 PM",
        status: "reviewed",
        superAdminNote: "Working smoothly. Barista attendance formulas and overtime verified."
    },
    {
        id: "RATE-102",
        clientId: "USR-006",
        shopName: "Artisan Brews Las Piñas",
        clientName: "Maria Santos",
        barangay: "BF Resort",
        stars: 5,
        review: "Auditing bi-weekly payroll for 6 baristas used to take half my weekends. The two-way file exchange makes payroll verification effortless.",
        category: "Platform Usability",
        date: "2026-11-14, 11:15 AM",
        status: "reviewed",
        superAdminNote: "Positive client feedback on MariBank payment approval and file exchange."
    },
    {
        id: "RATE-103",
        clientId: "USR-007",
        shopName: "Bean & Leaf Micro Cafe",
        clientName: "Rafael Cruz",
        barangay: "Pamplona Tres",
        stars: 4,
        review: "Accurate auditing and helpful admin notes. It would be great if the recalculation fee notification could arrive even faster, but overall reliable service!",
        category: "Areas to Improve",
        date: "2026-11-12, 4:45 PM",
        status: "action_needed",
        superAdminNote: "Identified Area to Improve: Expedite re-audit fee confirmation notifications."
    },
    {
        id: "RATE-104",
        clientId: "USR-008",
        shopName: "South Roasters Hub",
        clientName: "Camille Reyes",
        barangay: "Pulang Lupa Dos",
        stars: 5,
        review: "The ₱3,500 monthly rate is very reasonable for micro coffee shops. SSS and PhilHealth statutory deduction brackets are 100% compliant.",
        category: "DOLE & Statutory Compliance",
        date: "2026-11-10, 9:20 AM",
        status: "reviewed",
        superAdminNote: "Government remittance summaries checked and verified."
    }
];

function getStoredRatings() {
    return JSON.parse(localStorage.getItem('veripay_ratings') || JSON.stringify(INITIAL_RATINGS));
}
function setStoredRatings(ratings) {
    localStorage.setItem('veripay_ratings', JSON.stringify(ratings));
}

function getStoredDeletedUsers() {
    return JSON.parse(localStorage.getItem('veripay_deleted_users') || JSON.stringify(INITIAL_DELETED_USERS));
}
function setStoredDeletedUsers(users) {
    localStorage.setItem('veripay_deleted_users', JSON.stringify(users));
}

function getStoredClientDeletedSubmissions() {
    return JSON.parse(localStorage.getItem('veripay_client_deleted_submissions') || '[]');
}
function setStoredClientDeletedSubmissions(subs) {
    localStorage.setItem('veripay_client_deleted_submissions', JSON.stringify(subs));
}

function getStoredNotifications() {
    return JSON.parse(localStorage.getItem('veripay_notifications') || JSON.stringify(INITIAL_NOTIFICATIONS));
}
function setStoredNotifications(notifs) {
    localStorage.setItem('veripay_notifications', JSON.stringify(notifs));
}

// =========================================================================
// EMAILJS CONFIGURATION (Real Gmail OTP & Notification Delivery)
// Get these 3 IDs from https://dashboard.emailjs.com/
// =========================================================================
const EMAILJS_CONFIG = {
    publicKey: "2ODRdaC0DQxNfMBab",
    serviceId: "service_smaqcah",
    templateId: "template_x8s92uj"
};

function getEmailJsConfig() {
    try {
        const saved = localStorage.getItem('veripay_emailjs_config');
        if (saved) {
            const parsed = JSON.parse(saved);
            if (parsed && parsed.publicKey && parsed.serviceId && parsed.templateId) {
                return parsed;
            }
        }
    } catch (e) { }
    return EMAILJS_CONFIG;
}

function isEmailJsConfigured() {
    const cfg = getEmailJsConfig();
    return Boolean(
        cfg &&
        cfg.publicKey && !cfg.publicKey.includes('YOUR_') &&
        cfg.serviceId && !cfg.serviceId.includes('YOUR_') &&
        cfg.templateId && !cfg.templateId.includes('YOUR_') &&
        typeof emailjs !== 'undefined'
    );
}

async function sendRealEmailViaEmailJS({ toEmail, toName, subject, message, otpCode }) {
    if (!toEmail || !toEmail.includes('@')) {
        return { sent: false, reason: 'Invalid email address.' };
    }
    const cfg = getEmailJsConfig();
    if (typeof emailjs === 'undefined') {
        return { sent: false, reason: 'EmailJS SDK failed to load. Check internet connection or ad-blocker.' };
    }
    if (!isEmailJsConfigured()) {
        return { sent: false, reason: 'EmailJS keys are not configured.' };
    }
    try {
        const templateParams = {
            to_email: toEmail,
            email: toEmail,
            to_name: toName || toEmail.split('@')[0],
            subject: subject || "VeriPay Notification",
            message: message || "",
            otp_code: otpCode || "",
            app_name: "VeriPay Payroll System"
        };
        const res = await emailjs.send(cfg.serviceId, cfg.templateId, templateParams, {
            publicKey: cfg.publicKey
        });
        console.log("EmailJS sent successfully:", res.status, res.text);
        return { sent: true, status: res.status };
    } catch (err) {
        console.error("EmailJS send error:", err);
        const reason = (err && (err.text || err.message)) || 'Failed to send email via EmailJS.';
        return { sent: false, reason };
    }
}

function addSystemNotification(notif) {
    const list = getStoredNotifications();
    const { skipAutoEmail, ...notifData } = notif || {};
    const newNotif = {
        id: "NOTIF-" + Math.floor(1000 + Math.random() * 9000),
        timestamp: new Date().toLocaleString('en-US', { dateStyle: 'short', timeStyle: 'short' }),
        read: false,
        readBy: [],
        ...notifData
    };
    list.unshift(newNotif);
    setStoredNotifications(list);

    // Automatically dispatch real email via EmailJS for non-OTP notifications to real email addresses
    if (!skipAutoEmail && newNotif.emailRecipient && !newNotif.emailRecipient.toLowerCase().endsWith('@veripay.ph')) {
        sendRealEmailViaEmailJS({
            toEmail: newNotif.emailRecipient,
            subject: newNotif.title || "VeriPay Notification",
            message: newNotif.message || "",
            otpCode: ""
        });
    }

    return newNotif;
}

// User-specific notification receiver filter
// Rules:
// 1. Clients ONLY receive notifications where they are the specific receiver (matching targetUserId or emailRecipient)
// 2. Admins receive all notifications when clients send a file or payment for verification (targetRole === 'admin' / targetUserId === 'all')
function isNotificationForUser(n, user) {
    if (!n || !user) return false;

    // 1. CLIENTS: strictly only visible to the intended recipient client
    if (user.role === 'client') {
        if (n.targetRole && n.targetRole !== 'client' && n.targetRole !== 'all') {
            return false;
        }
        const matchesUserId = n.targetUserId && n.targetUserId === user.id;
        const matchesEmail = n.emailRecipient && user.email && n.emailRecipient.trim().toLowerCase() === user.email.trim().toLowerCase();
        return !!(matchesUserId || matchesEmail);
    }

    // 2. ADMINS & SUPERADMINS: notify all admins when clients send a file or payment for verification
    if (user.role === 'admin' || user.role === 'superadmin') {
        if (n.targetRole === 'admin') return true;
        if (n.targetRole === 'all') return true;
        if (n.targetUserId === 'all') return true;
        if (user.role === 'superadmin' && n.targetRole === 'superadmin') return true;

        if (n.targetUserId && n.targetUserId === user.id) return true;
        if (n.emailRecipient && user.email && n.emailRecipient.trim().toLowerCase() === user.email.trim().toLowerCase()) return true;

        // Never show client personal messages (e.g. personal welcome, individual payment validation receipt) to admins
        if (n.targetRole === 'client') return false;

        return false;
    }

    return false;
}

function isNotificationReadByUser(n, user) {
    if (!n || !user) return true;
    if (Array.isArray(n.readBy)) {
        return n.readBy.includes(user.id);
    }
    return !!n.read;
}

function isNotificationTrashedByUser(n, user) {
    if (!n || !user) return false;
    if (Array.isArray(n.trashedBy)) {
        return n.trashedBy.includes(user.id);
    }
    return !!n.trashed;
}

function getStoredUsers() {
    return JSON.parse(localStorage.getItem('veripay_users') || JSON.stringify(INITIAL_USERS));
}
function setStoredUsers(users) {
    localStorage.setItem('veripay_users', JSON.stringify(users));
}

function getStoredEmployees() {
    return JSON.parse(localStorage.getItem('veripay_employees') || JSON.stringify(INITIAL_EMPLOYEES));
}
function setStoredEmployees(emps) {
    localStorage.setItem('veripay_employees', JSON.stringify(emps));
}

function getStoredPayments() {
    return JSON.parse(localStorage.getItem('veripay_payments') || JSON.stringify(INITIAL_PAYMENTS));
}
function setStoredPayments(payments) {
    try {
        localStorage.setItem('veripay_payments', JSON.stringify(payments));
    } catch (e) {
        console.warn("Storage quota exceeded in setStoredPayments. Optimizing stored proof data...", e);
        const sanitized = payments.map(p => {
            const copy = Object.assign({}, p);
            if (copy.proofFileData && copy.proofFileData.length > 50000) {
                copy.proofFileData = null;
            }
            return copy;
        });
        try {
            localStorage.setItem('veripay_payments', JSON.stringify(sanitized));
        } catch (err2) {
            console.error("Critical storage error:", err2);
        }
    }
}

window.__fileMemoryCache = window.__fileMemoryCache || {};

function getStoredSubmissions() {
    const subs = JSON.parse(localStorage.getItem('veripay_submissions') || JSON.stringify(INITIAL_SUBMISSIONS));
    subs.forEach(s => {
        if (!s.clientFileData && window.__fileMemoryCache['clientFile_' + s.id]) {
            s.clientFileData = window.__fileMemoryCache['clientFile_' + s.id];
        }
        if (!s.finalReportData && window.__fileMemoryCache['finalReport_' + s.id]) {
            s.finalReportData = window.__fileMemoryCache['finalReport_' + s.id];
        }
    });
    return subs;
}
function setStoredSubmissions(subs) {
    subs.forEach(s => {
        if (s.clientFileData) window.__fileMemoryCache['clientFile_' + s.id] = s.clientFileData;
        if (s.finalReportData) window.__fileMemoryCache['finalReport_' + s.id] = s.finalReportData;
    });
    try {
        localStorage.setItem('veripay_submissions', JSON.stringify(subs));
    } catch (e) {
        console.warn("Storage quota exceeded in setStoredSubmissions. Optimizing stored file data...", e);
        const sanitized = subs.map(s => {
            const copy = Object.assign({}, s);
            if (copy.clientFileData && copy.clientFileData.length > 50000) copy.clientFileData = null;
            if (copy.finalReportData && copy.finalReportData.length > 50000) copy.finalReportData = null;
            return copy;
        });
        try {
            localStorage.setItem('veripay_submissions', JSON.stringify(sanitized));
        } catch (err2) {
            console.error("Critical storage error:", err2);
        }
    }
}

function getStoredAuditLogs() {
    return JSON.parse(localStorage.getItem('veripay_auditlogs') || JSON.stringify(INITIAL_AUDIT_LOGS));
}
function setStoredAuditLogs(logs) {
    localStorage.setItem('veripay_auditlogs', JSON.stringify(logs));
}

// Session is TAB-SPECIFIC: sessionStorage (per tab) always takes priority so that
// signing in as Admin / Super Admin in another tab never replaces this tab's account.
// localStorage is only used as a fallback for a brand-new tab with no session yet.
function getSessionUser() {
    let raw = null;
    try {
        raw = sessionStorage.getItem('veripay_active_session');
    } catch (e) { }
    if (!raw) {
        try {
            raw = localStorage.getItem('veripay_active_session');
        } catch (e) { }
    }
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch (e) {
        return null;
    }
}

// Returns only this tab's own session (no cross-tab fallback)
function getTabSessionUser() {
    try {
        const raw = sessionStorage.getItem('veripay_active_session');
        return raw ? JSON.parse(raw) : null;
    } catch (e) {
        return null;
    }
}

function setSessionUser(user) {
    if (!user) return;
    try {
        localStorage.setItem('veripay_active_session', JSON.stringify(user));
    } catch (e) { }
    try {
        sessionStorage.setItem('veripay_active_session', JSON.stringify(user));
    } catch (e) { }
}

function clearSessionUser() {
    const user = getSessionUser();
    if (user) {
        const users = getStoredUsers();
        const found = users.find(u => u.id === user.id);
        if (found) {
            found.isOnline = false;
            setStoredUsers(users);
        }
    }
    try { localStorage.removeItem('veripay_active_session'); } catch (e) { }
    try { sessionStorage.removeItem('veripay_active_session'); } catch (e) { }
    try { localStorage.removeItem('veripay_active_view'); } catch (e) { }
}

function getClientLatestPayment(clientId) {
    const payments = getStoredPayments();
    return payments.find(p => p.clientId === clientId) || null;
}

function isClientPaymentValid(clientId) {
    const payments = getStoredPayments();
    const clientPayments = payments.filter(p => p.clientId === clientId);
    if (clientPayments.length === 0) return false;
    return clientPayments[0].status === 'valid';
}

// Helper to calculate exact next date when client can submit a file without charge
function calculateNextFreeSubmissionDate(user, submission) {
    if (!user) return "Next Scheduled Cycle Date";
    if (user.nextAllowedDate) return user.nextAllowedDate;

    const sched = user.schedule || "Semi-Monthly (15th & 30th)";
    const sLower = sched.toLowerCase();

    let refDate = new Date();
    if (submission && submission.endDate) {
        try {
            const p = submission.endDate.split('-');
            if (p.length === 3) {
                refDate = new Date(parseInt(p[0], 10), parseInt(p[1], 10) - 1, parseInt(p[2], 10));
            }
        } catch (e) { }
    }

    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // 1. WEEKLY
    if (sLower.includes('weekly') && !sLower.includes('bi-weekly') && !sLower.includes('two weeks')) {
        const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
        let targetDayIdx = 5; // Default Friday
        for (let i = 0; i < daysOfWeek.length; i++) {
            if (sLower.includes(daysOfWeek[i])) {
                targetDayIdx = i;
                break;
            }
        }
        const nextDate = new Date(refDate);
        nextDate.setDate(nextDate.getDate() + 7);
        const diff = (targetDayIdx - nextDate.getDay() + 7) % 7;
        nextDate.setDate(nextDate.getDate() + diff);
        const dayName = daysOfWeek[targetDayIdx].charAt(0).toUpperCase() + daysOfWeek[targetDayIdx].slice(1);
        return `${dayName}, ${shortMonths[nextDate.getMonth()]} ${nextDate.getDate()}, ${nextDate.getFullYear()}`;
    }

    // 2. BI-WEEKLY
    if (sLower.includes('bi-weekly') || sLower.includes('two weeks') || sLower.includes('every 2 weeks')) {
        const nextDate = new Date(refDate);
        nextDate.setDate(nextDate.getDate() + 14);
        return `${shortMonths[nextDate.getMonth()]} ${nextDate.getDate()}, ${nextDate.getFullYear()}`;
    }

    // 3. MONTHLY
    if (sLower.includes('monthly') && !sLower.includes('semi-monthly')) {
        const nextDate = new Date(refDate.getFullYear(), refDate.getMonth() + 1, 1);
        let dayNum = 30;
        const m = sched.match(/(\d+)(st|nd|rd|th)?/);
        if (m && m[1]) {
            dayNum = parseInt(m[1], 10);
        } else if (sLower.includes('end of month') || sLower.includes('last day')) {
            dayNum = new Date(nextDate.getFullYear(), nextDate.getMonth() + 1, 0).getDate();
        }
        const lastDayOfNextMonth = new Date(nextDate.getFullYear(), nextDate.getMonth() + 1, 0).getDate();
        const finalDay = Math.min(dayNum, lastDayOfNextMonth);
        return `${monthNames[nextDate.getMonth()]} ${finalDay}, ${nextDate.getFullYear()}`;
    }

    // 4. SEMI-MONTHLY (Default: 15th & 30th)
    let d1 = 15;
    let d2 = 30;
    const matches = sched.match(/(\d+)(st|nd|rd|th)?/g);
    if (matches && matches.length >= 2) {
        d1 = parseInt(matches[0], 10) || 15;
        d2 = parseInt(matches[1], 10) || 30;
    } else if (sLower.includes('end of month')) {
        d2 = 31;
    }

    const curDay = refDate.getDate();
    const curMonth = refDate.getMonth();
    const curYear = refDate.getFullYear();

    if (curDay < d1) {
        return `${monthNames[curMonth]} ${d1}, ${curYear}`;
    } else if (curDay < d2) {
        const lastDayOfMonth = new Date(curYear, curMonth + 1, 0).getDate();
        const secondTarget = Math.min(d2, lastDayOfMonth);
        return `${monthNames[curMonth]} ${secondTarget}, ${curYear}`;
    } else {
        const nextMonthDate = new Date(curYear, curMonth + 1, d1);
        return `${monthNames[nextMonthDate.getMonth()]} ${d1}, ${nextMonthDate.getFullYear()}`;
    }
}

function getClientSubmissionEligibility(user) {
    if (!user) return { canSubmit: false, reason: 'unauthenticated', message: 'User not signed in.' };
    const payments = getStoredPayments();
    const userPayments = payments.filter(p => p.clientId === user.id);

    if (userPayments.length === 0) {
        return {
            canSubmit: false,
            reason: 'no_payment',
            message: 'No subscription payment found. Please submit your monthly payment proof to unlock payroll submission.'
        };
    }

    // Check for pending or invalid ₱350 reaudit fee payments
    const pendingReauditPay = userPayments.find(p => p.status === 'pending' && (p.paymentType === 'reaudit_fee' || (p.amount === 350 && p.plan && p.plan.includes('Re-audit'))));
    const invalidReauditPay = userPayments.find(p => p.status === 'invalid' && (p.paymentType === 'reaudit_fee' || (p.amount === 350 && p.plan && p.plan.includes('Re-audit'))));

    // Subscription payment (regular monthly tier)
    const subscriptionPay = userPayments.find(p => p.paymentType !== 'reaudit_fee' && (!p.plan || !p.plan.includes('Re-audit')));

    if (!subscriptionPay) {
        return {
            canSubmit: false,
            reason: 'no_payment',
            message: 'No subscription payment found. Please submit your monthly payment proof to unlock payroll submission.'
        };
    }

    if (subscriptionPay.status === 'pending') {
        return {
            canSubmit: false,
            reason: 'payment_pending',
            payment: subscriptionPay,
            message: `Your payment of ₱${Number(subscriptionPay.amount).toLocaleString()} via ${subscriptionPay.method} (Ref: ${subscriptionPay.referenceNumber}) is currently being reviewed by the VeriPay Admin. We will send you an email once the payment is approved.`
        };
    }

    if (subscriptionPay.status === 'invalid') {
        return {
            canSubmit: false,
            reason: 'payment_invalid',
            payment: subscriptionPay,
            message: `Your payment reference was marked INVALID by admin (${subscriptionPay.adminRemarks || 'Reference mismatch'}). Please submit a valid payment to proceed.`
        };
    }

    // Monthly subscription is valid! Now check submissions history
    const submissions = getStoredSubmissions();
    const clientSubs = submissions.filter(s => s.clientId === user.id);
    if (clientSubs.length === 0) {
        return { canSubmit: true, reason: 'eligible', isFirst: true };
    }

    const latestSub = clientSubs[0];

    // Check if ₱350 recalculation fee payment is pending or invalid
    if (pendingReauditPay) {
        return {
            canSubmit: false,
            reason: 'reaudit_fee_pending',
            payment: pendingReauditPay,
            submission: latestSub,
            message: `Your ₱350 recalculation fee payment via ${pendingReauditPay.method} (Ref: ${pendingReauditPay.referenceNumber}) is currently being reviewed by the VeriPay Admin. We will send you an email once the payment is approved. Once verified by our audit team, you will be able to upload your revised payroll file.`
        };
    }

    if (invalidReauditPay && !latestSub.unlockedForReaudit) {
        return {
            canSubmit: false,
            reason: 'reaudit_fee_invalid',
            payment: invalidReauditPay,
            submission: latestSub,
            message: `Your ₱350 recalculation fee payment (Ref: ${invalidReauditPay.referenceNumber}) was marked INVALID by admin (${invalidReauditPay.adminRemarks || 'Payment reference mismatch'}). Please submit a valid ₱350 payment to unlock re-audit.`
        };
    }

    // If unlocked by approved ₱350 fee
    if (latestSub.unlockedForReaudit) {
        return { canSubmit: true, reason: 'unlocked_by_fee', isReaudit: true, targetSubId: latestSub.id };
    }

    const nextFreeDate = calculateNextFreeSubmissionDate(user, latestSub);

    // If latest file is pending review / auditing by admin
    if (latestSub.status === 'pending' || latestSub.status === 'resubmitted') {
        return {
            canSubmit: false,
            reason: 'audit_in_progress',
            submission: latestSub,
            nextAvailableDate: nextFreeDate,
            message: `Your file is under review, please wait for ${nextFreeDate} or pay 350 pesos to upload a new file.`
        };
    }

    if (latestSub.status === 'completed') {
        return {
            canSubmit: false,
            reason: 'cycle_completed_locked',
            submission: latestSub,
            nextAvailableDate: nextFreeDate,
            message: `Final Payroll Report has been delivered by VeriPay Admin. The payroll submission is closed until ${nextFreeDate}. Need to submit revisions before then? Pay ₱350 recalculation fee to unlock immediately.`
        };
    }

    return { canSubmit: true, reason: 'eligible' };
}

// Helper to get active subscription cycle details (30 days from approval date)
function getClientSubscriptionCycle(userId) {
    if (!userId) return null;
    const payments = getStoredPayments();
    // Find valid subscription payments for this client (excluding reaudit 350 fee)
    const validSubPay = payments.find(p => p.clientId === userId && p.status === 'valid' && p.paymentType !== 'reaudit_fee' && p.amount !== 350 && (!p.plan || !p.plan.includes('Re-audit')));

    if (!validSubPay) {
        return null; // Not subscribed yet!
    }

    // Start date is date approved by admin (or reviewedAt / submittedAt)
    let approvedDate = new Date(validSubPay.approvedAt || validSubPay.reviewedAt || validSubPay.submittedAt);
    if (isNaN(approvedDate.getTime())) {
        approvedDate = new Date();
    }

    // 30 days per 1 month
    const durationMs = 30 * 24 * 60 * 60 * 1000;
    const expiryDate = new Date(approvedDate.getTime() + durationMs);
    const now = new Date();
    const diffMs = expiryDate.getTime() - now.getTime();
    const remainingDays = Math.max(0, Math.ceil(diffMs / (24 * 60 * 60 * 1000)));
    const isExpired = diffMs <= 0;

    return {
        isSubscribed: true,
        payment: validSubPay,
        approvedDate: approvedDate,
        approvedDateFormatted: approvedDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        expiryDate: expiryDate,
        expiryDateFormatted: expiryDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        remainingDays: remainingDays,
        isExpired: isExpired
    };
}

// Download generator function that triggers actual browser download as the exact original file
function triggerBrowserDownload(fileName, fileDataUrlOrText, mimeType = 'text/plain') {
    if (!fileDataUrlOrText) {
        console.warn("triggerBrowserDownload called with empty data for:", fileName);
        return;
    }
    let url = fileDataUrlOrText;
    let revokeNeeded = false;

    if (typeof fileDataUrlOrText === 'string' && !fileDataUrlOrText.startsWith('data:') && !fileDataUrlOrText.startsWith('blob:')) {
        const blob = new Blob([fileDataUrlOrText], { type: mimeType });
        url = URL.createObjectURL(blob);
        revokeNeeded = true;
    }

    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
        document.body.removeChild(a);
        if (revokeNeeded) {
            URL.revokeObjectURL(url);
        }
    }, 200);
}
