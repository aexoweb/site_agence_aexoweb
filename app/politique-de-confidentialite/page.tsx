import { LegalLayout } from '@/components/ui/legal-layout';

export const metadata = {
  title: 'Politique de confidentialité',
  description: 'Politique de confidentialité et de protection des données personnelles d\'Aexo, conformément au RGPD.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://aexoweb.com/politique-de-confidentialite' },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalLayout
      title="Politique de confidentialité"
      subtitle="Protection de vos données personnelles, conformément au Règlement Général sur la Protection des Données (RGPD) n° 2016/679."
      updatedAt="22 avril 2026"
      sections={[
        {
          title: 'Responsable du traitement',
          content: (
            <>
              <p>Le responsable du traitement des données personnelles collectées sur ce site est :</p>
              <ul className="mt-3 space-y-1.5 list-none">
                <li><span className="text-foreground/60">Société :</span> <strong className="text-foreground">Aexo</strong></li>
                <li><span className="text-foreground/60">Adresse :</span> Paris, France</li>
                <li>
                  <span className="text-foreground/60">Email :</span>{' '}
                  <a href="mailto:contact@aexoweb.com" className="text-foreground underline underline-offset-2 hover:text-foreground/70 transition-colors">
                    contact@aexoweb.com
                  </a>
                </li>
              </ul>
            </>
          ),
        },
        {
          title: 'Données collectées',
          content: (
            <>
              <p>Nous collectons uniquement les données strictement nécessaires au fonctionnement du site et à la relation commerciale :</p>
              <div className="mt-4 space-y-4">
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <p className="font-semibold text-foreground mb-1">Formulaire de contact</p>
                  <p>Nom et prénom, adresse e-mail, type de projet, description du besoin.</p>
                  <p className="mt-1 text-muted-foreground/60 text-xs">Finalité : répondre à votre demande de devis ou d'information.</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <p className="font-semibold text-foreground mb-1">Données de navigation</p>
                  <p>Adresse IP, type et version de navigateur, pages visitées, durée de visite.</p>
                  <p className="mt-1 text-muted-foreground/60 text-xs">Finalité : sécurité et amélioration des performances du site.</p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <p className="font-semibold text-foreground mb-1">Cookies</p>
                  <p>Préférences d'affichage (thème clair/sombre), consentement aux cookies.</p>
                  <p className="mt-1 text-muted-foreground/60 text-xs">Finalité : personnalisation de l'expérience utilisateur.</p>
                </div>
              </div>
              <p className="mt-4">
                Nous ne collectons <strong className="text-foreground">aucune donnée sensible</strong> au sens de l'article 9 du RGPD
                (origine raciale, opinions politiques, données de santé, etc.).
              </p>
            </>
          ),
        },
        {
          title: 'Finalités et bases légales du traitement',
          content: (
            <div className="space-y-3">
              {[
                {
                  finalite: 'Répondre à vos demandes de contact',
                  base: 'Intérêt légitime (art. 6.1.f RGPD) / Exécution de mesures précontractuelles (art. 6.1.b)',
                },
                {
                  finalite: 'Gestion de la relation client et envoi de devis',
                  base: 'Exécution du contrat (art. 6.1.b RGPD)',
                },
                {
                  finalite: 'Amélioration du site et statistiques de navigation',
                  base: 'Intérêt légitime (art. 6.1.f RGPD)',
                },
                {
                  finalite: 'Respect des obligations légales et comptables',
                  base: 'Obligation légale (art. 6.1.c RGPD)',
                },
                {
                  finalite: 'Dépôt de cookies non essentiels',
                  base: 'Consentement (art. 6.1.a RGPD)',
                },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-muted/50 border border-border">
                  <p className="font-semibold text-foreground text-xs uppercase tracking-wide mb-1">{item.finalite}</p>
                  <p className="text-xs text-muted-foreground/70">{item.base}</p>
                </div>
              ))}
            </div>
          ),
        },
        {
          title: 'Durée de conservation',
          content: (
            <>
              <div className="space-y-2">
                {[
                  { type: 'Demande de devis sans suite (aucune réponse du client)', duree: '30 jours après le dernier contact' },
                  { type: 'Données de contact / prospects engagés', duree: '3 ans à compter du dernier contact' },
                  { type: 'Données clients (contrats, factures)', duree: '10 ans (obligation comptable)' },
                  { type: 'Données de navigation / logs', duree: '12 mois maximum' },
                  { type: 'Cookies de consentement', duree: '6 mois' },
                  { type: 'Cookies fonctionnels (thème)', duree: '12 mois' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 py-3 border-b border-border last:border-0">
                    <span className="text-foreground flex-1">{item.type}</span>
                    <span className="text-muted-foreground/70 text-right shrink-0 text-xs">{item.duree}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Lorsqu'une demande de devis ne donne pas lieu à une suite commerciale (absence de réponse ou de
                confirmation de la part du prospect), les données personnelles transmises via le formulaire de contact
                sont <strong className="text-foreground">supprimées dans un délai de 30 jours</strong> à compter du
                dernier échange.
              </p>
            </>
          ),
        },
        {
          title: 'Destinataires des données',
          content: (
            <>
              <p>
                Vos données personnelles sont destinées exclusivement à <strong className="text-foreground">Aexo</strong>.
                Elles ne sont ni vendues, ni louées, ni cédées à des tiers à des fins commerciales.
              </p>
              <p className="mt-3">
                Dans le cadre de l'exploitation du site, certains sous-traitants techniques peuvent avoir accès
                à vos données, dans la stricte limite de leurs missions :
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong className="text-foreground">Vercel Inc.</strong> — hébergement du site (États-Unis, couvert par les clauses contractuelles types de la Commission européenne)</li>
                <li><strong className="text-foreground">Prestataires de messagerie</strong> — traitement des formulaires de contact</li>
              </ul>
              <p className="mt-3">
                Ces sous-traitants sont soumis à des obligations contractuelles de confidentialité et de sécurité
                conformes au RGPD.
              </p>
            </>
          ),
        },
        {
          title: 'Transferts hors Union européenne',
          content: (
            <p>
              L'hébergement du site est assuré par Vercel Inc., société établie aux États-Unis. Ce transfert est
              encadré par les <strong className="text-foreground">clauses contractuelles types</strong> approuvées par
              la Commission européenne (décision 2021/914), garantissant un niveau de protection adéquat de vos données.
            </p>
          ),
        },
        {
          title: 'Vos droits (RGPD)',
          content: (
            <>
              <p>
                Conformément aux articles 15 à 22 du RGPD, vous disposez des droits suivants sur vos données personnelles :
              </p>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { droit: '✦ Droit d\'accès', desc: 'Obtenir une copie de vos données' },
                  { droit: '✦ Droit de rectification', desc: 'Corriger des données inexactes' },
                  { droit: '✦ Droit à l\'effacement', desc: 'Supprimer vos données ("droit à l\'oubli")' },
                  { droit: '✦ Droit à la portabilité', desc: 'Recevoir vos données dans un format structuré' },
                  { droit: '✦ Droit d\'opposition', desc: 'Vous opposer au traitement de vos données' },
                  { droit: '✦ Droit de limitation', desc: 'Limiter le traitement de vos données' },
                  { droit: '✦ Droit de retrait', desc: 'Retirer votre consentement à tout moment' },
                  { droit: '✦ Directives post-mortem', desc: 'Définir le sort de vos données après décès' },
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-muted/50 border border-border">
                    <p className="font-semibold text-foreground text-xs mb-0.5">{item.droit}</p>
                    <p className="text-xs text-muted-foreground/70">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4">
                Pour exercer ces droits, contactez-nous par e-mail à{' '}
                <a href="mailto:contact@aexoweb.com" className="text-foreground underline underline-offset-2 hover:text-foreground/70 transition-colors">
                  contact@aexoweb.com
                </a>{' '}
                en joignant une copie de votre pièce d'identité. Nous répondrons dans un délai maximum de{' '}
                <strong className="text-foreground">30 jours</strong>.
              </p>
              <p className="mt-3">
                En cas de réponse insatisfaisante, vous pouvez déposer une réclamation auprès de la{' '}
                <strong className="text-foreground">CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) :{' '}
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-2 hover:text-foreground/70 transition-colors">
                  www.cnil.fr
                </a>
                {' '}— 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07.
              </p>
            </>
          ),
        },
        {
          title: 'Sécurité des données',
          content: (
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos
              données personnelles contre tout accès non autorisé, perte, destruction ou divulgation accidentelle :
              chiffrement HTTPS (TLS), accès restreints, hébergement sécurisé, et revue régulière des accès.
            </p>
          ),
        },
        {
          title: 'Politique en matière de cookies',
          content: (
            <>
              <p id="cookies">
                Un cookie est un petit fichier texte déposé sur votre terminal lors de la visite d'un site.
                Il permet de mémoriser des informations relatives à votre navigation.
              </p>

              <div className="mt-4 space-y-3">
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <p className="font-semibold text-foreground mb-1">Cookies strictement nécessaires</p>
                  <p>Indispensables au fonctionnement du site (préférences de thème, consentement cookies). <strong className="text-foreground">Ne nécessitent pas votre consentement.</strong></p>
                </div>
                <div className="p-4 rounded-xl bg-muted/50 border border-border">
                  <p className="font-semibold text-foreground mb-1">Cookies de performance / analytiques</p>
                  <p>Nous permettent de comprendre comment vous utilisez le site afin de l'améliorer. <strong className="text-foreground">Déposés uniquement avec votre consentement.</strong></p>
                </div>
              </div>

              <p className="mt-4">
                Vous pouvez à tout moment modifier vos préférences en cliquant sur "Gérer les cookies"
                en bas de page, ou en configurant votre navigateur pour bloquer les cookies.
              </p>
              <p className="mt-3">
                Notez que la désactivation de certains cookies peut affecter votre expérience de navigation.
                Pour en savoir plus, consultez le site de la CNIL :{' '}
                <a href="https://www.cnil.fr/fr/cookies-et-autres-traceurs" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-2 hover:text-foreground/70 transition-colors">
                  cnil.fr/cookies
                </a>.
              </p>
            </>
          ),
        },
        {
          title: 'Modifications de la présente politique',
          content: (
            <p>
              Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment afin de
              la maintenir en conformité avec la réglementation en vigueur ou pour refléter nos pratiques actuelles.
              La date de mise à jour est indiquée en haut de cette page. En cas de modification substantielle,
              nous vous en informerons par tout moyen approprié.
            </p>
          ),
        },
        {
          title: 'Contact et délégué à la protection des données',
          content: (
            <>
              <p>
                Pour toute question relative à cette politique ou pour exercer vos droits, contactez-nous :
              </p>
              <ul className="mt-3 space-y-1.5 list-none">
                <li>
                  <span className="text-foreground/60">E-mail :</span>{' '}
                  <a href="mailto:contact@aexoweb.com" className="text-foreground underline underline-offset-2 hover:text-foreground/70 transition-colors">
                    contact@aexoweb.com
                  </a>
                </li>
                <li><span className="text-foreground/60">Adresse :</span> Aexo, Paris, France</li>
                <li><span className="text-foreground/60">Délai de réponse :</span> 30 jours maximum</li>
              </ul>
            </>
          ),
        },
      ]}
    />
  );
}