const BRAND = {
    primary: "#0B4A8B",
    accent: "#2F80ED",
    gradient: "linear-gradient(135deg, #0B4A8B, #2F80ED)",
    bg: "#f4f8fc",
    card: "#ffffff",
    text: "#1a1a2e",
    muted: "#6b7280",
    border: "#e5e7eb",
    success: "#10b981",
};

const FONT = 'font-family: Arial, Helvetica, sans-serif;';

function baseWrap(content: string) {
    return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head><body style="margin:0;padding:0;background:${BRAND.bg};${FONT}">${content}</body></html>`;
}

function socialRow() {
    return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:24px auto 0;"><tr>
<td style="padding:0 6px;"><a href="#" style="text-decoration:none;"><img src="https://img.icons8.com/ios-filled/24/0B4A8B/linkedin.png" width="20" height="20" alt="LinkedIn"></a></td>
<td style="padding:0 6px;"><a href="#" style="text-decoration:none;"><img src="https://img.icons8.com/ios-filled/24/0B4A8B/instagram-new.png" width="20" height="20" alt="Instagram"></a></td>
<td style="padding:0 6px;"><a href="#" style="text-decoration:none;"><img src="https://img.icons8.com/ios-filled/24/0B4A8B/facebook-new.png" width="20" height="20" alt="Facebook"></a></td>
<td style="padding:0 6px;"><a href="#" style="text-decoration:none;"><img src="https://img.icons8.com/ios-filled/24/0B4A8B/x.png" width="20" height="20" alt="X"></a></td>
</tr></table>`;
}

function infoRow(label: string, value: string) {
    return `<tr><td style="padding:10px 16px;font-weight:600;color:${BRAND.muted};font-size:13px;text-transform:uppercase;letter-spacing:0.5px;border-bottom:1px solid ${BRAND.border};width:160px;vertical-align:top;">${label}</td><td style="padding:10px 16px;color:${BRAND.text};font-size:14px;border-bottom:1px solid ${BRAND.border};">${value}</td></tr>`;
}

/* ─── Admin Email ─── */
export function adminEmailTemplate(data: {
    fullName: string;
    companyName: string;
    phone: string;
    email: string;
    businessType: string;
    subject: string;
    message: string;
    date: string;
    ip: string;
    browser: string;
}) {
    const rows = [
        infoRow("Full Name", data.fullName),
        infoRow("Company", data.companyName || "—"),
        infoRow("Phone", data.phone),
        infoRow("Email", data.email),
        infoRow("Business Type", data.businessType),
        infoRow("Subject", data.subject),
        infoRow("Message", data.message.replace(/\n/g, "<br>")),
        infoRow("Date", data.date),
        infoRow("IP Address", data.ip),
        infoRow("Browser", data.browser),
    ].join("");

    return baseWrap(`
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
  <tr><td style="background:${BRAND.gradient};padding:32px 40px;border-radius:16px 16px 0 0;text-align:center;">
    <h1 style="margin:0;color:#fff;font-size:22px;font-weight:700;${FONT}">New Contact Inquiry</h1>
    <p style="margin:6px 0 0;color:rgba(255,255,255,0.85);font-size:13px;${FONT}">Zalloco Industries — Website Contact Form</p>
  </td></tr>
  <tr><td style="background:${BRAND.card};padding:28px 32px 32px;border:1px solid ${BRAND.border};border-top:none;border-radius:0 0 16px 16px;">
    <p style="margin:0 0 20px;color:${BRAND.text};font-size:15px;${FONT}">You have received a new inquiry from your website. Details below:</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BRAND.border};border-radius:10px;overflow:hidden;border-collapse:separate;">
      ${rows}
    </table>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:24px;">
      <tr><td style="text-align:center;">
        <a href="mailto:${data.email}?subject=Re: ${data.subject}" style="display:inline-block;background:${BRAND.gradient};color:#fff;padding:14px 32px;border-radius:10px;text-decoration:none;font-weight:600;font-size:14px;${FONT}">Reply to Customer</a>
      </td></tr>
    </table>
  </td></tr>
  <tr><td style="text-align:center;padding:24px 0 0;">
    <p style="margin:0;color:${BRAND.muted};font-size:12px;${FONT}">&copy; ${new Date().getFullYear()} Zalloco Industries Private Limited. All rights reserved.</p>
  </td></tr>
</table>`);
}

/* ─── Auto-Reply Email ─── */
export function autoReplyTemplate(data: {
    fullName: string;
    companyName: string;
    phone: string;
    email: string;
    businessType: string;
    subject: string;
    message: string;
}) {
    const rows = [
        infoRow("Business Type", data.businessType),
        infoRow("Subject", data.subject),
        infoRow("Message", data.message.replace(/\n/g, "<br>")),
    ].join("");

    return baseWrap(`
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:600px;margin:0 auto;">
  <tr><td style="background:${BRAND.gradient};padding:36px 40px;border-radius:16px 16px 0 0;text-align:center;">
    <h1 style="margin:0;color:#fff;font-size:24px;font-weight:700;${FONT}">Thank You, ${data.fullName}!</h1>
    <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:14px;${FONT}">We have received your inquiry</p>
  </td></tr>
  <tr><td style="background:${BRAND.card};padding:32px 36px;border:1px solid ${BRAND.border};border-top:none;border-radius:0 0 16px 16px;">
    <p style="margin:0 0 20px;color:${BRAND.text};font-size:15px;line-height:1.6;${FONT}">Dear <strong>${data.fullName}</strong>,</p>
    <p style="margin:0 0 24px;color:${BRAND.text};font-size:15px;line-height:1.6;${FONT}">Thank you for reaching out to <strong>Zalloco Industries</strong>. We have received your inquiry and our team will review it shortly.</p>

    <div style="background:${BRAND.bg};border-radius:12px;padding:24px 28px;margin-bottom:24px;">
      <h3 style="margin:0 0 16px;color:${BRAND.primary};font-size:15px;font-weight:700;${FONT}">Your Submission Summary</h3>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border:1px solid ${BRAND.border};border-radius:10px;overflow:hidden;border-collapse:separate;">
        ${rows}
      </table>
    </div>

    <p style="margin:0 0 20px;color:${BRAND.text};font-size:15px;line-height:1.6;${FONT}">Our business hours are <strong>Monday – Saturday, 9:00 AM – 5:00 PM (Sunday Closed)</strong>. We typically respond within 24 business hours.</p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td style="text-align:center;padding:4px;">
          <a href="https://wa.me/918437213143" style="display:inline-block;background:${BRAND.success};color:#fff;padding:12px 28px;border-radius:10px;text-decoration:none;font-weight:600;font-size:13px;${FONT}">WhatsApp Us</a>
        </td>
        <td style="text-align:center;padding:4px;">
          <a href="mailto:Zallocoindustrys@gmail.com" style="display:inline-block;background:${BRAND.primary};color:#fff;padding:12px 28px;border-radius:10px;text-decoration:none;font-weight:600;font-size:13px;${FONT}">Email Us</a>
        </td>
      </tr>
    </table>
  </td></tr>
  <tr><td style="text-align:center;padding:20px 0 0;">
    <p style="margin:0 0 6px;color:${BRAND.muted};font-size:12px;${FONT}"><strong>Zalloco Industries Private Limited</strong></p>
    <p style="margin:0;color:${BRAND.muted};font-size:11px;${FONT}"># V.P.O. KHANDOOR, MOHIE, LUDHIANA-141103 (Punjab) India</p>
    ${socialRow()}
    <p style="margin:16px 0 0;color:${BRAND.muted};font-size:11px;${FONT}">&copy; ${new Date().getFullYear()} Zalloco Industries. All rights reserved.</p>
  </td></tr>
</table>`);
}
