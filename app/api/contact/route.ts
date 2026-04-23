import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Champs obligatoires manquants.' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Adresse email invalide.' }, { status: 400 });
    }

    // Email sending disabled — install resend and add RESEND_API_KEY to enable
    console.log('[Contact] New message from', name, email);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Contact API]', err);
    return NextResponse.json({ error: 'Erreur lors de l\'envoi. Réessayez.' }, { status: 500 });
  }
}

function buildEmailHtml({
  name,
  email,
  type,
  message,
}: {
  name: string;
  email: string;
  type: string;
  message: string;
}) {
  const date = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nouveau message — Aexo</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.07);">

          <!-- Header -->
          <tr>
            <td style="background:#0d0d0f;padding:28px 36px;">
              <p style="margin:0;color:#ffffff;font-size:22px;font-weight:700;letter-spacing:-0.5px;">aexo<span style="color:rgba(255,255,255,0.25);">.</span></p>
              <p style="margin:6px 0 0;color:rgba(255,255,255,0.4);font-size:13px;">Nouveau message prospect</p>
            </td>
          </tr>

          <!-- Alert banner -->
          <tr>
            <td style="background:#18181b;padding:14px 36px;">
              <p style="margin:0;color:rgba(255,255,255,0.6);font-size:12px;letter-spacing:0.08em;text-transform:uppercase;">
                Reçu le ${date}
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:36px;">

              <!-- Fields -->
              <table width="100%" cellpadding="0" cellspacing="0">

                <!-- Name -->
                <tr>
                  <td style="padding-bottom:20px;border-bottom:1px solid #f1f1f1;">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#a1a1aa;text-transform:uppercase;letter-spacing:0.1em;">Nom</p>
                    <p style="margin:0;font-size:17px;font-weight:600;color:#09090b;">${escapeHtml(name)}</p>
                  </td>
                </tr>

                <!-- Email -->
                <tr>
                  <td style="padding:20px 0;border-bottom:1px solid #f1f1f1;">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#a1a1aa;text-transform:uppercase;letter-spacing:0.1em;">Email</p>
                    <a href="mailto:${escapeHtml(email)}" style="margin:0;font-size:16px;color:#6366f1;text-decoration:none;font-weight:500;">${escapeHtml(email)}</a>
                  </td>
                </tr>

                <!-- Type -->
                ${type ? `
                <tr>
                  <td style="padding:20px 0;border-bottom:1px solid #f1f1f1;">
                    <p style="margin:0 0 4px;font-size:11px;font-weight:600;color:#a1a1aa;text-transform:uppercase;letter-spacing:0.1em;">Type de projet</p>
                    <span style="display:inline-block;background:#f4f4f5;color:#18181b;font-size:13px;font-weight:600;padding:5px 12px;border-radius:20px;">${escapeHtml(type)}</span>
                  </td>
                </tr>` : ''}

                <!-- Message -->
                <tr>
                  <td style="padding-top:20px;">
                    <p style="margin:0 0 10px;font-size:11px;font-weight:600;color:#a1a1aa;text-transform:uppercase;letter-spacing:0.1em;">Description du projet</p>
                    <div style="background:#fafafa;border:1px solid #f1f1f1;border-radius:10px;padding:16px 20px;">
                      <p style="margin:0;font-size:15px;color:#3f3f46;line-height:1.7;white-space:pre-wrap;">${escapeHtml(message)}</p>
                    </div>
                  </td>
                </tr>

              </table>

              <!-- CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:32px;">
                <tr>
                  <td>
                    <a href="mailto:${escapeHtml(email)}"
                       style="display:inline-block;background:#09090b;color:#ffffff;font-size:14px;font-weight:600;padding:13px 24px;border-radius:10px;text-decoration:none;">
                      Répondre à ${escapeHtml(name)} →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#fafafa;border-top:1px solid #f1f1f1;padding:20px 36px;">
              <p style="margin:0;font-size:12px;color:#a1a1aa;">
                Ce message a été envoyé depuis le formulaire de contact du site <strong style="color:#71717a;">aexoweb.com</strong>.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
