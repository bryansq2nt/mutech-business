# Configuración de Variables de Entorno

Para que el formulario de aplicación envíe emails correctamente, necesitas configurar las siguientes variables de entorno en un archivo `.env.local` en la raíz del proyecto.

## Variables Requeridas

```env
# SMTP Server Host (e.g., smtp.gmail.com, smtp.mailtrap.io)
SMTP_HOST=your-smtp-host.com

# SMTP Port (commonly 465 for SSL or 587 for TLS)
SMTP_PORT=465

# SMTP Username (usually your email address)
SMTP_USER=your-email@example.com

# SMTP Password (use app-specific password for Gmail)
SMTP_PASS=your-smtp-password

# From Email Address (sender)
SMTP_FROM=your-email@example.com

# To Email Address (recipient - where applications will be sent)
SMTP_TO=recipient@example.com
```

## Ejemplo con Gmail

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=tu-email@gmail.com
SMTP_PASS=tu-app-specific-password
SMTP_FROM=tu-email@gmail.com
SMTP_TO=destinatario@example.com
```

## Notas

- Para Gmail, necesitas usar una "App Password" en lugar de tu contraseña normal
- El archivo `.env.local` no debe subirse al repositorio (ya está en .gitignore)
- Reinicia el servidor de desarrollo después de crear o modificar `.env.local`

