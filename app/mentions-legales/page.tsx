import { LegalLayout } from '@/components/ui/legal-layout';

export const metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales obligatoires du site Aexo, agence de création de sites web.',
  robots: { index: false, follow: false },
  alternates: { canonical: 'https://aexoweb.com/mentions-legales' },
};

export default function MentionsLegalesPage() {
  return (
    <LegalLayout
      title="Mentions légales"
      subtitle="Conformément à la loi n° 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique (LCEN)."
      updatedAt="22 avril 2026"
      sections={[
        {
          title: 'Éditeur du site',
          content: (
            <>
              <p>Le site <strong className="text-foreground">aexoweb.com</strong> est édité par :</p>
              <ul className="mt-3 space-y-1.5 list-none">
                <li><span className="text-foreground/60">Raison sociale :</span> <strong className="text-foreground">Création en cours...</strong></li>
                <li><span className="text-foreground/60">Forme juridique :</span> Création en cours...</li>
                <li><span className="text-foreground/60">Capital social :</span> Création en cours...</li>
                <li><span className="text-foreground/60">Siège social :</span> Création en cours...</li>
                <li><span className="text-foreground/60">SIRET :</span> Création en cours...</li>
                <li><span className="text-foreground/60">RCS :</span> Création en cours...</li>
                <li><span className="text-foreground/60">N° TVA intracommunautaire :</span> Création en cours...</li>
                <li><span className="text-foreground/60">Directeur de la publication :</span> Création en cours...</li>
                <li>
                  <span className="text-foreground/60">Contact :</span>{' '}
                  <a href="mailto:contact@aexoweb.com" className="text-foreground underline underline-offset-2 hover:text-foreground/70 transition-colors">
                    contact@aexoweb.com
                  </a>
                </li>
              </ul>
            </>
          ),
        },
        {
          title: 'Hébergement',
          content: (
            <>
              <p>Le site est hébergé par :</p>
              <ul className="mt-3 space-y-1.5 list-none">
                <li><span className="text-foreground/60">Société :</span> <strong className="text-foreground">Hostinger.</strong></li>
                {/* <li><span className="text-foreground/60">Adresse :</span> 340 Pine Street, Suite 700, San Francisco, CA 94104, États-Unis</li> */}
                <li>
                  <span className="text-foreground/60">Site web :</span>{' '}
                  <a href="https://hostinger.com" target="_blank" rel="noopener noreferrer" className="text-foreground underline underline-offset-2 hover:text-foreground/70 transition-colors">
                    hostinger.com
                  </a>
                </li>
              </ul>
            </>
          ),
        },
        {
          title: 'Propriété intellectuelle',
          content: (
            <>
              <p>
                L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, sons, logiciels, etc.)
                constitue une œuvre protégée par les lois françaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments
                du site, quel que soit le moyen ou le procédé utilisé, est interdite, sauf autorisation écrite préalable
                d'<strong className="text-foreground">Aexo</strong>.
              </p>
              <p>
                Toute exploitation non autorisée du site ou de l'un quelconque des éléments qu'il contient est considérée
                comme constitutive d'une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2
                et suivants du Code de Propriété Intellectuelle.
              </p>
            </>
          ),
        },
        {
          title: 'Marques',
          content: (
            <p>
              Les marques et logos figurant sur le site sont des marques déposées par <strong className="text-foreground">Aexo</strong>
              {' '}ou par des tiers. Toute reproduction ou représentation, totale ou partielle, de ces marques sans
              autorisation expresse est interdite et constituerait une contrefaçon au sens des articles L.713-2
              et suivants du Code de la propriété intellectuelle.
            </p>
          ),
        },
        {
          title: 'Liens hypertextes',
          content: (
            <>
              <p>
                Le site peut contenir des liens hypertextes pointant vers d'autres sites internet. Dans la mesure où
                <strong className="text-foreground"> Aexo</strong> ne peut contrôler ces sites et ces ressources externes,
                elle ne peut être tenue responsable de la mise à disposition de ces sites et sources externes, et ne peut
                supporter aucune responsabilité quant à leur contenu, publicités, produits, services ou tout autre
                matériel disponible sur ces sites.
              </p>
              <p>
                Tout lien hypertexte vers le présent site est soumis à l'autorisation préalable et écrite d'<strong className="text-foreground">Aexo</strong>.
              </p>
            </>
          ),
        },
        {
          title: 'Données personnelles',
          content: (
            <p>
              Les informations concernant la collecte et le traitement des données personnelles sont détaillées dans notre{' '}
              <a href="/politique-de-confidentialite" className="text-foreground underline underline-offset-2 hover:text-foreground/70 transition-colors">
                Politique de confidentialité
              </a>
              , conformément au Règlement Général sur la Protection des Données (RGPD) n° 2016/679 du 27 avril 2016.
            </p>
          ),
        },
        {
          title: 'Cookies',
          content: (
            <p>
              Le site utilise des cookies techniques nécessaires à son bon fonctionnement. Pour en savoir plus sur
              l'utilisation des cookies et sur la manière de les gérer, veuillez consulter notre{' '}
              <a href="/politique-de-confidentialite#cookies" className="text-foreground underline underline-offset-2 hover:text-foreground/70 transition-colors">
                Politique de confidentialité
              </a>.
            </p>
          ),
        },
        {
          title: 'Limitation de responsabilité',
          content: (
            <>
              <p>
                <strong className="text-foreground">Aexo</strong> ne pourra être tenu responsable des dommages directs
                et indirects causés au matériel de l'utilisateur, lors de l'accès au site, et résultant soit de
                l'utilisation d'un matériel ne répondant pas aux spécifications techniques requises, soit de
                l'apparition d'un bug ou d'une incompatibilité.
              </p>
              <p>
                Des espaces interactifs sont à la disposition des utilisateurs. <strong className="text-foreground">Aexo</strong> se
                réserve le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace
                qui contreviendrait à la législation applicable en France, en particulier aux dispositions relatives
                à la protection des données.
              </p>
            </>
          ),
        },
        {
          title: 'Droit applicable et juridiction compétente',
          content: (
            <p>
              Les présentes mentions légales sont régies par le droit français. En cas de litige et à défaut
              d'accord amiable, les tribunaux français seront seuls compétents pour en connaître.
              Pour tout litige de consommation, le consommateur peut recourir à la médiation conventionnelle
              ou à tout autre mode alternatif de règlement des litiges conformément aux articles L.611-1 et
              suivants du Code de la consommation.
            </p>
          ),
        },
      ]}
    />
  );
}