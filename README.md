This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Fonctionnalités du Formulaire de Contact

Le formulaire de contact inclut maintenant :

- ✅ **Champ Nom** avec icône User
- ✅ **Champ Email** avec icône Mail
- ✅ **Champ Téléphone** avec sélecteur d'indicatif international (PhoneInput)
- ✅ **Champ Message** avec icône MessageSquare
- ✅ **Messages d'erreur** stylés avec icônes
- ✅ **Feedback visuel** pour le succès/échec d'envoi
- ✅ **Bouton d'envoi** avec animation de chargement

### Configuration requise

Pour que le formulaire fonctionne, vous devez configurer les variables d'environnement suivantes dans un fichier `.env.local` :

```env
# Configuration Gmail pour l'envoi d'emails
EMAIL_USER=votre-email@gmail.com
EMAIL_PASS=votre-mot-de-passe-app
```

### Instructions pour configurer Gmail App Password :

1. Activez la validation en deux étapes sur votre compte Google
2. Générez un mot de passe d'application : https://myaccount.google.com/apppasswords
3. Utilisez le mot de passe généré comme `EMAIL_PASS`

**Important** : Ne jamais commiter le fichier `.env.local` dans Git !

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
